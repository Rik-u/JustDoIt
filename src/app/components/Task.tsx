'use client';

import { useState } from "react";
import DeleteTaskButton from "./DeleteTaskButton"

type Props = {
    id: number;
    onClick: (id: number) => void;
};

export default function Task({ id, onClick }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const checkHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            <div className="collapse bg-blue-400">
                <input type="checkbox" onChange={checkHandler}/>
                <div className="collapse-title">Test</div>
                <div className="collapse-content">Test content</div>
                {isOpen && <DeleteTaskButton onClick={() => onClick(id)}/>}
            </div>
        </li>
    );
}