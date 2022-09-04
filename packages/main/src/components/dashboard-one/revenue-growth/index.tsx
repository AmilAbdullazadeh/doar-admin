import { FC, MouseEvent } from "react";
import {
    Card,
    CardBody,
    Row,
    Col,
    ApexCharts,
    ApexAreaChart,
    SectionTitle,
} from "@doar/components";
import { RevenueChart } from "@doar/shared/data/dashboard-one";
import { useAppSelector } from "../../../redux/hooks";
import {
    StyledHeader,
    StyledList,
    StyledListItem,
    StyledBullet,
    StyledListText,
    StyledCardBodyWrap,
    StyledCardBodyTitle,
    StyledCardBodySubtitle,
    StyledCardBodyText,
    StyledChart,
} from "./style";

const RevenueGrowth: FC = () => {
    const { series, options } = RevenueChart;
    const { theme } = useAppSelector((state) => state.ui);
    const chartOptions = options;
    const darkChartOptions = {
        ...options,
        grid: { ...options.grid, borderColor: "rgba(255,255,255,.05)" },
        colors: [options.colors[0], options.colors[1], "#b4bdce"],
    };
    const chartToggle = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        target.classList.toggle("hidden");
        ApexCharts.exec(options.chart.id, "toggleSeries", target.value);
    };

    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="Account &amp; Monthly Recurring Revenue Growth" />
                <StyledList>
                    {series.map((sr, i) => (
                        <StyledListItem
                            key={sr.name}
                            value={sr.name}
                            onClick={chartToggle}
                        >
                            <StyledBullet bg={options.colors[i]} />
                            <StyledListText>{sr.name}</StyledListText>
                        </StyledListItem>
                    ))}
                </StyledList>
            </StyledHeader>
            <CardBody p={["0px", "0px"]} position="relative">
                <StyledCardBodyWrap>
                    <Row>
                        <Col sm={5}>
                            <StyledCardBodyTitle>$620,076</StyledCardBodyTitle>
                            <StyledCardBodySubtitle>
                                MRR Growth
                            </StyledCardBodySubtitle>
                            <StyledCardBodyText>
                                Measure How Fast You’re Growing Monthly
                                Recurring Revenue. <a href="/">Learn More</a>
                            </StyledCardBodyText>
                        </Col>
                        <Col sm={5} mt={["20px", "0px"]}>
                            <StyledCardBodyTitle>$1,200</StyledCardBodyTitle>
                            <StyledCardBodySubtitle>
                                AVG. MRR/CUSTOMER
                            </StyledCardBodySubtitle>
                            <StyledCardBodyText>
                                The revenue generated per account on a monthly
                                or yearly basis. <a href="/">Learn More</a>
                            </StyledCardBodyText>
                        </Col>
                    </Row>
                </StyledCardBodyWrap>
                <StyledChart>
                    <ApexAreaChart
                        options={
                            theme !== "dark" ? chartOptions : darkChartOptions
                        }
                        series={series}
                        width="100%"
                        height={280}
                    />
                </StyledChart>
            </CardBody>
        </Card>
    );
};

export default RevenueGrowth;
