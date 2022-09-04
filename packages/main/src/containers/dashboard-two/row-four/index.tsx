import { FC } from "react";
import { Col } from "@doar/components";
import TotalVisits from "../../../components/dashboard-two/total-visits";
import Browsers from "../../../components/dashboard-two/browsers";

const RowFour: FC = () => {
    return (
        <>
            <Col lg={6} mt="10px">
                <TotalVisits />
            </Col>
            <Col lg={6} mt="10px">
                <Browsers />
            </Col>
        </>
    );
};

export default RowFour;
