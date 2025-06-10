import Image from "next/image";

type Props = {
    onClick : () => void;
};

export default function DeleteTaskButton({ onClick }: Props) {
    return (
        <button className="btn btn-ghost hover:bg-red-400 absolute right-3 inset-y-1/2" onClick={onClick}><Image src="trash-can.svg" fill={true} alt="Delete Icon"></Image></button>
    );
}