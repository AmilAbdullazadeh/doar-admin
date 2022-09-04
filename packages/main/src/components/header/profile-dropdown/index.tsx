import React from "react";
import {
    Edit3,
    User,
    HelpCircle,
    LifeBuoy,
    Settings,
    LogOut,
} from "react-feather";
import {
    DropdownToggle,
    Dropdown,
    Avatar,
    AvatarInitial,
} from "@doar/components";
import {
    StyledDropMenu,
    StyledAuthorName,
    StyledAuthorRole,
    StyledDropItem,
    StyledDivider,
    StyledAvatar,
} from "./style";

const ProfileDropdown: React.FC = () => {
    return (
        <Dropdown direction="down" className="dropdown-profile">
            <DropdownToggle variant="texted">
                <StyledAvatar size="sm" shape="circle">
                    <AvatarInitial>SU</AvatarInitial>
                </StyledAvatar>
            </DropdownToggle>
            <StyledDropMenu>
                <Avatar size="lg" shape="circle">
                    <AvatarInitial>SU</AvatarInitial>
                </Avatar>
                <StyledAuthorName>Suurya Prabhat</StyledAuthorName>
                <StyledAuthorRole>Administrator</StyledAuthorRole>
                <StyledDropItem path="/profile-view">
                    <Edit3 size="24" />
                    Edit Profile
                </StyledDropItem>
                <StyledDropItem path="/profile-view" mt="10px">
                    <User size="24" />
                    View Profile
                </StyledDropItem>
                <StyledDivider />
                <StyledDropItem
                    path="https://hasthemes.com/contact-us/"
                    mt="10px"
                >
                    <HelpCircle size="24" />
                    Help Center
                </StyledDropItem>
                <StyledDropItem path="/" mt="10px">
                    <LifeBuoy size="24" />
                    Forum
                </StyledDropItem>
                <StyledDropItem path="/profile-view" mt="10px">
                    <Settings size="24" />
                    Account Settings
                </StyledDropItem>
                <StyledDropItem path="/profile-view" mt="10px">
                    <Settings size="24" />
                    Privacy Settings
                </StyledDropItem>
                <StyledDropItem path="/signin" mt="10px">
                    <LogOut size="24" />
                    Sign Out
                </StyledDropItem>
            </StyledDropMenu>
        </Dropdown>
    );
};

export default ProfileDropdown;
