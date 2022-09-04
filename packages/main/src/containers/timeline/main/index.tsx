import { FC } from "react";
import { Anchor, Heading, Text, Image, Row, Col } from "@doar/components";
import image1 from "@doar/shared/images/img36.jpg";
import image2 from "@doar/shared/images/img26.jpg";
import image3 from "@doar/shared/images/img28.jpg";
import TimelineGroup from "../../../components/timeline/timeline-group";
import TimelineLabel from "../../../components/timeline/timeline-label";
import TimelineItem from "../../../components/timeline/timeline-item";
import TimelineTime from "../../../components/timeline/timeline-time";
import TimelineBody from "../../../components/timeline/timeline-body";
import TimelineNav from "../../../components/timeline/timeline-nav";

const MainContent: FC = () => {
    return (
        <TimelineGroup>
            <TimelineLabel>Today</TimelineLabel>
            <TimelineItem>
                <TimelineTime>10:30pm</TimelineTime>
                <TimelineBody>
                    <Heading mb={0}>Building a Simple User Interface</Heading>
                    <Text>
                        <Anchor path="#!">Elisse Joson</Anchor> San Francisco,
                        CA
                    </Text>
                    <Text>
                        In this lesson, you create a layout in XML that includes
                        a text field and a button. In the next lesson, your app
                        responds when the{" "}
                    </Text>
                    <TimelineNav>
                        <Anchor path="#!">Like</Anchor>
                        <Anchor path="#!">Comment</Anchor>
                    </TimelineNav>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineTime>08:15pm</TimelineTime>
                <TimelineBody>
                    <Heading mb={0}>
                        Blueberry Cheesecake Dessert Recipe
                    </Heading>
                    <Text>
                        <Anchor path="#!">Katherine Lumaad</Anchor> Oakland, CA
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes.
                    </Text>
                    <Anchor
                        path="#!"
                        display="block"
                        width={[null, null, null, "50%"]}
                    >
                        <Image src={image1} alt="timeline" fluid />
                    </Anchor>
                    <TimelineNav>
                        <Anchor path="#!">Like</Anchor>
                        <Anchor path="#!">Comment</Anchor>
                    </TimelineNav>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineTime>03:30pm</TimelineTime>
                <TimelineBody>
                    <Heading mb={0}>
                        Your Finances Don&apos;t Have to Be Perfect to Work
                    </Heading>
                    <Text>
                        <Anchor path="#!">Elisse Joson</Anchor> San Francisco,
                        CA
                    </Text>
                    <Text>
                        In this lesson, you create a layout in XML that includes
                        a text field and a button. In the next lesson, your app
                        responds when the lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget
                        dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes.
                    </Text>
                    <TimelineNav>
                        <Anchor path="#!">Like</Anchor>
                        <Anchor path="#!">Comment</Anchor>
                    </TimelineNav>
                </TimelineBody>
            </TimelineItem>
            <TimelineLabel>Yesterday</TimelineLabel>
            <TimelineItem>
                <TimelineTime>06:30pm</TimelineTime>
                <TimelineBody>
                    <Heading mb={0}>
                        An Engineer Explains Why You Should Always Order the
                        Larger Pizza
                    </Heading>
                    <Text>
                        <Anchor path="#!">Elisse Joson</Anchor> San Francisco,
                        CA
                    </Text>
                    <Text>
                        Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient
                        montes.
                    </Text>
                    <Row gutters={10}>
                        <Col col>
                            <Image src={image2} alt="timeline" fluid />
                        </Col>
                        <Col col>
                            <Image src={image3} alt="timeline" fluid />
                        </Col>
                    </Row>
                    <TimelineNav>
                        <Anchor path="#!">Like</Anchor>
                        <Anchor path="#!">Comment</Anchor>
                    </TimelineNav>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineTime>01:15pm</TimelineTime>
                <TimelineBody>
                    <Heading mb={0}>
                        The Strange Persistence of First Languages
                    </Heading>
                    <Text>
                        <Anchor path="#!">Elisse Joson</Anchor> San Francisco,
                        CA
                    </Text>
                    <Text>
                        In this lesson, you create a layout in XML that includes
                        a text field and a button. In the next lesson, your app
                        responds when the world.
                    </Text>
                    <TimelineNav>
                        <Anchor path="#!">Like</Anchor>
                        <Anchor path="#!">Comment</Anchor>
                    </TimelineNav>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineTime>11:45am</TimelineTime>
                <TimelineBody>
                    <Heading mb={0}>
                        How to Win Your Next Political Argument
                    </Heading>
                    <Text>
                        <Anchor path="#!">Elisse Joson</Anchor> San Francisco,
                        CA
                    </Text>
                    <Text>
                        Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient
                        montes.
                    </Text>
                    <Text>
                        In this lesson, you create a layout in XML that includes
                        a text field and a button. In the next lesson, your app
                        responds when the world.
                    </Text>
                    <TimelineNav>
                        <Anchor path="#!">Like</Anchor>
                        <Anchor path="#!">Comment</Anchor>
                    </TimelineNav>
                </TimelineBody>
            </TimelineItem>
        </TimelineGroup>
    );
};

export default MainContent;
