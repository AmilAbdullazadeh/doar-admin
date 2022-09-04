import React from "react";
import { Row, Col } from "@doar/components";
import Layout from "../layouts";
import Content from "../layouts/content";
import WelcomeArea from "../containers/dashboard-four/welcome-area";
import LeftRowOne from "../containers/dashboard-four/left-row-one";
import LeftRowTwo from "../containers/dashboard-four/left-row-two";
import LeftRowThree from "../containers/dashboard-four/left-row-three";
import RightRowOne from "../containers/dashboard-four/right-row-one";
import RightRowTwo from "../containers/dashboard-four/right-row-two";
import RightRowhree from "../containers/dashboard-four/right-row-three";
import RightRowFour from "../containers/dashboard-four/right-row-four";
import SEO from "../components/seo";

const DashboardFour: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content>
                <WelcomeArea />
                <Row gutters={10}>
                    <Col lg={8}>
                        <Row gutters={10}>
                            <LeftRowOne />
                            <LeftRowTwo />
                            <LeftRowThree />
                        </Row>
                    </Col>
                    <Col lg={4} mt={["10px", null, null, 0]}>
                        <Row gutters={10}>
                            <RightRowOne />
                            <RightRowTwo />
                            <RightRowhree />
                            <RightRowFour />
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default DashboardFour;
