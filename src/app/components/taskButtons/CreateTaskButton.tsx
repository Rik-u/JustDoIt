'use client';

export default function CreateTaskButton(props:{onclick:()=>void}) {
    return (
        <button className="btn btn-circle min-w-13 min-h-13 text-xl" onClick={props.onclick}>+</button>
    );
}