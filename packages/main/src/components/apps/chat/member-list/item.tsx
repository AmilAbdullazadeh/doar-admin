import { FC } from "react";
import { Avatar, AvatarInitial, MediaBody, Heading } from "@doar/components";
import { StyledItem } from "./style";

interface IProps {
    status: "online" | "offline";
    image?: string;
    bg?: string;
    name: string;
}

const Item: FC<IProps> = ({ status, image, bg, name }) => {
    return (
        <StyledItem>
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
            </MediaBody>
        </StyledItem>
    );
};

Item.defaultProps = {
    bg: "dark",
};

export default Item;
