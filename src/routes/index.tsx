import { lazy, Suspense } from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';

import Loading from 'components/Loading';

const Home = lazy(() => import('pages/Home'));
const Portfolio = lazy(() => import('pages/Portfolio'));

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </BrowserRoutes>
    </Suspense>
  );
};

export default Routes;
