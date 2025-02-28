'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addTask } from '@/slice';
import { useDispatch } from 'react-redux';
import ToDoList from './ToDoList';

export default function ContentPage(props: { props: string }) {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      dispatch(addTask({ id: Date.now(), text: value, completed: false }));
      setValue('');
    }
  };

  return (
    <>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        // sx={{ minWidth: '300px' }}
      >
        <TextField
          id='outlined-basic'
          label='Enter task'
          variant='outlined'
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          value={value}
          sx={{
            width: '100%',
            '& .MuiInputLabel-root': {
              color: 'white',
              fontFamily: 'marck Script',
              fontSize: '36px',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: '2px solid white',
                borderRadius: 0,
              },
              '&:hover fieldset': {
                border: '2px solid brown',
                borderRadius: 0,
              },

              '&.Mui-focused fieldset': {
                border: '2px solid white',
              },
            },
            '& .MuiInputLabel-root.MuiInputLabel-shrink': {
              color: 'white',
              fontSize: '24px',
            },
            '& .MuiInputBase-input': {
              color: 'white',
              fontSize: '36px',
              fontFamily: 'marck Script',
              textShadow: '1px 1px 3px black',
            },
          }}
        />
      </Box>
      <ToDoList props={props.props} />
    </>
  );
}
