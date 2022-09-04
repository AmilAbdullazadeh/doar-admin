import React from "react";
import Layout from "../layouts";
import Content from "../layouts/content";
import ErrorContainer from "../containers/error-505";
import SEO from "../components/seo";

const Error503: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content fullHeight align="center">
                <ErrorContainer />
            </Content>
        </Layout>
    );
};

export default Error503;
