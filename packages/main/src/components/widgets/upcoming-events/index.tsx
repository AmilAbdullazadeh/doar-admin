import { FC } from "react";
import { Calendar } from "react-feather";
import { Media, MediaBody, Anchor } from "@doar/components";
import WidgetTitle from "../widget-title";
import { StyledName, StyledSpan, StyledIcon } from "./style";

const PopularGroups: FC = () => {
    return (
        <>
            <WidgetTitle title="Popular Groups" />
            <Media as="ul" mb="15px">
                <Media as="li" alignItems="center">
                    <StyledIcon bg="dark">
                        <Calendar width={24} height={24} />
                    </StyledIcon>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                My 32th Birthday
                            </Anchor>
                        </StyledName>
                        <StyledSpan>Today, April 21, 5:00pm</StyledSpan>
                    </MediaBody>
                </Media>
                <Media as="li" alignItems="center" mt="15px">
                    <StyledIcon bg="indigo">
                        <Calendar width={24} height={24} />
                    </StyledIcon>
                    <MediaBody ml="15px">
                        <StyledName>
                            <Anchor path="#!" color="text">
                                Dribbble Meetup
                            </Anchor>
                        </StyledName>
                        <StyledSpan>Tomorrow, April 22, 3:00pm</StyledSpan>
                    </MediaBody>
                </Media>
            </Media>
        </>
    );
};

export default PopularGroups;
