import React from "react";
import Layout from "../../layouts";
import Wrapper from "../../containers/apps/file-manager/wrapper";
import Sidebar from "../../containers/apps/file-manager/sidebar";
import MainContent from "../../containers/apps/file-manager/main";
import SEO from "../../components/seo";

const FileManager: React.FC = () => {
    return (
        <Layout hasSidebar hideFooter>
            <SEO />
            <Wrapper>
                <Sidebar />
                <MainContent />
            </Wrapper>
        </Layout>
    );
};

export default FileManager;
