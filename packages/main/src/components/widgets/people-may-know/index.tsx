import { FC } from "react";
import { Media, MediaBody, Anchor, Avatar } from "@doar/components";
import image1 from "@doar/shared/images/img21.jpg";
import image2 from "@doar/shared/images/img22.jpg";
import image3 from "@doar/shared/images/img23.jpg";
import image4 from "@doar/shared/images/img24.jpg";
import WidgetTitle from "../widget-title";
import { StyledName, StyledRole } from "./style";

const PeopleMayKnow: FC = () => {
    return (
        <>
            <WidgetTitle title="People You May Know" />
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
                                Allan Ray Palban
                            </Anchor>
                        </StyledName>
                        <StyledRole>Senior Business Analyst</StyledRole>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar>
                            <img src={image2} alt="avatar" />
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Rhea Castanares
                            </Anchor>
                        </StyledName>
                        <StyledRole>Product Designer</StyledRole>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar>
                            <img src={image3} alt="avatar" />
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Philip Cesar Galban
                            </Anchor>
                        </StyledName>
                        <StyledRole>Executive Assistant</StyledRole>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar>
                            <img src={image4} alt="avatar" />
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Randy Macapala
                            </Anchor>
                        </StyledName>
                        <StyledRole>Business Entrepreneur</StyledRole>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <Anchor path="#!">
                        <Avatar>
                            <img src={image4} alt="avatar" />
                        </Avatar>
                    </Anchor>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Abigail Johnson
                            </Anchor>
                        </StyledName>
                        <StyledRole>System Administrator</StyledRole>
                    </MediaBody>
                </Media>
            </Media>
        </>
    );
};

export default PeopleMayKnow;
