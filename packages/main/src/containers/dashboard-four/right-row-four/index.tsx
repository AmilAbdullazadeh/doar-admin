import { FC } from "react";
import { Col } from "@doar/components";
import Transactions from "../../../components/dashboard-four/transaction";

const RightRowFour: FC = () => {
    return (
        <>
            <Col col={12} md={6} lg={12} mt="10px">
                <Transactions />
            </Col>
        </>
    );
};

export default RightRowFour;
