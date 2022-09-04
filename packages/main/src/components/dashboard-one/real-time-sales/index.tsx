/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useRef, useState } from "react";
import {
    Card,
    CardBody,
    Row,
    Col,
    HorizontalBarChart,
    SectionTitle,
} from "@doar/components";
import { RealTimeSalesData } from "@doar/shared/data/dashboard-one";
import { useAppSelector } from "../../../redux/hooks";
import {
    StyledBodyTitle,
    StyledBullet,
    StyledHeader,
    StyledList,
    StyledListItem,
    StyledListText,
    StyledBodyStatus,
    StyledBodyText,
    StyledChart,
} from "./style";

const RealTimeSales: FC = () => {
    const { theme } = useAppSelector((state) => state.ui);
    const inputEl: any = useRef(null);
    const [legendRendered, setLegendRendered] = useState(false);
    const [, forceUpdate] = useState();
    const { datasets } = RealTimeSalesData.data;
    const chartOptions = RealTimeSalesData.options;
    const darkChartOptions = {
        ...chartOptions,
        scales: {
            ...chartOptions.scales,
            xAxes: [
                {
                    ...chartOptions.scales.xAxes[0],
                    gridLines: {
                        ...chartOptions.scales.xAxes[0].gridLines,
                        color: "rgba(255, 255, 255, 0.06)",
                    },
                },
            ],
        },
    };

    const handleLegendClick = (datasetIndex: number) => {
        const chart = inputEl.current.chartInstance;
        chart.getDatasetMeta(datasetIndex).hidden =
            chart.getDatasetMeta(datasetIndex).hidden === null
                ? true
                : !chart.getDatasetMeta(datasetIndex).hidden;
        chart.update(); // re-draw chart to hide dataset
        forceUpdate({} as any); // re-draw component to update legend styles
    };

    const plugins = [
        {
            afterDatasetsDraw() {
                // hack to force re-render component in order to show legend
                if (!legendRendered) {
                    setLegendRendered(true);
                }
            },
        },
    ];

    return (
        <Card height="100%">
            <StyledHeader>
                <SectionTitle title="Real-Time Sales" />
                {legendRendered && (
                    <StyledList>
                        {inputEl.current.chartInstance.legend.legendItems.map(
                            (tick: any) => {
                                const chart = inputEl.current.chartInstance;
                                const bgColor: string =
                                    typeof tick.fillStyle === "string"
                                        ? tick.fillStyle // lines
                                        : "linear-gradient(to bottom, #13B080, rgba(23,172,126,0.4))"; // canvas gradient
                                const isHidden = chart.getDatasetMeta(
                                    tick.datasetIndex
                                ).hidden;
                                return (
                                    <StyledListItem
                                        type="button"
                                        key={tick.datasetIndex}
                                        onClick={() =>
                                            handleLegendClick(tick.datasetIndex)
                                        }
                                        className={isHidden ? "hidden" : ""}
                                    >
                                        <StyledBullet bg={bgColor} />
                                        <div style={{ background: bgColor }} />
                                        <StyledListText>
                                            {datasets[tick.datasetIndex].lebel}
                                        </StyledListText>
                                    </StyledListItem>
                                );
                            }
                        )}
                    </StyledList>
                )}
            </StyledHeader>
            <CardBody pb={["0px", "0px"]}>
                <Row mb="36px">
                    <Col col>
                        <StyledBodyTitle>
                            $150,200{" "}
                            <StyledBodyStatus color="success">
                                <i className="fa fa-arrow-up" /> 0.20%
                            </StyledBodyStatus>
                        </StyledBodyTitle>
                        <StyledBodyText>Total Sales</StyledBodyText>
                    </Col>
                    <Col col>
                        <StyledBodyTitle>
                            $21,880{" "}
                            <StyledBodyStatus color="danger">
                                <i className="fa fa-arrow-down" /> 1.04%
                            </StyledBodyStatus>
                        </StyledBodyTitle>
                        <StyledBodyText>Avg. Sales Per Day</StyledBodyText>
                    </Col>
                </Row>
                <StyledChart>
                    <HorizontalBarChart
                        data={RealTimeSalesData.data}
                        options={
                            theme !== "dark" ? chartOptions : darkChartOptions
                        }
                        width={341}
                        height={225}
                        ref={inputEl}
                        plugins={plugins}
                    />
                </StyledChart>
            </CardBody>
        </Card>
    );
};

export default RealTimeSales;
