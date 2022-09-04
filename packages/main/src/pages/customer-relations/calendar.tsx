import React from "react";
import Layout from "../../layouts";
import Wrapper from "../../containers/apps/calendar/wrapper";
import Sidebar from "../../containers/apps/calendar/sidebar";
import Main from "../../containers/apps/calendar/main";
import SEO from "../../components/seo";

const Calendar: React.FC = () => {
    return (
        <Layout hasSidebar hideFooter>
            <SEO />
            <Wrapper>
                <Sidebar />
                <Main />
            </Wrapper>
        </Layout>
    );
};

export default Calendar;
