import { Grid, Text } from "@mantine/core"
import CardCourses from "../components/CardCourses/CardCourses"
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "../utils/Constants"
import { decryptToken } from "../utils/decryptToken"

export interface ISubject {
  id: number;
  name: string;
  beginning: string;
  ending: string;
  max_students: number;
  days: string[];
  students_subscribed: number[];
  company_id: number;
}

function UsersDashboard() {
  const [subjects, setSubjects] = useState<ISubject[]>([])
  const [isSubscripted, setIsSubscripted] = useState<number>(0)

  useEffect(() => {
    axios.get(API_URL + '/subjects/available')
      .then((res) => {
        setSubjects(res.data)
      })
  }, [isSubscripted])

  const setLocation = (id: number) => (id === 1 ? 'CEVAZ La Limpia' : 'CEVAZ Las Mercedes')

  const handleSubscription = (id: number) => {
    axios.post(API_URL + `/subjects/add_user/`, {
      id: id
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(() => {
        setIsSubscripted(isSubscripted + 1)
      })
  }

  return (
    <>
      <Text fw={700} fz={14}>
        CURSOS DISPONIBLES
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
                onSubscript={() => handleSubscription(subject.id)}
                isSubscripted={subject.students_subscribed.includes(decryptToken(localStorage.getItem('token') || '').user_id)}
              />
            </Grid.Col>
          ))
        }
      </Grid>
    </>
  )
}

export default UsersDashboard