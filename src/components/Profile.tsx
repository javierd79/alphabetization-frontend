import { Avatar, Group, Image, Text } from "@mantine/core";

interface IProfile {
  name: string;
  email: string;
}

function Profile({ name, email }: IProfile) {
  return (
    <>
      <Group justify="center">
        <Avatar size='xl' radius='lg'>
          <Image src='/img/profile.png' />
        </Avatar>
      </Group>
      <Text ta="center" mt={10}>{name}</Text>
      <Text ta="center" mb={10} fw={100} fz={14} c='dimmed'>{email}</Text>
    </>
  )
}

export default Profile