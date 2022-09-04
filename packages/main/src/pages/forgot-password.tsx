import React from "react";
import Layout from "../layouts";
import Content from "../layouts/content";
import PasswordContainer from "../containers/forgot-password";
import SEO from "../components/seo";

const ForgotPassword: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content fullHeight align="center">
                <PasswordContainer />
            </Content>
        </Layout>
    );
};

export default ForgotPassword;
