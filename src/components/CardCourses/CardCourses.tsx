import { IconCalendar, IconClock } from '@tabler/icons-react';
import { Card, Text, Group, Center, rem, useMantineTheme } from '@mantine/core';
import classes from './CardCourses.module.css';

interface ICardCourses {
  link?: string;
  hour?: string;
  title?: string;
  location?: string;
  initDate?: string;
  imageUrl?: string;
}

function CardCourses({
  link,
  hour,
  title,
  location,
  initDate,
  imageUrl,
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
                <IconClock
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  {hour}
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
}

export default CardCourses;