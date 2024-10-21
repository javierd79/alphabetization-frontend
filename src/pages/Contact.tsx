import { Button, Card, Grid, Group, Text, Textarea, TextInput } from "@mantine/core"

function Contact() {
  return (
    <Group h="calc(100vh - 100px)" justify="center" align="center">
      <Card maw='600px' py={60} px={20}>
        <Text ta='center' mb={50} fw={600} fz={26}>Enviar un mensaje a los administradores</Text>
        <Grid>
          <Grid.Col span={6}>
            <TextInput 
              placeholder="Nombre"
              label="Nombre"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput 
              placeholder="Correo electrónico"
              label="Correo electrónico"
            />
          </Grid.Col>
          <Textarea 
            mx={8} 
            w="100%" 
            placeholder="Agrega tus comentarios" 
            label="Mensaje" 
          />
          <Button color="blue" mt={20} mx={8} fullWidth variant="light">
            Enviar feedback
          </Button>
        </Grid>
      </Card>
    </Group>
  )
}

export default Contact