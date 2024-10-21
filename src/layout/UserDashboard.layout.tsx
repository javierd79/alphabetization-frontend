import { AppShell, Burger, Card, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react'
import Profile from '../components/Profile';
import SidebarLinks from '../components/Sidebar/SidebarLinks';

interface IUserDashboardLayout {
  children?: React.ReactNode;
}

function UserDashboardLayout({ children }: IUserDashboardLayout) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Text fz={14} fw={700}>MI PERFIL</Text>
        <Card>
          <Profile 
            name='Javier Diaz'
            email='javierdiazt406@gmail.com'
          />
        </Card>
        <Text fz={14} fw={700} mt={10}>MIS CURSOS</Text>
        <SidebarLinks />
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}

export default UserDashboardLayout