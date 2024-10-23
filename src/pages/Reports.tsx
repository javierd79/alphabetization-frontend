import { useEffect, useState } from 'react'
import { Button, Card, Grid, ScrollArea, Table, Text } from "@mantine/core"
import axios from 'axios'
import { ISubject } from './UsersDashboard'
import CardCourses from '../components/CardCourses/CardCourses'
import { API_URL } from '../utils/Constants'
import classes from './Reports.module.css'
import { createPortal } from 'react-dom'
import cx from 'clsx';
import { useHotkeys } from '@mantine/hooks'

export interface IUser {
  id: number;
  unique_user_identifier: string;
  name: string;
  email: string;
  level: "no studies" | "primary school" | "highschool" | "degree" | "magister";
  role: string;
  phone: string;
  password_digest: string;
  profession: string;
}

function Reports() {
  const [users, setUsers] = useState<IUser[]>([])
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [subjects, setSubjects] = useState<ISubject[]>([])

  const studies = {
    "no studies": "Sin estudios",
    "primary school": "Estudios primarios",
    "highschool": "Estudios secundarios",
    "degree": "Estudios universitarios",
    "magister": "Estudios post-universitarios"
  }

  useEffect(() => {
    axios.get(API_URL + '/subjects/available')
      .then((res) => {
        setSubjects(res.data)
      })
  }, [])

  useHotkeys([
    [
      'escape',
      () => setIsOpen(false),
      { preventDefault: false }
    ]
  ])

  const setLocation = (id: number) => (id === 1 ? 'CEVAZ La Limpia' : 'CEVAZ Las Mercedes')

  const handleModal = (id: number) => {
    axios.get(API_URL + `/subjects/reports?id=${id}`)
      .then((res) => {
        setUsers(res.data)
        setIsOpen(true)
      })
      .catch(() => {
        setUsers([])
        setIsOpen(false)
      })
  }

  const rows = users.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.email}</Table.Td>
      <Table.Td>{studies[row.level]}</Table.Td>
      <Table.Td>{row.profession}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      {createPortal(
        <div className={classes.modalWrapper} style={{ display: isOpen ? 'block' : 'none' }}>
          <div className={classes.modalCard}>
            <Card withBorder>
              <Text>Reportes:</Text>
              <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
                <Table>
                  <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                    <Table.Tr>
                      <Table.Th>Nombre</Table.Th>
                      <Table.Th>Correo</Table.Th>
                      <Table.Th>Nivel</Table.Th>
                      <Table.Th>Profesión</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
                </Table>
              </ScrollArea>
              <Button mt={10} onClick={() => setIsOpen(false)} fullWidth>
                Aceptar
              </Button>
            </Card>
          </div>
        </div>,
        document.getElementById('root') || document.body
      )}
      <Text ta="center" fw={700} fz={14}>
        REPORTES POR CURSO
      </Text>
      <Grid>
        {
          subjects.map((subject: ISubject) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <CardCourses
                imageUrl="https://t1.uc.ltmcdn.com/es/posts/3/7/9/como_conocer_gente_nueva_32973_orig.jpg"
                title={subject.name}
                initDate={subject.beginning}
                location={setLocation(subject.company_id)}
                reports
                onReports={() => handleModal(subject.id)}
              />
            </Grid.Col>
          ))
        }
      </Grid>
    </div>
  )
}

export default Reports