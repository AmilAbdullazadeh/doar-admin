import { FC } from "react";
import { MoreHorizontal } from "react-feather";
import { volumeChart } from "@doar/shared/data/dashboard-three";
import {
    Card,
    CardBody,
    SectionTitle,
    Text,
    ApexDonutChart,
} from "@doar/components";
import Item from "./item";
import { useAppSelector } from "../../../redux/hooks";
import { StyledHeader, StyledChart, StyledBottom } from "./style";

const BTCVolume: FC = () => {
    const { theme } = useAppSelector((state) => state.ui);
    const chartOptions = volumeChart.options;
    const darkChartOptions = {
        ...chartOptions,
        stroke: {
            colors: ["#1c273c"],
        },
    };
    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="BTC Volume By Currency" />
                <Text as="span" color="text3">
                    <MoreHorizontal width={20} height={20} />
                </Text>
            </StyledHeader>
            <CardBody py={["25px", "25px"]}>
                <StyledChart>
                    <ApexDonutChart
                        options={
                            theme !== "dark" ? chartOptions : darkChartOptions
                        }
                        series={volumeChart.series}
                        width="100%"
                        height="100%"
                    />
                </StyledChart>
                <StyledBottom>
                    <Item
                        color="primary"
                        title="USD"
                        coin="4,024.52"
                        rate="0.96%"
                        status="up"
                    />
                    <Item
                        color="teal"
                        title="EUR"
                        coin="3,539.23"
                        rate="0.75%"
                        status="up"
                    />
                    <Item
                        color="warning"
                        title="CNY"
                        coin="27,499.4"
                        rate="-0.58%"
                        status="down"
                    />
                    <Item
                        color="pink"
                        title="GBP"
                        coin="3,022.90"
                        rate="-0.69%"
                        status="down"
                    />
                    <Item
                        color="success"
                        title="JPY"
                        coin="444,814.7"
                        rate="0.82%"
                        status="up"
                    />
                    <Item
                        color="lightblue"
                        title="KRW"
                        coin="4,491,099.6"
                        rate="-1.11%"
                        status="down"
                    />
                    <Item
                        color="gray300"
                        title="SGD"
                        coin="5,393.0"
                        rate="0.66%"
                        status="up"
                    />
                </StyledBottom>
            </CardBody>
        </Card>
    );
};

export default BTCVolume;
