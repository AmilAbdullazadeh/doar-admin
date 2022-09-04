import React from "react";
import Header from "./header";
import Footer from "./footer";

interface IProps {
    hasSidebar?: boolean;
    hideFooter?: boolean;
    sidebarLayout?: 1 | 2;
}

const Layout: React.FC<IProps> = ({
    children,
    hasSidebar,
    hideFooter,
    sidebarLayout,
}) => {
    return (
        <>
            <Header hasSidebar={hasSidebar} sidebarLayout={sidebarLayout} />
            {children}
            {!hideFooter && <Footer />}
        </>
    );
};

Layout.defaultProps = {
    hideFooter: false,
};

export default Layout;
