type Props = {
    onClick: () => void;
};

export default function CheckmarkBox({ onClick }: Props) {
    return (
        <input type="checkbox" className="checkbox checkbox-success checkbox-md z-50 outline-1 my-auto" onClick={onClick}/>
    );
}