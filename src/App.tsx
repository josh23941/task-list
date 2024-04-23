import './App.css';
import { useState } from 'react'
import { Menu } from './components/menu/Menu'
import { TaskList } from './components/task_list/TaskList'

function App() {

  const [taskList, setTaskList] = useState(new Array<Task>())

  function addTask(task: Task): void {
    setTaskList([
      ...taskList, 
      task
    ]);
  }

  function removeTask(taskId: number): void {
    setTaskList(taskList.filter(task => task.id !== taskId));
  }

  function clearTaskList(): void {
    setTaskList([]);
  }

  return (
   <>
    <Menu callback={addTask} />
    <TaskList taskList={taskList} removeCallback={removeTask}/>
    {taskList.length > 0 ? 
      <button onClick={clearTaskList}>Clear Task List</button> : 
      ""
    }
  </>
  );
}

export default App;
