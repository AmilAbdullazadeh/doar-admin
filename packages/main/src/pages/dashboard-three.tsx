import React from "react";
import { Row } from "@doar/components";
import { CryptoFontCSS } from "@doar/shared/css";
import Layout from "../layouts";
import Content from "../layouts/content";
import WelcomeArea from "../containers/dashboard-three/welcome-area";
import RowOne from "../containers/dashboard-three/row-one";
import RowTwo from "../containers/dashboard-three/row-two";
import RowThree from "../containers/dashboard-three/row-three";
import RowFour from "../containers/dashboard-three/row-four";
import RowFive from "../containers/dashboard-three/row-five";
import SEO from "../components/seo";

const DashboardThree: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <CryptoFontCSS />
            <Content>
                <WelcomeArea />
                <Row gutters={10}>
                    <RowOne />
                    <RowTwo />
                    <RowThree />
                    <RowFour />
                    <RowFive />
                </Row>
            </Content>
        </Layout>
    );
};

export default DashboardThree;
