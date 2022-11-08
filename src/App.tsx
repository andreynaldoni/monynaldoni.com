import { MantineProvider } from '@mantine/core';

import Routes from 'routes';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes />
    </MantineProvider>
  );
}

export default App;
