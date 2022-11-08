import {
  createStyles,
  Image,
  Navbar,
  NavLink,
  ScrollArea,
  Stack,
  Title,
} from '@mantine/core';
import { useLocalStorage, useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({}));

const HomeNavbar = () => {
  const [opened] = useLocalStorage({
    key: 'opened',
    defaultValue: false,
  });
  const [active, setActive] = useState<number>(0);
  const { classes } = useStyles();

  const isMedium = useMediaQuery('(max-width: 991px)');

  const data = [
    { label: 'Home', link: '#' },
    { label: 'Portfólio', link: '#' },
    { label: 'Blog', link: '#' },
    { label: 'Contato', link: '#' },
  ];

  const items = data.map((item, index) => (
    <NavLink
      classNames={classes}
      key={item.label}
      active={index === active}
      label={item.label}
      component={Link}
      to={item.link}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar
      // hidden={!opened}
      fixed={false}
      p="xs"
      width={{ base: 300 }}
      sx={{
        left: !opened && isMedium ? -300 : 0,
        transition: 'all 0.5s ease-in-out',
      }}
    >
      <Navbar.Section my="xs">
        <Stack align="center">
          <Image
            src="/images/author.jpg"
            alt="Mony Naldoni Fotografia"
            height={160}
            width={160}
            radius={160}
          />
          <Title weight={800} order={2}>
            Mony Naldoni
          </Title>
        </Stack>
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {items}
      </Navbar.Section>

      {/* <Navbar.Section>Footer with user</Navbar.Section> */}
    </Navbar>
  );
};

export default HomeNavbar;
