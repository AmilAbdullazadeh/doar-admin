import { FC } from "react";
import {
    Media,
    MediaBody,
    Anchor,
    Avatar,
    AvatarInitial,
} from "@doar/components";
import image1 from "@doar/shared/images/img8.jpg";
import WidgetTitle from "../widget-title";
import { StyledName, StyledTime } from "./style";

const Stories: FC = () => {
    return (
        <>
            <WidgetTitle
                title="Stories"
                link={{ text: "Watch All", path: "#!" }}
            />
            <Media as="ul" mb="15px">
                <Media as="li" alignItems="center">
                    <Anchor path="#!">
                        <Avatar status="online">
                            <AvatarInitial bg="gray50">S</AvatarInitial>
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Socrates Itumay
                            </Anchor>
                        </StyledName>
                        <StyledTime>2 hours ago</StyledTime>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar status="online">
                            <AvatarInitial bg="primary">I</AvatarInitial>
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Isidore Dilao
                            </Anchor>
                        </StyledName>
                        <StyledTime>5 hours ago</StyledTime>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar status="offline">
                            <img src={image1} alt="avatar" />
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Angeline Mercado
                            </Anchor>
                        </StyledName>
                        <StyledTime>1 day ago</StyledTime>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar status="online">
                            <AvatarInitial bg="info">K</AvatarInitial>
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Kirby Avendula
                            </Anchor>
                        </StyledName>
                        <StyledTime>2 days ago</StyledTime>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar status="online">
                            <AvatarInitial bg="gray50">S</AvatarInitial>
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Socrates Itumay
                            </Anchor>
                        </StyledName>
                        <StyledTime>2 hours ago</StyledTime>
                    </MediaBody>
                </Media>
            </Media>
        </>
    );
};

export default Stories;
