import { FC } from "react";
import Label from "../label";
import Item from "./item";
import { StyledWrap, StyledList } from "./style";

const MemberList: FC = () => {
    return (
        <StyledWrap>
            <Label pl="10px">Members List</Label>
            <StyledList>
                <Item status="online" bg="gray500" name="dfbot" />
                <Item status="online" bg="primary" name="situmay" />
                <Item status="offline" bg="secondary" name="acantones" />
                <Item status="offline" bg="success" name="rlabares" />
                <Item status="online" bg="teal" name="h.owen" />
                <Item status="online" bg="info" name="k.billie" />
                <Item status="online" bg="indigo" name="m.audrey" />
                <Item status="online" bg="gray500" name="macasindil" />
                <Item status="online" bg="gray600" name="e.ocaba" />
                <Item status="online" bg="gray800" name="avendula" />
            </StyledList>
        </StyledWrap>
    );
};

export default MemberList;
