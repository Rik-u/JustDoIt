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
            <div className="collapse bg-blue-400">
                <input type="checkbox" onChange={checkHandler}/>
                <div className="collapse-title"><CheckmarkBox onClick={() => onClickDelete(id)}/> Test</div>
                <div className="collapse-content">Test content</div>
                {isOpen && <DeleteTaskButton onClick={() => onClickDelete(id)}/>}
            </div>
        </li>
    );
}