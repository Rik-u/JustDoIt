import Image from "next/image";

export default function DeleteTaskButton() {
    return (
        <button className="btn btn-ghost hover:bg-red-400 absolute right-3 inset-y-1/2"><Image src="trash-can.svg" fill={true} alt="Delete Icon"></Image></button>
    );
}