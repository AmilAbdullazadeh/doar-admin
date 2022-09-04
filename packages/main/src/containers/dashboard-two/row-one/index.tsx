import { FC } from "react";
import { Col } from "@doar/components";
import WebsiteMetrics from "../../../components/dashboard-two/website-metrics";
import SessoionsChannel from "../../../components/dashboard-two/sessions-channel";

const RowOne: FC = () => {
    return (
        <>
            <Col lg={8} xl={9}>
                <WebsiteMetrics />
            </Col>
            <Col md={6} lg={4} xl={3} mt={["10px", null, null, 0]}>
                <SessoionsChannel />
            </Col>
        </>
    );
};

export default RowOne;
