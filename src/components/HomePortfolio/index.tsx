import { Box, Grid, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import HomeCard from 'components/HomeCard';

const HomePortfolio = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const data = [
    {
      image: 'images/albums/Newborn/Alice%20-%20newborn/1.jpg',
      title: 'Newborn',
      customer: 'Alice',
      link: '#',
    },
    {
      image: 'images/albums/Gestante/Selma/1.jpg',
      title: 'Gestante',
      customer: 'Selma',
      link: '#',
    },
    {
      image: 'images/albums/Acompanhamento/4%20meses%20Augusto/1.jpg',
      title: 'Acompanhamento',
      customer: 'Augusto',
      link: '#',
    },
    {
      image: 'images/albums/Smash%20the%20cake/Luna/1.jpg',
      title: 'Smash the cake',
      customer: 'Luna',
      link: '#',
    },
    {
      image: 'images/albums/Família/Manu/10.jpg',
      title: 'Família',
      customer: 'Manu',
      link: '#',
    },
  ];

  return (
    <Box
      sx={(theme) => ({
        marginTop: theme.spacing.xl * 2,
        marginBottom: theme.spacing.xl * 2,
      })}
    >
      <Title align="center" weight={700} mb="md">
        Portfólio
      </Title>
      <Box sx={{ width: '100%' }} p="md">
        <Grid grow>
          {data.map((card) => (
            <Grid.Col span={isMobile ? 12 : 4} key={card.image}>
              <HomeCard
                customer={card.customer}
                image={card.image}
                link={card.link}
                title={card.title}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePortfolio;
