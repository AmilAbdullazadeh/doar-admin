import { FC } from "react";
import { Row, Col } from "@doar/components";
import PricingTable from "../../components/pricing-table";

const PricingContainer: FC = () => {
    return (
        <Row justifyContent="center">
            <Col col={10} sm={6} md={4} lg={3}>
                <PricingTable
                    icon="fa-bicycle"
                    title="Personal"
                    desc="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."
                    price="$19.00"
                />
            </Col>
            <Col col={10} sm={6} md={4} lg={3} mt={["40px", 0]}>
                <PricingTable
                    icon="fa-car"
                    title="Team"
                    desc="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
                    price="$99.00"
                />
            </Col>
            <Col col={10} sm={6} md={4} lg={3} mt={["40px", null, 0]}>
                <PricingTable
                    icon="fa-ship"
                    title="Corporate"
                    desc="Nemo enim ipsam volu ptatem quia voluptas sit asp ernatur aut odit aut fugit, sed quia conse quuntur magni dolores eos qui ratione."
                    price="$199.00"
                />
            </Col>
        </Row>
    );
};

export default PricingContainer;
