import { FC } from "react";
import { Avatar, AvatarInitial } from "@doar/components";
import { ITransaction } from "@doar/shared/types";
import {
    StyledListMiddle,
    StyledListTitle,
    StyledListText,
    StyledListEnd,
    StyledListTrans,
    StyledListStatus,
} from "./style";

type Transaction = Omit<ITransaction, "id">;

const Item: FC<Transaction> = ({ title, date, count, status, state }) => {
    let icon;
    let bg;
    let opacity = 1;
    if (state === "completed") {
        icon = "fa fa-check";
        bg = "teal";
    } else if (state === "refund") {
        icon = "fa fa-exchange-alt";
        bg = "indigo";
    } else if (state === "deilvered") {
        icon = "fa fa-bus-alt";
        bg = "orange";
        opacity = 0.5;
    } else if (state === "failed") {
        icon = "fa fa-times";
        bg = "orange";
        opacity = 0.5;
    }
    return (
        <>
            <Avatar display={["none", "block"]}>
                <AvatarInitial bg={bg} opacity={opacity}>
                    <i className={icon} />
                </AvatarInitial>
            </Avatar>
            <StyledListMiddle>
                <StyledListTitle>{title}</StyledListTitle>
                <StyledListText>{date}</StyledListText>
            </StyledListMiddle>
            <StyledListEnd>
                <StyledListTrans>+ {count}</StyledListTrans>
                <StyledListStatus $status={status}>
                    {status === "success" && "Completed"}
                    {status === "pending" && "For Pickup"}
                    {status === "declined" && "Declined"}
                </StyledListStatus>
            </StyledListEnd>
        </>
    );
};

export default Item;
