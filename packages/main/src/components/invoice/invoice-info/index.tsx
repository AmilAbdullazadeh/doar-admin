import { FC } from "react";
import Label from "../label";
import List, { ListItem } from "../list";

interface IProps {
    label: string;
    list: Array<{
        key: string;
        value: string;
    }>;
}

const InvoiceInfo: FC<IProps> = ({ label, list }) => {
    return (
        <>
            <Label>{label}</Label>
            <List>
                {list.map((item) => (
                    <ListItem key={item.key}>
                        <span>{item.key}</span>
                        <span>{item.value}</span>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default InvoiceInfo;
