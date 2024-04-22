type TaskListProps = {
    taskList: Array<Task>;
    removeCallback: (taskId: number) => void;
}

export const TaskList = (props: TaskListProps) => {

    function removeTask(taskId: number): void {
        props.removeCallback(taskId);
    }

    return(<table>
            {
              props.taskList.map((task, i) => {
                return <><tr>
                            <td>{task.name}</td>
                            <td><button onClick={() => removeTask(task.id)}>Remove</button></td></tr></>
              })
            }        
    </table>)
}