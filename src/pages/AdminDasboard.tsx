import classes from './AdminDashboard.module.css'
import { Button, Card, Chip, Group, NumberInput, Select, Text, TextInput } from "@mantine/core"
import { DateInput } from "@mantine/dates"

function AdminDasboard() {
  const weekdays = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
  ]

  return (
    <div>
      <Text ta="center" fw={700} fz={14}>
        CREAR NUEVO CURSO
      </Text>
      <Group w="100%" justify="center">
        <Card maw={700} w="100%">
          <TextInput
            placeholder="Nombre del curso"
            label="Nombre del curso"
          />
          <NumberInput
            placeholder="Plazas del curso"
            label="Plazas maxima del curso"
          />
          <Group w="100%" grow>
            <DateInput
              label="Fecha de inicio"
              placeholder="Fecha de inicio"
            />
            <div
              className={classes.pills}
            >
              {
                weekdays.map((day) => {
                  return (
                    <Chip
                      variant="light"
                      size='xs'
                    >
                      {day}
                    </Chip>
                  )
                })
              }
            </div>
          </Group>
          <Select
            data={[
              { label: 'Cevaz La Limpia', value: '1' },
              { label: 'Cevaz Las Mercedes', value: '2' }
            ]}
            label="Ingrese la sede del curso"
            placeholder='Sede del curso'
          />
          <Button
            variant='light'
            fullWidth
            mt={20}
          >
            Crear nuevo curso
          </Button>
        </Card>
      </Group>
    </div>
  )
}

export default AdminDasboard