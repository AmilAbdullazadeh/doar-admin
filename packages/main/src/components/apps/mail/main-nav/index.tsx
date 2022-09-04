import { FC } from "react";
import { Inbox, Monitor, Clock, Star, File, Slash, Trash } from "react-feather";
import { Badge, Nav, NavLink } from "@doar/components";
import { StyledWrap } from "./style";

const MainNav: FC = () => {
    return (
        <StyledWrap>
            <Nav customStyle="sidebar" fontSize="13px">
                <NavLink path="#!" active>
                    <Inbox />
                    <span>Inbox</span>
                    <Badge>20</Badge>
                </NavLink>
                <NavLink path="#!">
                    <Monitor />
                    <span>Starred</span>
                    <Badge>3</Badge>
                </NavLink>
                <NavLink path="#!">
                    <Clock />
                    <span>Important</span>
                    <Badge>10</Badge>
                </NavLink>
                <NavLink path="#!">
                    <Star />
                    <span>Sent Mail</span>
                    <Badge>8</Badge>
                </NavLink>
                <NavLink path="#!">
                    <File />
                    <span>Drafts</span>
                    <Badge>15</Badge>
                </NavLink>
                <NavLink path="#!">
                    <Slash />
                    <span>Spam</span>
                    <Badge>128</Badge>
                </NavLink>
                <NavLink path="#!">
                    <Trash />
                    <span>Trash</span>
                    <Badge>6</Badge>
                </NavLink>
            </Nav>
        </StyledWrap>
    );
};

export default MainNav;
