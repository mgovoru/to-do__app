'use client';
import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import styles from './page.module.css';
import ContentPage from './components/ContentPage';
import Image from 'next/image';
import { Stack, Typography } from '@mui/material';

const NAVIGATION: Navigation = [
  {
    segment: 'tasks',
    title: 'Tasks',
    icon: <ListAltIcon />,
  },
  {
    segment: 'ocompletyedtasks',
    title: 'Compeleted tasks',
    icon: <PlaylistAddCheckIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  let content;

  if (pathname === '/tasks' || pathname === '') {
    content = (
      <>
        <h1 className={styles.title}>Add the task to the task list</h1>
        <ContentPage />
      </>
    );
  } else {
    content = <h1>list</h1>;
  }
  return (
    <div className={styles.page}>
      <div className='container'>{content}</div>
    </div>
  );
}

export default function DashboardLayoutBranding() {
  const router = useDemoRouter('/tasks');

  function CustomAppTitle() {
    return (
      <Stack direction='row' alignItems='center' spacing={2}>
        <Image src='/logo.png' alt='ToDo logo' width='40' height='40' />
        <Typography variant='h4' sx={{ fontFamily: 'Russo One' }}>
          To Do App
        </Typography>
      </Stack>
    );
  }

  return (
    <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
        }}
        sx={{
          '.MuiListItemText-root span': { fontFamily: 'Russo One' },
          '.MuiSvgIcon-root': {
            color: 'rgb(234,191,34)',
          },
        }}
      >
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
