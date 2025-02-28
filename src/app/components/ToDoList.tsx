'use client';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { InitialStore, Task } from '@/types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '@/slice';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoList(props: { props: string }) {
  let arrayCompTasks = [] as Task[];

  const arrayTasks = useSelector(
    (state: InitialStore) => state.tasks
  ) as unknown as Task[];
  if (props.props === '/completedtasks') {
    arrayCompTasks = arrayTasks.filter((task) => task.completed);
  } else if (props.props === '/activetasks') {
    arrayCompTasks = arrayTasks.filter((task) => !task.completed);
  }

  const dispatch = useDispatch();

  const handleToggle = (id: number) => () => {
    dispatch(editTask(id));
  };
  const handleDelete = (task: Task) => () => {
    dispatch(deleteTask(task));
  };
  const array = props.props !== '/tasks' ? arrayCompTasks : arrayTasks;

  return (
    <List
      sx={{
        width: '100%',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'white',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'brown',
          borderRadius: '50px',
          border: '1px solid white',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#a8a8a8',
        },
        scrollbarWidth: 'thin',
        scrollbarColor: 'brown white',
      }}
    >
      {array.map((task) => (
        <ListItem key={task.id} onClick={handleToggle(task.id)}>
          <ListItemIcon>
            <Checkbox
              edge='start'
              checked={task.completed}
              tabIndex={-1}
              disableRipple
              // inputProps={{ 'aria-labelledby': `checkbox-list-label-${task.id}` }}
              sx={{
                color: 'grey',
                '&.Mui-checked': {
                  color: 'transparent',
                  borderRadius: '4px',
                  '& svg': {
                    display: 'block',
                    fill: 'white',
                  },
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            />
          </ListItemIcon>
          <ListItemText
            // id={`checkbox-list-label-${task.id}`}
            primary={task.text}
            sx={{
              flex: '0 1 auto',
              '& > *': {
                color: 'white',
                fontSize: '36px',
                fontFamily: 'marck Script',
                textShadow: '1px 1px 3px black',
                textDecoration: task.completed ? 'line-through' : 'none',
                marginRight: '24px',
                wordBreak: 'break-all',
              },
            }}
          />
          <DeleteIcon onClick={handleDelete(task)} />
        </ListItem>
      ))}
    </List>
  );
}
