import { FC } from "react";
import { Folder, Monitor, Clock, Star, Trash } from "react-feather";
import { Nav, NavLink } from "@doar/components";
import Label from "../label";
import { StyledWrap } from "./style";

const MyDrive: FC = () => {
    return (
        <StyledWrap>
            <Label pl={10}>My Drive</Label>
            <Nav customStyle="sidebar">
                <NavLink path="#!" active>
                    <Folder />
                    <span>All Files</span>
                </NavLink>
                <NavLink path="#!">
                    <Monitor />
                    <span>My Devices</span>
                </NavLink>
                <NavLink path="#!">
                    <Clock />
                    <span>Recents</span>
                </NavLink>
                <NavLink path="#!">
                    <Star />
                    <span>Important</span>
                </NavLink>
                <NavLink path="#!">
                    <Trash />
                    <span>Deleted Files</span>
                </NavLink>
            </Nav>
        </StyledWrap>
    );
};

export default MyDrive;
