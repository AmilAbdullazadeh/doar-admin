import React from "react";
import { Media, MediaLeft, Avatar, AvatarInitial } from "@doar/components";
import { StyledMediaBody, StyledStrong, StyledText, StyledSpan } from "./style";

const DropdownItem: React.FC = () => {
    return (
        <Media>
            <MediaLeft>
                <Avatar size="sm" shape="circle" status="online">
                    <AvatarInitial>SU</AvatarInitial>
                </Avatar>
            </MediaLeft>
            <StyledMediaBody>
                <StyledStrong>Suurya Prabhat</StyledStrong>
                <StyledText>Admin</StyledText>
                <StyledSpan>Sept 19 12:32pm</StyledSpan>
            </StyledMediaBody>
        </Media>
    );
};

export default DropdownItem;
