import { FC } from "react";
import Label from "../label";

interface IProps {
    label: string;
    text: string;
}

const Notes: FC<IProps> = ({ label, text }) => {
    return (
        <>
            <Label>{label}</Label>
            <p>{text}</p>
        </>
    );
};

export default Notes;
