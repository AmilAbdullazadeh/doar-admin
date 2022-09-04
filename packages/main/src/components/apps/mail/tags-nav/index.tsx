import { FC } from "react";
import { Tag } from "react-feather";
import { Nav, NavLink } from "@doar/components";
import Label from "../label";
import { StyledWrap } from "./style";

const TagsNav: FC = () => {
    return (
        <StyledWrap>
            <Label pl="10px">Tags</Label>
            <Nav customStyle="sidebar" fontSize="13px">
                <NavLink path="#!">
                    <Tag />
                    <span>Facebook</span>
                </NavLink>
                <NavLink path="#!">
                    <Tag />
                    <span>Twitter</span>
                </NavLink>
            </Nav>
        </StyledWrap>
    );
};

export default TagsNav;
