import { Container, Stack } from '@mui/material';
import { PropsWithChildren } from 'react';

interface PageLayoutProps {
  fullHeight?: boolean;
}

export default function PageLayout({ children, fullHeight }: PropsWithChildren<PageLayoutProps>) {
  return (
    <Container
      sx={{
        py: 2,
        ...(fullHeight && { height: '100%', display: 'flex', flexDirection: 'column' }),
      }}
    >
      <Stack gap={3} sx={fullHeight ? { flex: 1, minHeight: 0 } : undefined}>
        {children}
      </Stack>
    </Container>
  );
}
