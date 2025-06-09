import { JSX } from "react";

type Props = {
    tasks: JSX.Element[];
  };

export default function TaskList({ tasks }: Props) {
    return (
        <ul className="space-y-3">
            {tasks.map((task) => task)}
        </ul>
    );

}