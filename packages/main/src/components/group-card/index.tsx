import { FC } from "react";
import {
    CardImage,
    Anchor,
    Avatar,
    AvatarInitial,
    Text,
    Button,
    ImageGroup,
    Image,
} from "@doar/components";
import {
    StyledCard,
    StyledCardBody,
    StyledName,
    StyledInner,
    StyledConnections,
} from "./style";

interface IProps {
    cover: string;
    avatar?: string;
    name: string;
    members: string;
    isJoined: boolean;
    color?: string;
    path: string;
    images: string[];
    connections: number;
}

const GroupCard: FC<IProps> = ({
    cover,
    avatar,
    name,
    members,
    isJoined,
    color,
    path,
    images,
    connections,
}) => {
    return (
        <StyledCard>
            <CardImage src={cover} alt="card" isTop />
            <StyledCardBody>
                <StyledInner>
                    <Anchor path={path}>
                        <Avatar size="lg">
                            {avatar && <img src={avatar} alt="card" />}
                            {!avatar && (
                                <AvatarInitial bg={color}>
                                    {name.charAt(0)}
                                </AvatarInitial>
                            )}
                        </Avatar>
                    </Anchor>
                    <StyledName>
                        <Anchor path={path} variant="link2">
                            {name}
                        </Anchor>
                    </StyledName>
                    <Text color="text3">{members} Members</Text>
                    <ImageGroup mb="5px" size="sm">
                        {images.map((img) => (
                            <Image
                                src={img}
                                key={img}
                                alt="group"
                                width="40px"
                                height="40px"
                                shape="circle"
                            />
                        ))}
                    </ImageGroup>
                    <StyledConnections>
                        {connections}{" "}
                        {connections > 1 ? "Connections" : "Connection"}
                    </StyledConnections>
                    <Button color={isJoined ? "primary" : "white"} fullwidth>
                        {isJoined ? "Leave Group" : "Join"}
                    </Button>
                </StyledInner>
            </StyledCardBody>
        </StyledCard>
    );
};

export default GroupCard;
