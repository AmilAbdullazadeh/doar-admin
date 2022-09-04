import { FC } from "react";
import Layout from "../../layouts";
import Wrapper from "../../containers/apps/contacts/wrapper";
import Sidebar from "../../containers/apps/contacts/sidebar";
import Main from "../../containers/apps/contacts/main";
import SEO from "../../components/seo";

const Contacts: FC = () => {
    return (
        <Layout hasSidebar hideFooter sidebarLayout={2}>
            <SEO />
            <Wrapper>
                <Sidebar />
                <Main />
            </Wrapper>
        </Layout>
    );
};

export default Contacts;
