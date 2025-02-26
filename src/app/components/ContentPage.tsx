import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addTask } from '@/slice';
import { useDispatch } from 'react-redux';
import ToDoList from './ToDoList';

export default function ContentPage() {
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
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='outlined-basic'
          label='Outlined'
          variant='outlined'
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          value={value}
        />
      </Box>
      <ToDoList />
    </>
  );
}
