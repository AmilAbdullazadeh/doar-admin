import { FC } from "react";
import { ArrowRight, GitHub, Facebook, Truck, Instagram } from "react-feather";
import {
    Card,
    CardBody,
    Heading,
    Text,
    Media,
    MediaBody,
    Row,
    Col,
    Anchor,
    Nav,
    NavLink,
} from "@doar/components";
import Header from "../header";
import { StyledIcon } from "./style";

const Interests: FC = () => {
    return (
        <Card mb={["20px", null, null, "25px"]}>
            <Header>
                <Heading tt="uppercase" fontWeight="600" mb="0px">
                    Interests
                </Heading>
                <Nav customStyle="with-icon">
                    <NavLink path="#!" iconPosition="right" iconDistance="5px">
                        Browse Interests
                        <ArrowRight />
                    </NavLink>
                </Nav>
            </Header>
            <CardBody p={["20px", "20px", null, "25px"]}>
                <Row>
                    <Col col={12} sm={6} lg={12} xl={6}>
                        <Media>
                            <StyledIcon bg="white">
                                <GitHub width={20} height={20} />
                            </StyledIcon>
                            <MediaBody ml="25px">
                                <Heading color="text1" mb="5px">
                                    Github, Inc.
                                </Heading>
                                <Text fontSize="12px" mb="10px">
                                    Web-based hosting service for version
                                    control using Git...{" "}
                                    <Anchor path="#!">Learn More</Anchor>
                                </Text>
                                <Text fontSize="12px" color="text3">
                                    6,182,220 Followers
                                </Text>
                            </MediaBody>
                        </Media>
                    </Col>
                    <Col
                        col={12}
                        sm={6}
                        lg={12}
                        xl={6}
                        mt={["25px", 0, null, "25px", 0]}
                    >
                        <Media>
                            <StyledIcon bg="primary">
                                <Facebook width={20} height={20} />
                            </StyledIcon>
                            <MediaBody ml="25px">
                                <Heading color="text1" mb="5px">
                                    Facebook, Inc.
                                </Heading>
                                <Text fontSize="12px" mb="10px">
                                    Online social media and social networking
                                    service company...{" "}
                                    <Anchor path="#!">Learn More</Anchor>
                                </Text>
                                <Text fontSize="12px" color="text3">
                                    12,182,220 Followers
                                </Text>
                            </MediaBody>
                        </Media>
                    </Col>
                    <Col col={12} sm={6} lg={12} xl={6} mt="25px">
                        <Media>
                            <StyledIcon bg="warning">
                                <Truck width={20} height={20} />
                            </StyledIcon>
                            <MediaBody ml="25px">
                                <Heading color="text1" mb="5px">
                                    DHL Express
                                </Heading>
                                <Text fontSize="12px" mb="10px">
                                    Logistics company providing international
                                    courier service...{" "}
                                    <Anchor path="#!">Learn More</Anchor>
                                </Text>
                                <Text fontSize="12px" color="text3">
                                    3,005,192 Followers
                                </Text>
                            </MediaBody>
                        </Media>
                    </Col>
                    <Col col={12} sm={6} lg={12} xl={6} mt="25px">
                        <Media>
                            <StyledIcon bg="pink">
                                <Instagram width={20} height={20} />
                            </StyledIcon>
                            <MediaBody ml="25px">
                                <Heading color="text1" mb="5px">
                                    Instagram
                                </Heading>
                                <Text fontSize="12px" mb="10px">
                                    Photo and video-sharing social networking
                                    service by Facebook...{" "}
                                    <Anchor path="#!">Learn More</Anchor>
                                </Text>
                                <Text fontSize="12px" color="text3">
                                    3,005,192 Followers
                                </Text>
                            </MediaBody>
                        </Media>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default Interests;
