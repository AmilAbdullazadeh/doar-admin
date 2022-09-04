import React from "react";
import { Link } from "react-router-dom";
import { Bell } from "react-feather";
import { DropdownToggle, Dropdown } from "@doar/components";
import Notification from "../dropdown-item";
import {
    StyledDropMenu,
    StyledDropHeader,
    StyledDropItem,
    StyledDropFooter,
    StyledBadge,
} from "../header-dropdown-elements";

const NotificationDropdown: React.FC = () => {
    return (
        <Dropdown direction="down">
            <DropdownToggle variant="texted">
                <Bell className="header-icon" />
                <StyledBadge>2</StyledBadge>
            </DropdownToggle>
            <StyledDropMenu>
                <StyledDropHeader>NOTIFICATIONS</StyledDropHeader>
                <StyledDropItem path="/profile-view">
                    <Notification />
                </StyledDropItem>
                <StyledDropItem path="/profile-view">
                    <Notification />
                </StyledDropItem>
                <StyledDropItem path="/profile-view">
                    <Notification />
                </StyledDropItem>
                <StyledDropItem path="/profile-view">
                    <Notification />
                </StyledDropItem>
                <StyledDropFooter>
                    <Link to="/profile-view">View all Notifications</Link>
                </StyledDropFooter>
            </StyledDropMenu>
        </Dropdown>
    );
};

export default NotificationDropdown;
