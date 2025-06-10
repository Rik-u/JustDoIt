'use client';

import { useState } from "react";
import DeleteTaskButton from "./taskButtons/DeleteTaskButton"
import CheckmarkBox from "./taskButtons/CheckmarkBox";

type Props = {
    id: number;
    onClickDelete: (id: number) => void;
};

export default function Task({ id, onClickDelete }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const checkHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            <div className="collapse collapse-arrow max-w-screen bg-blue-400">
                <input type="checkbox" onChange={checkHandler}/>
                <div className="collapse-title flex space-x-3">
                    <CheckmarkBox onClick={() => onClickDelete(id)} /> 
                    <input type="text" placeholder="What'chu doin" className="input input-ghost z-50 flex-grow" />
                </div>
                <div className="collapse-content">
                    <input type="text" placeholder="Type here" className="input input-ghost z-50" />
                    {isOpen && <DeleteTaskButton onClick={() => onClickDelete(id)} />}
                </div>
            </div>
        </li>
    );
}