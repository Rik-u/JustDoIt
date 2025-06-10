import Task from "./Task";

type TaskType = {
    id: number;
};

type Props = {
    tasks: TaskType[];
    onClick: (id: number) => void
};

export default function TaskList({ tasks, onClick }: Props) {
    return (
        <ul className="space-y-3">
            {tasks.map(task => <Task key={task.id} id={task.id} onClickDelete={onClick}/>)}
        </ul>
    );

}