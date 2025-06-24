'use client';   

import { CreateTaskButton , TaskList } from "@/app/components";
import { useState } from "react";

export default function TaskPage() {
    const [tasks, setTasks] = useState <{id: number}[]>([]);

    const createTask = () => {
        const newTask = {id: Date.now()};
        setTasks(prev => [...prev, newTask]);
    };

    const deleteTask = (id: number) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    return (
        <div>
            <div className="min-w-50 mx-auto p-3">
                <TaskList tasks={tasks} onClick={deleteTask}/>
            </div>
            <div className="fixed bottom-5 left-5">
                <CreateTaskButton onclick={createTask} />
            </div>
        </div>
    );
}