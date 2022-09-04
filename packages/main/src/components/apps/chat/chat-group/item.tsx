/* eslint-disable react/no-danger */
import { FC } from "react";
import { Media, Avatar, AvatarInitial } from "@doar/components";
import { StyledItemBody } from "./style";

interface IProps {
    status: "online" | "offline";
    image?: string;
    bg?: string;
    name: string;
    time: string;
    content: string;
}

const Item: FC<IProps> = ({ status, image, bg, name, time, content }) => {
    return (
        <Media>
            <Avatar size="sm" status={status}>
                {image && <img src={image} alt={name} />}
                {!image && (
                    <AvatarInitial bg={bg}>
                        {name.substring(0, 1)}
                    </AvatarInitial>
                )}
            </Avatar>
            <StyledItemBody>
                <h6>
                    {name} <small>{time}</small>
                </h6>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </StyledItemBody>
        </Media>
    );
};

Item.defaultProps = {
    bg: "dark",
};

export default Item;
