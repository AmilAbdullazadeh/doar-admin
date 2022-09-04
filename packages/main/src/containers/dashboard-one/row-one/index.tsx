import { FC } from "react";
import { Col } from "@doar/components";
import { conversions } from "@doar/shared/data/dashboard-one";
import Conversion from "../../../components/dashboard-one/conversion";

const RowOne: FC = () => {
    return (
        <>
            {conversions.map((data) => (
                <Col
                    sm={6}
                    lg={6}
                    mt={["10px", null, null, "0px"]}
                    key={data.id}
                >
                    <Conversion
                        title={data.title}
                        rate={data.rate}
                        change={data.change}
                        chart={data.chart}
                    />
                </Col>
            ))}
        </>
    );
};

export default RowOne;
