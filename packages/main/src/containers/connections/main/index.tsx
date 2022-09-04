import { FC } from "react";
import {
    Row,
    Col,
    Button,
    Tab,
    TabContent,
    TabPanel,
    TabList,
    Badge,
} from "@doar/components";
import cover1 from "@doar/shared/images/img26.jpg";
import avatar1 from "@doar/shared/images/img6.jpg";
import cover2 from "@doar/shared/images/img28.jpg";
import avatar2 from "@doar/shared/images/img7.jpg";
import cover3 from "@doar/shared/images/img27.jpg";
import cover4 from "@doar/shared/images/img29.jpg";
import cover5 from "@doar/shared/images/img30.jpg";
import cover6 from "@doar/shared/images/img31.jpg";
import cover7 from "@doar/shared/images/img32.jpg";
import cover8 from "@doar/shared/images/img33.jpg";
import cover9 from "@doar/shared/images/img34.jpg";
import avatar3 from "@doar/shared/images/img11.jpg";
import cover10 from "@doar/shared/images/img35.jpg";
import avatar4 from "@doar/shared/images/img12.jpg";
import ProfileCard from "../../../components/connections/profile";
import { StyledTabsWrap } from "./style";

const MainContent: FC = () => {
    return (
        <Col lg={9}>
            <StyledTabsWrap variation="line">
                <TabList>
                    <Tab>
                        Followers
                        <Badge ml="10px">340</Badge>
                    </Tab>
                    <Tab>
                        Following
                        <Badge ml="10px">1,563</Badge>
                    </Tab>
                    <Tab>
                        Request
                        <Badge ml="10px">19</Badge>
                    </Tab>
                </TabList>
                <TabContent>
                    <TabPanel>
                        <Row gutters={10} mb="25px">
                            <Col sm={4} md={3} lg={4} xl={3}>
                                <ProfileCard
                                    cover={cover1}
                                    avatar={avatar1}
                                    name="Zhen Juan Chiu"
                                    designation="Software Engineer"
                                    isFollowed={false}
                                    path="/profile-view"
                                />
                            </Col>
                            <Col sm={4} md={3} lg={4} xl={3} mt={["10px", 0]}>
                                <ProfileCard
                                    cover={cover2}
                                    avatar={avatar2}
                                    name="Barbara Marion"
                                    designation="Tech Executive"
                                    isFollowed={false}
                                    path="/profile-view"
                                />
                            </Col>
                            <Col sm={4} md={3} lg={4} xl={3} mt={["10px", 0]}>
                                <ProfileCard
                                    cover={cover3}
                                    color="teal"
                                    name="Christine Arnold"
                                    designation="Lead Creative Design"
                                    isFollowed
                                    path="/profile-view"
                                />
                            </Col>
                            <Col
                                sm={4}
                                md={3}
                                lg={4}
                                xl={3}
                                mt={["10px", null, 0, "10px", 0]}
                            >
                                <ProfileCard
                                    cover={cover4}
                                    color="pink"
                                    name="Natalie Corwin"
                                    designation="Product Designer"
                                    isFollowed={false}
                                    path="/profile-view"
                                />
                            </Col>
                            <Col sm={4} md={3} lg={4} xl={3} mt="10px">
                                <ProfileCard
                                    cover={cover5}
                                    color="gray300"
                                    name="Carolyn Park"
                                    designation="Lead Creative Design"
                                    isFollowed
                                    path="/profile-view"
                                />
                            </Col>
                            <Col sm={4} md={3} lg={4} xl={3} mt="10px">
                                <ProfileCard
                                    cover={cover6}
                                    color="gray900"
                                    name="Debbie Hite"
                                    designation="Lead Animator"
                                    isFollowed
                                    path="/profile-view"
                                />
                            </Col>
                            <Col sm={4} md={3} lg={4} xl={3} mt="10px">
                                <ProfileCard
                                    cover={cover7}
                                    color="success"
                                    name="Sandra Valles"
                                    designation="Software Architect"
                                    isFollowed={false}
                                    path="/profile-view"
                                />
                            </Col>
                            <Col sm={4} md={3} lg={4} xl={3} mt="10px">
                                <ProfileCard
                                    cover={cover8}
                                    color="indigo"
                                    name="Patrick Miramontes"
                                    designation="Software Engineer"
                                    isFollowed={false}
                                    path="/profile-view"
                                />
                            </Col>
                            <Col sm={4} md={3} lg={4} xl={3} mt="10px">
                                <ProfileCard
                                    cover={cover9}
                                    avatar={avatar3}
                                    name="Amalia Redfern"
                                    designation="Front-end Engineer"
                                    isFollowed
                                    path="/profile-view"
                                />
                            </Col>
                            <Col sm={4} md={3} lg={4} xl={3} mt="10px">
                                <ProfileCard
                                    cover={cover10}
                                    avatar={avatar4}
                                    name="Carole Rossignol"
                                    designation="Software Engineer"
                                    isFollowed
                                    path="/profile-view"
                                />
                            </Col>
                        </Row>
                        <Button size="sm" color="white" fullwidth>
                            Load more
                        </Button>
                    </TabPanel>
                    <TabPanel>
                        <Row gutters={10} mb="25px">
                            <Col sm={4} md={3} lg={4} xl={3}>
                                <ProfileCard
                                    cover={cover1}
                                    avatar={avatar1}
                                    name="Zhen Juan Chiu"
                                    designation="Software Engineer"
                                    isFollowed={false}
                                    path="/profile-view"
                                />
                            </Col>
                            <Col sm={4} md={3} lg={4} xl={3} mt={["10px", 0]}>
                                <ProfileCard
                                    cover={cover2}
                                    avatar={avatar2}
                                    name="Barbara Marion"
                                    designation="Tech Executive"
                                    isFollowed={false}
                                    path="/profile-view"
                                />
                            </Col>
                            <Col sm={4} md={3} lg={4} xl={3} mt={["10px", 0]}>
                                <ProfileCard
                                    cover={cover3}
                                    color="teal"
                                    name="Christine Arnold"
                                    designation="Lead Creative Design"
                                    isFollowed
                                    path="/profile-view"
                                />
                            </Col>
                            <Col
                                sm={4}
                                md={3}
                                lg={4}
                                xl={3}
                                mt={["10px", null, 0, "10px", 0]}
                            >
                                <ProfileCard
                                    cover={cover4}
                                    color="pink"
                                    name="Natalie Corwin"
                                    designation="Product Designer"
                                    isFollowed={false}
                                    path="/profile-view"
                                />
                            </Col>
                            <Col sm={4} md={3} lg={4} xl={3} mt="10px">
                                <ProfileCard
                                    cover={cover5}
                                    color="gray300"
                                    name="Carolyn Park"
                                    designation="Lead Creative Design"
                                    isFollowed
                                    path="/profile-view"
                                />
                            </Col>
                        </Row>
                        <Button size="sm" color="white" fullwidth>
                            Load more
                        </Button>
                    </TabPanel>
                    <TabPanel>
                        <Row gutters={10} mb="25px">
                            <Col sm={4} md={3} lg={4} xl={3}>
                                <ProfileCard
                                    cover={cover1}
                                    avatar={avatar1}
                                    name="Zhen Juan Chiu"
                                    designation="Software Engineer"
                                    isFollowed={false}
                                    path="/profile-view"
                                />
                            </Col>
                            <Col sm={4} md={3} lg={4} xl={3} mt={["10px", 0]}>
                                <ProfileCard
                                    cover={cover2}
                                    avatar={avatar2}
                                    name="Barbara Marion"
                                    designation="Tech Executive"
                                    isFollowed={false}
                                    path="/profile-view"
                                />
                            </Col>
                            <Col sm={4} md={3} lg={4} xl={3} mt={["10px", 0]}>
                                <ProfileCard
                                    cover={cover3}
                                    color="teal"
                                    name="Christine Arnold"
                                    designation="Lead Creative Design"
                                    isFollowed
                                    path="/profile-view"
                                />
                            </Col>
                            <Col
                                sm={4}
                                md={3}
                                lg={4}
                                xl={3}
                                mt={["10px", null, 0, "10px", 0]}
                            >
                                <ProfileCard
                                    cover={cover4}
                                    color="pink"
                                    name="Natalie Corwin"
                                    designation="Product Designer"
                                    isFollowed={false}
                                    path="/profile-view"
                                />
                            </Col>
                        </Row>
                        <Button size="sm" color="white" fullwidth>
                            Load more
                        </Button>
                    </TabPanel>
                </TabContent>
            </StyledTabsWrap>
        </Col>
    );
};

export default MainContent;
