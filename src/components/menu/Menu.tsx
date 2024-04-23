import { useState } from 'react';

export type MenuProps = {
    callback: (task: Task) => void;
};

export const Menu = ( props: MenuProps ) => {

    const [taskCount, setTaskCount] = useState(0);

    function addTask() {
        let taskInput: HTMLInputElement = document.getElementById("addTaskInput") as HTMLInputElement;
        if (!!taskInput.value && taskInput.value.length > 0) {
            props.callback({ 
                id: taskCount,
                name: taskInput.value
            });
            taskInput.value = "";
            setTaskCount(taskCount + 1)
        }
    }

    return (
        <div id="menu">
            <button onClick={addTask}>Add Task</button>
            <input id="addTaskInput" />
        </div>
    )
}