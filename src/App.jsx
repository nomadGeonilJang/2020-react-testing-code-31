import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';
import { updateTaskTitle, addTask, deleteTask } from './actions';

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((s) => s);

  function handleChangeTitle(e) {
    dispatch(updateTaskTitle(e.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
  }

  return (
    <Page
      taskTitle={state.taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={state.tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
