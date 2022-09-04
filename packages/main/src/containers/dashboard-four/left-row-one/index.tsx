import { FC } from "react";
import { Col } from "@doar/components";
import TicketStatus from "../../../components/dashboard-four/ticket-status";

const LeftRowOne: FC = () => {
    return (
        <Col col={12}>
            <TicketStatus />
        </Col>
    );
};

export default LeftRowOne;
