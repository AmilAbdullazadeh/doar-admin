import { FC } from "react";
import { Avatar, AvatarInitial } from "@doar/components";
import { useAppSelector } from "../../../../redux/hooks";
import { StyledWrap, StyledName } from "./style";

const DirectTitle: FC = () => {
    const { person } = useAppSelector((state) => state.chatUI);
    return (
        <StyledWrap>
            <Avatar size="sm">
                {person?.image && (
                    <img src={person?.image} alt={person?.name} />
                )}
                <AvatarInitial bg={person?.bg}>
                    {person?.name.substring(0, 1)}
                </AvatarInitial>
            </Avatar>
            <StyledName>@{person?.name}</StyledName>
        </StyledWrap>
    );
};

export default DirectTitle;
