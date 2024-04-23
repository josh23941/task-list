import { TaskComponent } from "../task/TaskComponent";
import  {DndContext } from '@dnd-kit/core';


type TaskListProps = {
    taskList: Array<Task>;
    removeCallback: (taskId: number) => void;
}

export const TaskList = (props: TaskListProps) => {

    function removeTask(taskId: number): void {
        props.removeCallback(taskId);
    }

    return(<table>
            <DndContext>             
            {
              props.taskList.map((task, i) => {
                return <TaskComponent task={task} removeTask={removeTask} />
              })
            }
            </DndContext>       
    </table>)
}