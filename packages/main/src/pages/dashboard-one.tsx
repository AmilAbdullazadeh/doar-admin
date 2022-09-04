import React from "react";
import { Row } from "@doar/components";
import Layout from "../layouts";
import Content from "../layouts/content";
import WelcomeArea from "../containers/dashboard-one/welcome-area";
import RowOne from "../containers/dashboard-one/row-one";
import RowTwo from "../containers/dashboard-one/row-two";
import RowThree from "../containers/dashboard-one/row-three";
import RowFour from "../containers/dashboard-one/row-four";
import SEO from "../components/seo";

const DashboardOne: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content>
                <WelcomeArea />
                <Row gutters={10}>
                    <RowOne />
                    <RowTwo />
                    <RowThree />
                    <RowFour />
                </Row>
            </Content>
        </Layout>
    );
};

export default DashboardOne;
