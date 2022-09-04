import React from "react";
import { Row } from "@doar/components";
import Layout from "../layouts";
import Content from "../layouts/content";
import PageHeader from "../components/page-header";
import MainContent from "../containers/connections/main";
import Sidebar from "../containers/connections/sidebar";
import SEO from "../components/seo";

const Connections: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content borderBottomWidth="1px">
                <PageHeader
                    prev={[{ text: "Your Profile", link: "/profile-view" }]}
                    title="Connections"
                    wcText="Connections"
                />
            </Content>
            <Content mt={[null, null, null, "0px"]}>
                <Row>
                    <MainContent />
                    <Sidebar />
                </Row>
            </Content>
        </Layout>
    );
};

export default Connections;
