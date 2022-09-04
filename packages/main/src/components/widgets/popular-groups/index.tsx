import { FC } from "react";
import {
    Media,
    MediaBody,
    Anchor,
    Avatar,
    AvatarInitial,
} from "@doar/components";
import image1 from "@doar/shared/images/img26.jpg";
import WidgetTitle from "../widget-title";
import { StyledName, StyledRole } from "./style";

const PopularGroups: FC = () => {
    return (
        <>
            <WidgetTitle title="Popular Groups" />
            <Media as="ul" mb="15px">
                <Media as="li" alignItems="center">
                    <Anchor path="#!">
                        <Avatar>
                            <img src={image1} alt="avatar" />
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Human Resources
                            </Anchor>
                        </StyledName>
                        <StyledRole>1,232,099 Members</StyledRole>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar>
                            <AvatarInitial bg="dark">UI</AvatarInitial>
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                UI Designers World
                            </Anchor>
                        </StyledName>
                        <StyledRole>1,055,767 Members</StyledRole>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar>
                            <AvatarInitial bg="gray500">B</AvatarInitial>
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Backend Developers
                            </Anchor>
                        </StyledName>
                        <StyledRole>1,002,005 Members</StyledRole>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar>
                            <AvatarInitial bg="indigo">B</AvatarInitial>
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Bootstrap Wizards
                            </Anchor>
                        </StyledName>
                        <StyledRole>1,032,292 Members</StyledRole>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar>
                            <AvatarInitial bg="pink">B</AvatarInitial>
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                SASS Gurus
                            </Anchor>
                        </StyledName>
                        <StyledRole>990,010 Members</StyledRole>
                    </MediaBody>
                </Media>
            </Media>
        </>
    );
};

export default PopularGroups;
