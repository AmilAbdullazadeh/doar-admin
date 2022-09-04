import { FC } from "react";
import { Col } from "@doar/components";
import Rating from "../../../components/dashboard-four/rating";

const RightRowThree: FC = () => {
    return (
        <>
            <Col col={12} md={6} lg={12} mt="10px">
                <Rating />
            </Col>
        </>
    );
};

export default RightRowThree;
