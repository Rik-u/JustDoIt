'use client';   

import { CreateTaskButton , Task, TaskList } from "@/app/components";
import { JSX, useState } from "react";

export default function TaskPage() {
    const [tasks, setTasks] = useState<JSX.Element[]>([]);
    const createTask = () => {
        const newTask = <Task key={tasks.length} />;
        setTasks((prev) => [...prev, newTask]);
    };

    return (
        <div>
            <div className="max-w-50 mx-auto">
                <TaskList tasks={tasks}/>
            </div>
            <div className="fixed bottom-5 left-5">
                <CreateTaskButton onclick={createTask} />
            </div>
        </div>
    );
}