import { FC } from "react";
import { MoreHorizontal, ThumbsUp, MessageSquare, Share } from "react-feather";
import {
    CardBody,
    Heading,
    Anchor,
    Text,
    Media,
    Avatar,
    MediaBody,
    Nav,
    NavLink,
} from "@doar/components";
import image from "@doar/shared/images/img15.jpg";
import Header from "../header";
import Footer from "../footer";
import { StyledCard, StyledRole, StyledTime, StyledGrayBox } from "./style";

const LatestActivity: FC = () => {
    return (
        <StyledCard mb={["20px", null, null, "25px"]}>
            <Header>
                <Heading tt="uppercase" fontWeight="600" mb="0px">
                    Latest Activity
                </Heading>
                <Anchor path="#!" variant="link3">
                    <MoreHorizontal width={18} height={18} />
                </Anchor>
            </Header>
            <CardBody p={["20px", "20px", null, "25px"]}>
                <Media alignItems="center" mb="20px">
                    <Avatar status="online">
                        <img src={image} alt="avatar" />
                    </Avatar>
                    <MediaBody ml="15px">
                        <Heading mb="3px">Dyanne Aceron</Heading>
                        <StyledRole>Cigarette Butt Collector</StyledRole>
                    </MediaBody>
                    <StyledTime>5 hours ago</StyledTime>
                </Media>
                <Text mb="20px">
                    Our team is expanding again. We are looking for a Product
                    Manager and Software Engineer to drive our new aspects of
                    our capital projects. If you&apos;re interested, please drop
                    a comment here or simply message me.{" "}
                    <a href="#!">#softwareengineer</a>{" "}
                    <a href="#!">#engineering</a>
                </Text>
                <StyledGrayBox>
                    <Heading fontSize="15px" mb="3px">
                        We&apos;re hiring of Product Manager
                    </Heading>
                    <Text fontSize="14px" mb="0">
                        Full-time, $60,000 - $80,000 annual
                    </Text>
                    <Text as="span" fontSize="13px" color="text3">
                        Full-time, $60,000 - $80,000 annual
                    </Text>
                </StyledGrayBox>
            </CardBody>
            <Footer>
                <Nav customStyle="with-icon">
                    <NavLink path="#!">
                        <ThumbsUp /> Like
                    </NavLink>
                    <NavLink path="#!">
                        <MessageSquare /> Comment
                    </NavLink>
                    <NavLink path="#!">
                        <Share /> Share
                    </NavLink>
                </Nav>
            </Footer>
        </StyledCard>
    );
};

export default LatestActivity;
