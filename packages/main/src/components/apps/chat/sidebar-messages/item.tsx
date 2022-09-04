import { FC, MouseEvent } from "react";
import {
    Avatar,
    AvatarInitial,
    MediaBody,
    Heading,
    Text,
    Badge,
} from "@doar/components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { togglePerson } from "../../../../redux/slices/chat-ui";
import { toggleSidebar } from "../../../../redux/slices/ui";
import { StyledItem } from "./style";

interface IProps {
    id: string;
    status: "online" | "offline";
    image?: string;
    bg?: string;
    name: string;
    lastMsgTime: string;
    unseenMsg?: number;
    activeId: string;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const Item: FC<IProps> = ({
    id,
    status,
    bg,
    image,
    name,
    lastMsgTime,
    unseenMsg,
    activeId,
    onClick,
}) => {
    const dispatch = useAppDispatch();
    const { chatType } = useAppSelector((state) => state.chatUI);

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        onClick(e);
        dispatch(toggleSidebar({ isOpen: undefined }));
        dispatch(togglePerson({ person: { image, bg, status, name } }));
    };
    return (
        <StyledItem
            id={id}
            $active={activeId === id && chatType === "direct"}
            onClick={handleClick}
        >
            <Avatar size="sm" status={status}>
                {image && <img src={image} alt={name} />}
                {!image && (
                    <AvatarInitial bg={bg}>
                        {name.substring(0, 1)}
                    </AvatarInitial>
                )}
            </Avatar>
            <MediaBody ml="10px">
                <Heading mb="0px">{name}</Heading>
                <Text as="small" display="block" color="text4">
                    {lastMsgTime}
                </Text>
            </MediaBody>
            {unseenMsg && (
                <Badge color="danger" shape="circle">
                    {unseenMsg}
                </Badge>
            )}
        </StyledItem>
    );
};

Item.defaultProps = {
    bg: "dark",
};

export default Item;
