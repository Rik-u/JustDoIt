'use client';

export default function CreateTaskButton() {
    const createTask =() => {
        console.log("Task created");
    };

    return (
        <button className="btn btn-circle absolute bottom-5 left-5 min-w-13 min-h-13 text-xl" onClick={createTask}>+</button>
    );
}