import { FC } from "react";
import { Button } from "@doar/components";
import List, { ListItem } from "../list";

interface IProps {
    list: Array<{
        key: string;
        value: string;
    }>;
}

const Calculation: FC<IProps> = ({ list }) => {
    return (
        <>
            <List pr="10px">
                {list.map((item, i) => {
                    if (i === list.length - 1) {
                        return (
                            <ListItem key={item.key}>
                                <strong>{item.key}</strong>
                                <strong>{item.value}</strong>
                            </ListItem>
                        );
                    }
                    return (
                        <ListItem key={item.key}>
                            <span>{item.key}</span>
                            <span>{item.value}</span>
                        </ListItem>
                    );
                })}
            </List>
            <Button fullwidth>Pay Now</Button>
        </>
    );
};

export default Calculation;
