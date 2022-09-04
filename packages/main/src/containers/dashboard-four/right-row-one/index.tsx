import { FC } from "react";
import { Col } from "@doar/components";
import { RadialData } from "@doar/shared/data/dashboard-four";
import RadialPercentage from "../../../components/dashboard-four/radial-percentage";

const RightRowOne: FC = () => {
    let restProps = {};
    return (
        <>
            {RadialData.map((data, i) => {
                if (i !== 0) {
                    restProps = {
                        ...restProps,
                        mt: ["10px", null, 0, "10px"],
                    };
                }
                return (
                    <Col key={data.id} col={12} md={6} lg={12} {...restProps}>
                        <RadialPercentage
                            title={data.title}
                            desc={data.desc}
                            min={data.min}
                            sec={data.sec}
                            chart={data.chart}
                        />
                    </Col>
                );
            })}
        </>
    );
};

export default RightRowOne;
