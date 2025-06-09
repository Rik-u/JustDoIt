'use client';

import { useState } from "react";
import DeleteTaskButton from "./DeleteTaskButton"

export default function Task() {
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
                {isOpen && <DeleteTaskButton />}
            </div>
        </li>
    );
}