import {
  IconGift,
  IconReceipt2,
  IconShare,
} from '@tabler/icons-react';
import classes from './SidebarLinks.module.css'
import { useState } from 'react';
import { Button } from '@mantine/core';
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SidebarLinks() {
  const [active, setActive] = useState<string>('Cursos disponibles');

  const handleClose = () => {
    localStorage.removeItem('token')
    redirect('/login')
  }

  const links = {
    student: [
      { link: '/dashboard', label: 'Cursos disponibles', icon: IconGift },
      // { link: '/dashboard/payment-history', label: 'Historial', icon: IconReceipt2 },
      { link: '/dashboard/contact', label: 'Contactános', icon: IconShare },
      // { link: '/dashboard/settings', label: 'Configuración', icon: IconSettings },
    ],
    admin: [
      { link: '/admin', label: 'Crear nuevo curso', icon: IconGift },
      { link: '/admin/reports', label: 'Reportes', icon: IconReceipt2 },
      // { link: '/admin/questions', label: 'Feedback de los usuarios', icon: IconShare },
      // { link: '/dashboard/settings', label: 'Configuración', icon: IconSettings },
    ],
  }

  const selectByRoute = window.location.pathname.startsWith('/admin') ? 'admin' : 'student'

  return (
    <>
      {
        links[selectByRoute].map((item) => (
          <Link
            className={classes.link}
            data-active={item.label === active || undefined}
            to={item.link}
            key={item.label}
            onClick={() => {
              setActive(item.label);
            }}
          >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
          </Link>
        ))
      }
      <Button 
        color='red' 
        variant='light'
        onClick={handleClose}
        className={classes.buttonRed}
      >
        Cerrar Sesión
      </Button>
    </>
  )
}

export default SidebarLinks