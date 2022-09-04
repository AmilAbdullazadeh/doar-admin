import { FC } from "react";
import { Col } from "@doar/components";
import {
    conversionChart1,
    conversionChart2,
    conversionChart3,
} from "@doar/shared/data/dashboard-two";
import Conversion from "../../../components/dashboard-two/conversion";

const RowThree: FC = () => {
    return (
        <>
            <Col md={6} lg={4} mt="10px">
                <Conversion
                    number="3,605"
                    title="Click Through"
                    text="No. of clicks to ad that consist of a single impression."
                    color="primary"
                    chart={conversionChart1}
                />
            </Col>
            <Col md={6} lg={4} mt="10px">
                <Conversion
                    number="3,266"
                    title="View Through"
                    text="Estimated daily unique views per visitor on the ads."
                    color="teal"
                    chart={conversionChart2}
                />
            </Col>
            <Col md={6} lg={4} mt="10px">
                <Conversion
                    number="8,765"
                    title="Total Conversions"
                    text="Estimated total conversions on ads per impressions to ads."
                    color="pink"
                    chart={conversionChart3}
                />
            </Col>
        </>
    );
};

export default RowThree;
