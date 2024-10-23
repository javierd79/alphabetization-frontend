import { IconCalendar } from '@tabler/icons-react';
import { Card, Text, Group, Center, rem, useMantineTheme, Button } from '@mantine/core';
import classes from './CardCourses.module.css';

interface ICardCourses {
  link?: string;
  title?: string;
  reports?: boolean;
  location?: string;
  initDate?: string;
  imageUrl?: string;
  onReports?: () => void;
  isSubscripted?: boolean;
  onSubscript?: () => void;
}

function CardCourses({
  link,
  title,
  location,
  initDate,
  imageUrl,
  onReports,
  onSubscript,
  isSubscripted,
  reports = false
}: ICardCourses) {
  const theme = useMantineTheme();

  return (
    <Card
      p="lg"
      shadow="lg"
      radius="md"
      href={link}
      component="a"
      className={classes.card}
      onClick={reports ? onReports : undefined}
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
            `url(${imageUrl})`,
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {title}
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
              {location}
            </Text>

            <Group gap="lg">
              <Center>
                <IconCalendar
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  {initDate}
                </Text>
              </Center>
              <Center>
                {/* <IconClock
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                /> */}
                {
                  !reports ? isSubscripted ? <Text c="dimmed" size='sm' mt={-2}>Suscrito</Text> : <Button size='xs' onClick={onSubscript}>Suscribete</Button> : <></>
                }
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
}

export default CardCourses;