import { FC } from "react";
import { Col } from "@doar/components";
import Acquisition from "../../../components/dashboard-two/acquisition";
import DeviceSessions from "../../../components/dashboard-two/device-sessions";
import TrafficSource from "../../../components/dashboard-two/traffic-source";

const RowTwo: FC = () => {
    return (
        <>
            <Col md={6} lg={5} mt="10px">
                <Acquisition />
            </Col>
            <Col sm={7} md={8} lg={4} mt="10px">
                <DeviceSessions />
            </Col>
            <Col sm={5} md={4} lg={3} mt="10px">
                <TrafficSource />
            </Col>
        </>
    );
};

export default RowTwo;
