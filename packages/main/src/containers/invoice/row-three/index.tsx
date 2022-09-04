import { FC } from "react";
import { Row, Col } from "@doar/components";
import Notes from "../../../components/invoice/notes";
import Calculation from "../../../components/invoice/calculation";

const RowTwo: FC = () => {
    return (
        <Row justifyContent="between">
            <Col sm={6} lg={6} mt={["40px", 0]} order={2} smOrder={0}>
                <Notes
                    label="Notes"
                    text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                />
            </Col>
            <Col sm={6} lg={4} order={1} smOrder={0}>
                <Calculation
                    list={[
                        { key: "Sub-Total", value: "$5,750.00" },
                        { key: "Tax (5%)", value: "$287.50" },
                        { key: "Discount", value: "-$50.00" },
                        { key: "Total Due", value: "$5,987.50" },
                    ]}
                />
            </Col>
        </Row>
    );
};

export default RowTwo;
