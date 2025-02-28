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
import ListIcon from '@mui/icons-material/List';

const NAVIGATION: Navigation = [
  {
    segment: 'tasks',
    title: 'Tasks',
    icon: <ListAltIcon />,
  },
  {
    segment: 'activetasks',
    title: 'Active tasks',
    icon: <ListIcon />,
  },
  {
    segment: 'completedtasks',
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
  const title =
    pathname === '/tasks'
      ? 'Add the task to your to-do list'
      : pathname === '/activetasks'
        ? 'Active task list'
        : 'Completed task list';

  const content = (
    <>
      <h1 className={styles.title}>{title}</h1>
      <ContentPage props={pathname} />
    </>
  );

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
        <Image src='/to-do__app/logo.png' alt='ToDo logo' width='40' height='40' />
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
          '.MuiSvgIcon-root': {
            color: 'rgb(234,191,34) !important',
          },
          '.container .MuiSvgIcon-root': {
            color: 'orange !important',
          },
          '.MuiDrawer-root .MuiListItemText-root span': {
            fontFamily: 'Russo One',
          },
        }}
      >
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
