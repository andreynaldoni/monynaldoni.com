import { AppShell } from '@mantine/core';
import { useLocalStorage, useMediaQuery } from '@mantine/hooks';

import HomeCarousel from 'components/HomeCarousel';
import HomeNavbar from 'components/HomeNavbar';
import HomePortfolio from 'components/HomePortfolio';
import HomePosts from 'components/HomePosts';

const Home = () => {
  // const isMobile = useMediaQuery('(max-width: 767px)');
  const isMedium = useMediaQuery('(max-width: 991px)');

  return (
    <AppShell
      navbar={<HomeNavbar />}
      styles={{
        main: {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: isMedium ? 0 : 300,
          // paddingLeft: 0,
          paddingRight: 0,
        },
      }}
    >
      <HomeCarousel />
      <HomePortfolio />
      <HomePosts />
    </AppShell>
  );
};

export default Home;
