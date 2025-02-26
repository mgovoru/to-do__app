import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { InitialStore, Task } from '@/types';
import { useSelector, useDispatch } from 'react-redux';
import { editTask } from '@/slice';

export default function TodoList() {
  
  const arrayTasks = useSelector(
    (state: InitialStore) => state.tasks
  ) as unknown as Task[];

  console.log(arrayTasks);

  const dispatch = useDispatch();

  const handleToggle = (id: number) => () => {
    dispatch(editTask(id));
  };

  return (
    <List sx={{ width: '100%' }}>
      {arrayTasks.map(({ id, text, completed }) => (
        <ListItem key={id} onClick={handleToggle(id)}>
          <ListItemIcon>
            <Checkbox
              edge='start'
              checked={completed}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': `checkbox-list-label-${id}` }}
            />
          </ListItemIcon>
          <ListItemText
            id={`checkbox-list-label-${id}`}
            primary={text}
            sx={{
              textDecoration: completed ? 'line-through' : 'none',
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}
