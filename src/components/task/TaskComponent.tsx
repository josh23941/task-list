import { useDraggable } from '@dnd-kit/core'

type TaskComponentProps = {
    task: Task,
    removeTask: (taskId: number) => void,
    //draggableId: string
}

export const TaskComponent = (props: TaskComponentProps) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
    });

    const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
            <tr ref={setNodeRef} id={props.task.id.toString()} style={style} {...listeners} {...attributes}>
                <td>{props.task.name}</td>
                <td><button onClick={() => props.removeTask(props.task.id)}>Remove</button></td>
            </tr>
      );
};