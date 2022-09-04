import { FC } from "react";
import Label from "../label";
import { StyledNumb } from "./style";

interface IProps {
    label: string;
    invoice: string;
}

const InvoiceNumb: FC<IProps> = ({ label, invoice }) => {
    return (
        <>
            <Label>{label}</Label>
            <StyledNumb>{invoice}</StyledNumb>
        </>
    );
};

export default InvoiceNumb;
