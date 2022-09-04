import { FC, MouseEvent } from "react";
import { Star, Edit2 } from "react-feather";
import { Avatar, AvatarInitial, MediaBody } from "@doar/components";
import {
    StyledMedia,
    StyledName,
    StyledSpan,
    StyledNav,
    StyledNavBtn,
} from "./style";

interface IProps {
    id: string;
    image?: string;
    color?: string;
    name: string;
    phone: string;
    activeId: string;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const ContactItem: FC<IProps> = ({
    id,
    image,
    color,
    name,
    phone,
    activeId,
    onClick,
}) => {
    return (
        <StyledMedia id={id} $active={activeId === id} onClick={onClick}>
            <Avatar size="sm" status="online">
                {image && <img src={image} alt={name} />}
                {!image && (
                    <AvatarInitial bg={color}>
                        {name.substring(0, 1)}
                    </AvatarInitial>
                )}
            </Avatar>
            <MediaBody ml="10px">
                <StyledName>{name}</StyledName>
                <StyledSpan>{phone}</StyledSpan>
            </MediaBody>
            <StyledNav>
                <StyledNavBtn>
                    <Star />
                </StyledNavBtn>
                <StyledNavBtn>
                    <Edit2 />
                </StyledNavBtn>
            </StyledNav>
        </StyledMedia>
    );
};

export default ContactItem;
