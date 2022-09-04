import { FC } from "react";
import {
    CardImage,
    Anchor,
    Avatar,
    AvatarInitial,
    Text,
    Button,
} from "@doar/components";
import { StyledCard, StyledCardBody, StyledName, StyledInner } from "./style";

interface IProps {
    cover: string;
    avatar?: string;
    name: string;
    designation: string;
    isFollowed: boolean;
    color?: string;
    path: string;
}

const Profile: FC<IProps> = ({
    cover,
    avatar,
    name,
    designation,
    isFollowed,
    color,
    path,
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
                    <Text color="text3">{designation}</Text>
                    <Button color={isFollowed ? "primary" : "white"} fullwidth>
                        {isFollowed ? "Unfollow" : "Follow"}
                    </Button>
                </StyledInner>
            </StyledCardBody>
        </StyledCard>
    );
};

export default Profile;
