import React from "react";
import { Media, MediaLeft, Avatar, AvatarInitial } from "@doar/components";
import { StyledMediaBody, StyledStrong, StyledText, StyledSpan } from "./style";

const Notification: React.FC = () => {
    return (
        <Media>
            <MediaLeft>
                <Avatar size="sm" shape="circle" status="online">
                    <AvatarInitial>df</AvatarInitial>
                </Avatar>
            </MediaLeft>
            <StyledMediaBody>
                <StyledStrong>Socrates Itumay</StyledStrong>
                <StyledText>nam libero tempore cum so...</StyledText>
                <StyledSpan>Mar 15 12:32pm</StyledSpan>
            </StyledMediaBody>
        </Media>
    );
};

export default Notification;
