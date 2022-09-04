import React from "react";
import Layout from "../layouts";
import Content from "../layouts/content";
import AuthContainer from "../containers/signup";
import SEO from "../components/seo";

const SignUp: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content fullHeight>
                <AuthContainer />
            </Content>
        </Layout>
    );
};

export default SignUp;
