import { FC } from "react";
import { Row, Col, Heading, Nav, NavLink } from "@doar/components";
import Breadcrumb from "../../../components/breadcrumb";
import InstallBox from "../../../components/help-center/install-box";
import { StyleLabel } from "./style";

const RowOne: FC = () => {
    return (
        <Row>
            <Col lg={3} xl={2} mb={["20px", null, null, 0]}>
                <StyleLabel>Getting Started</StyleLabel>
                <Nav customStyle="classic">
                    <NavLink path="#!">Download</NavLink>
                    <NavLink path="#!" active>
                        Installation
                    </NavLink>
                    <NavLink path="#!">Accessibility</NavLink>
                    <NavLink path="#!">Supported Devices</NavLink>
                </Nav>
            </Col>
            <Col lg={9} xl={10}>
                <Breadcrumb
                    prev={[
                        { text: "help center", link: "/help-center" },
                        { text: "Getting Started", link: "/" },
                    ]}
                    title="Installation"
                />
                <Heading as="h3" mb="25px">
                    Installation
                </Heading>
                <Row>
                    <Col sm={6}>
                        <InstallBox
                            title="NPM Installation"
                            items={[
                                {
                                    text: "Common errors when intalling NPM",
                                    path: "#!",
                                },
                                {
                                    text: "NPM for Windows",
                                    path: "#!",
                                },
                                {
                                    text: "Cannot install npm in mac",
                                    path: "#!",
                                },
                                {
                                    text: "NPM does not recognize in local",
                                    path: "#!",
                                },
                                {
                                    text:
                                        "NPM version not showing when doing command",
                                    path: "#!",
                                },
                            ]}
                        />
                    </Col>
                    <Col sm={6} mt={["20px", 0]}>
                        <InstallBox
                            title="Bootstrap Installation"
                            items={[
                                {
                                    text:
                                        "Common errors when intalling Bootstrap",
                                    path: "#!",
                                },
                                {
                                    text: "Migrating from Bootstrap 3",
                                    path: "#!",
                                },
                                {
                                    text: "Bootstrap using Webpack",
                                    path: "#!",
                                },
                                {
                                    text: "Bootstrap react components",
                                    path: "#!",
                                },
                                {
                                    text:
                                        "Example of bootsrap page using navbar",
                                    path: "#!",
                                },
                            ]}
                        />
                    </Col>
                    <Col sm={6} mt={["20px", "30px"]}>
                        <InstallBox
                            title="SASS Customization"
                            items={[
                                {
                                    text:
                                        "Minimize sass to css without bootstrap",
                                    path: "#!",
                                },
                                {
                                    text:
                                        "Adding more utilities classes in sass",
                                    path: "#!",
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default RowOne;
