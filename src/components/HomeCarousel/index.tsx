import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { Box, Burger, Group, Image } from '@mantine/core';
import { useLocalStorage, useMediaQuery } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';

const HomeCarousel = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isMedium = useMediaQuery('(max-width: 991px)');
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const [opened, setOpened] = useLocalStorage({
    key: 'opened',
    defaultValue: false,
  });

  const images = [
    'images/albums/Newborn/Yasmin/Internet yasmin newborn (11).jpg',
    'images/albums/Gestante/Selma/6.jpg',
    'images/albums/Acompanhamento/11 meses Luna/2.jpg',
    'images/albums/Gestante/Geovania - gestante externo praia/7.jpg',
    'images/albums/Newborn/Bernardo - newborn/5.jpg',
  ];
  return (
    <Group spacing={0}>
      <Box sx={{ width: isMobile ? '100%' : '50%', display: 'flex' }}>
        {isMedium && (
          <Burger
            sx={{
              position: 'absolute',
              left: 16,
              top: 16,
              zIndex: 1,
              transition: 'all 0.5s ease-in-out',
            }}
            opened={opened}
            onClick={() => setOpened(!opened)}
          />
        )}
        <Carousel
          withIndicators
          plugins={[autoplay.current]}
          loop
          withControls={false}
          height="100%"
          sx={{ flex: 1 }}
          styles={{
            indicator: {
              width: 12,
              height: 4,
              transition: 'width 250ms ease',

              '&[data-active]': {
                width: 40,
              },
            },
          }}
        >
          {images.map((image) => (
            <Carousel.Slide key={image}>
              <Image src={image} height="100vh" alt="Ensaio fotográfico" />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Box>
      <Box sx={{ width: '50%' }}>
        Prazer, eu sou a Mony! Sou apaixonada por registrar a essência de cada
        um através de retratos espontâneos. Especialista em Ensaio Newborn e
        fotografia atemporal. Mony Naldoni
      </Box>
    </Group>
  );
};

export default HomeCarousel;
