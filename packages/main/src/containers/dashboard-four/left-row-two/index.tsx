import { FC } from "react";
import { Col } from "@doar/components";
import TicketRequest from "../../../components/dashboard-four/ticket-request";
import CustomerSatisfaction from "../../../components/dashboard-four/customer-satisfaction";

const LeftRowTwo: FC = () => {
    return (
        <>
            <Col md={7} mt="10px">
                <TicketRequest />
            </Col>
            <Col md={5} mt="10px">
                <CustomerSatisfaction />
            </Col>
        </>
    );
};

export default LeftRowTwo;
