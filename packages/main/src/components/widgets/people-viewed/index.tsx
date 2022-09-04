import { FC } from "react";
import {
    Media,
    MediaBody,
    Anchor,
    Avatar,
    AvatarInitial,
} from "@doar/components";
import image1 from "@doar/shared/images/img6.jpg";
import image2 from "@doar/shared/images/img7.jpg";
import WidgetTitle from "../widget-title";
import { StyledName, StyledRole } from "./style";

const PeopleViewd: FC = () => {
    return (
        <>
            <WidgetTitle title="People Also Viewed" />
            <Media as="ul" mb="15px">
                <Media as="li" alignItems="center">
                    <Anchor path="#!">
                        <Avatar status="online">
                            <img src={image1} alt="avatar" />
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Roy Recamadas
                            </Anchor>
                        </StyledName>
                        <StyledRole>UI/UX Designer &amp; Developer</StyledRole>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar status="offline">
                            <img src={image2} alt="avatar" />
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Raymart Serencio
                            </Anchor>
                        </StyledName>
                        <StyledRole>Full-Stack Developer</StyledRole>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar status="offline">
                            <AvatarInitial bg="teal">R</AvatarInitial>
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Rolando Paloso Jr
                            </Anchor>
                        </StyledName>
                        <StyledRole>Licensed Architect</StyledRole>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar status="online">
                            <AvatarInitial bg="indigo">R</AvatarInitial>
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Robert Restificar
                            </Anchor>
                        </StyledName>
                        <StyledRole>Business Analyst</StyledRole>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar status="online">
                            <AvatarInitial bg="gray600">A</AvatarInitial>
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Archie Cantones
                            </Anchor>
                        </StyledName>
                        <StyledRole>Senior Software Architect</StyledRole>
                    </MediaBody>
                </Media>
            </Media>
        </>
    );
};

export default PeopleViewd;
