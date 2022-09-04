import { FC } from "react";
import { Mic, Settings } from "react-feather";
import { Avatar, AvatarInitial, Heading } from "@doar/components";
import { StyledWrap, StyledLinks, StyledLink } from "./style";

const SidebarFooter: FC = () => {
    return (
        <>
            <StyledWrap>
                <Avatar size="sm" status="online">
                    <AvatarInitial bg="dark">d</AvatarInitial>
                </Avatar>
                <Heading fontWeight={600} mb="0px" ml="8px">
                    Katherine
                </Heading>
            </StyledWrap>
            <StyledLinks>
                <StyledLink path="#!">
                    <Mic size={18} />
                </StyledLink>
                <StyledLink path="#!">
                    <Settings size={18} />
                </StyledLink>
            </StyledLinks>
        </>
    );
};

export default SidebarFooter;
