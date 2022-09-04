import React from "react";
import { Row } from "@doar/components";
import Layout from "../layouts";
import Content from "../layouts/content";
import PageHeader from "../components/page-header";
import MainContent from "../containers/events/main";
import Sidebar from "../containers/events/sidebar";
import SEO from "../components/seo";

const Events: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content borderBottomWidth="1px">
                <PageHeader
                    prev={[
                        { text: "Profile", link: "/profile-view" },
                        { text: "Discover", link: "/" },
                    ]}
                    title="Events"
                    wcText="Discover Events"
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

export default Events;
