import { Card, Group, Text } from "@mantine/core"
import { PaymentHistoryDnd } from "../components/PaymentHistoryDnd/PaymentHistoryDnd"

function History() {
  return (
    <Group
      w="100%"
      align="start"
      justify="center"
    >
      <Card maw='700px'>
        <Text fw={600} fz={14} ta='center'>MIS CURSOS ANTERIORES</Text>
        <Group
          w="100%"
          align="start"
          justify="center"
          h="calc(100vh - 100px)"
        >
          <PaymentHistoryDnd />
        </Group>
      </Card>
    </Group>
  )
}

export default History