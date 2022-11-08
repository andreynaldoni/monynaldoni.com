import { Box, Loader } from '@mantine/core';

const sx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
};

const Loading = () => {
  return (
    <Box sx={sx}>
      <Loader variant="bars" size="xl" />
    </Box>
  );
};

export default Loading;
