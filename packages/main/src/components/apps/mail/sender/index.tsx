import { FC } from "react";
import {
    Media,
    MediaBody,
    Avatar,
    AvatarInitial,
    Heading,
    Text,
} from "@doar/components";

interface IProps {
    color?: string;
    image?: string;
    name: string;
    time: string;
}

const Sender: FC<IProps> = ({ color, image, name, time }) => {
    return (
        <Media>
            <Avatar size="sm">
                {!image && (
                    <AvatarInitial bg={color}>
                        {name.substring(0, 1)}
                    </AvatarInitial>
                )}
                {image && <img src={image} alt={name} />}
            </Avatar>
            <MediaBody ml="10px">
                <Heading fontSize="13px" mb="2px">
                    {name}
                </Heading>
                <Text fontSize="11px" color="text3">
                    {time}
                </Text>
            </MediaBody>
        </Media>
    );
};

export default Sender;
