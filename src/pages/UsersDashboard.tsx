import { Grid, Text } from "@mantine/core"
import CardCourses from "../components/CardCourses/CardCourses"

function UsersDashboard() {
  return (
    <>
      <Text fw={700} fz={14}>
        CURSOS DISPONIBLES
      </Text>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <CardCourses 
            imageUrl="https://t1.uc.ltmcdn.com/es/posts/3/7/9/como_conocer_gente_nueva_32973_orig.jpg"
            title="Curso básico de Microsoft Word"
            initDate="21/10/2024"
            location="CEVAZ La Limpia"
            hour="08:00 AM"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <CardCourses 
            imageUrl="https://t1.uc.ltmcdn.com/es/posts/3/7/9/como_conocer_gente_nueva_32973_orig.jpg"
            title="Curso básico de Microsoft Word"
            initDate="21/10/2024"
            location="CEVAZ La Limpia"
            hour="08:00 AM"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <CardCourses 
            imageUrl="https://t1.uc.ltmcdn.com/es/posts/3/7/9/como_conocer_gente_nueva_32973_orig.jpg"
            title="Curso básico de Microsoft Word"
            initDate="21/10/2024"
            location="CEVAZ La Limpia"
            hour="08:00 AM"
          />
        </Grid.Col>
      </Grid>
    </>
  )
}

export default UsersDashboard