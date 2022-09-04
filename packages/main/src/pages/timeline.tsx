import React from "react";
import { Media, MediaBody } from "@doar/components";
import Layout from "../layouts";
import Content from "../layouts/content";
import PageHeader from "../components/page-header";
import MainContent from "../containers/timeline/main";
import Sidebar from "../containers/timeline/sidebar";
import SEO from "../components/seo";

const Timeline: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content borderBottomWidth="1px">
                <PageHeader
                    prev={[{ text: "Profile", link: "/profile-view" }]}
                    title="Timeline"
                    wcText="My Timeline"
                />
            </Content>
            <Content mt={[null, null, null, "0px"]}>
                <Media display={["block", null, null, "flex"]}>
                    <MediaBody>
                        <MainContent />
                    </MediaBody>
                    <Sidebar />
                </Media>
            </Content>
        </Layout>
    );
};

export default Timeline;
