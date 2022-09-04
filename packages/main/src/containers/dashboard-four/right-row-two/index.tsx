import { FC } from "react";
import { Col } from "@doar/components";
import Complaints from "../../../components/dashboard-four/complaints";

const RightRowTwo: FC = () => {
    return (
        <>
            <Col col={12} md={6} lg={12} mt="10px">
                <Complaints />
            </Col>
        </>
    );
};

export default RightRowTwo;
