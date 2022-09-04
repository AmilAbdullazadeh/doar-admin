import React from "react";
import Layout from "../layouts";
import Content from "../layouts/content";
import PageHeader from "../containers/invoice/page-header";
import RowOne from "../containers/invoice/row-one";
import RowTwo from "../containers/invoice/row-two";
import RowThree from "../containers/invoice/row-three";
import SEO from "../components/seo";

const HelpCenter: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content borderBottomWidth="1px">
                <PageHeader />
            </Content>
            <Content mt={[null, null, null, "0px"]}>
                <RowOne />
                <RowTwo />
                <RowThree />
            </Content>
        </Layout>
    );
};

export default HelpCenter;
