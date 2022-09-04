import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare } from "react-feather";
import { DropdownToggle, Dropdown } from "@doar/components";
import Notification from "../dropdown-item";
import {
    StyledDropMenu,
    StyledDropHeader,
    StyledDropItem,
    StyledDropFooter,
    StyledBadge,
} from "../header-dropdown-elements";

const MessageDropdown: React.FC = () => {
    return (
        <Dropdown direction="down">
            <DropdownToggle variant="texted">
                <MessageSquare className="header-icon" />
                <StyledBadge>5</StyledBadge>
            </DropdownToggle>
            <StyledDropMenu>
                <StyledDropHeader>View all Messages</StyledDropHeader>
                <StyledDropItem path="/apps/chat">
                    <Notification />
                </StyledDropItem>
                <StyledDropItem path="/apps/chat">
                    <Notification />
                </StyledDropItem>
                <StyledDropItem path="/apps/chat">
                    <Notification />
                </StyledDropItem>
                <StyledDropItem path="/apps/chat">
                    <Notification />
                </StyledDropItem>
                <StyledDropFooter>
                    <Link to="/apps/chat">View all Messages</Link>
                </StyledDropFooter>
            </StyledDropMenu>
        </Dropdown>
    );
};

export default MessageDropdown;
