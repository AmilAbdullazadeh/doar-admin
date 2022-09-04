import { FC } from "react";
import { Col } from "@doar/components";
import Transaction from "../../../components/dashboard-one/transaction";
import Customers from "../../../components/dashboard-one/customers";
import RealTimeSales from "../../../components/dashboard-one/real-time-sales";

const RowFour: FC = () => {
    return (
        <>
            <Col md={6} xl={4} mt="10px">
                <Transaction />
            </Col>
            <Col md={6} xl={4} mt="10px">
                <Customers />
            </Col>
            <Col md={6} xl={4} mt="10px">
                <RealTimeSales />
            </Col>
        </>
    );
};

export default RowFour;
