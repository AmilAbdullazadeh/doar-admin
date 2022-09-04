import { FC } from "react";
import {
    Avatar,
    AvatarInitial,
    MediaBody,
    Text,
    Heading,
} from "@doar/components";
import { StyledMedia, StyledTop } from "./style";

interface IProps {
    color?: string;
    image?: string;
    name: string;
    time: string;
    title: string;
    excerpt: string;
    status?: "read" | "unread";
    onClick?: () => void;
}

const GroupItem: FC<IProps> = ({
    color,
    image,
    name,
    time,
    title,
    excerpt,
    status,
    onClick,
}) => {
    return (
        <StyledMedia className={status} onClick={onClick}>
            <Avatar>
                {!image && (
                    <AvatarInitial bg={color}>
                        {name.substring(0, 1)}
                    </AvatarInitial>
                )}
                {image && <img src={image} alt="name" />}
            </Avatar>
            <MediaBody ml="15px">
                <StyledTop>
                    <Text as="span" fontSize="12px">
                        {name}
                    </Text>
                    <Text as="span" fontSize="11px">
                        {time}
                    </Text>
                </StyledTop>
                <Heading fontSize="13px">{title}</Heading>
                <Text fontSize="12px" color="text3">
                    {excerpt}
                </Text>
            </MediaBody>
        </StyledMedia>
    );
};

GroupItem.defaultProps = {
    status: "read",
};

export default GroupItem;
