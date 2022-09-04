import { FC } from "react";
import {
    Card,
    ButtonGroup,
    Row,
    Col,
    ApexBarChart,
    SectionTitle,
} from "@doar/components";
import { webMetricsChart } from "@doar/shared/data/dashboard-two";
import { useAppSelector } from "../../../redux/hooks";
import { StyledHeader, StyledBody, StyledButton, StyledChart } from "./style";
import MetricsProgress from "./metrics-progress";

const WebsiteMetrics: FC = () => {
    const { theme } = useAppSelector((state) => state.ui);
    const chartOptions = webMetricsChart.options;
    const darkChartOptions = {
        ...chartOptions,
        grid: {
            ...chartOptions.grid,
            borderColor: "rgba(255, 255, 255, 0.06)",
        },
    };
    return (
        <Card>
            <StyledHeader>
                <div>
                    <SectionTitle
                        title="Website Audience Metrics"
                        desc="Audience to which the users belonged while on the
                        current date range."
                        descProps={{ fontSize: "12px" }}
                    />
                </div>
                <ButtonGroup mt={["20px", "0px"]}>
                    <StyledButton size="xs" color="white">
                        Day
                    </StyledButton>
                    <StyledButton size="xs" color="white">
                        Week
                    </StyledButton>
                    <StyledButton size="xs" color="white" active>
                        Month
                    </StyledButton>
                </ButtonGroup>
            </StyledHeader>
            <StyledBody>
                <Row smAlignItems="end">
                    <Col lg={7} xl={8}>
                        <StyledChart>
                            <ApexBarChart
                                options={
                                    theme !== "dark"
                                        ? chartOptions
                                        : darkChartOptions
                                }
                                series={webMetricsChart.series}
                                width="100%"
                                height="100%"
                            />
                        </StyledChart>
                    </Col>
                    <Col lg={5} xl={4}>
                        <Row>
                            <Col
                                sm={6}
                                lg={12}
                                mt={["30px", null, null, "0px"]}
                            >
                                <MetricsProgress
                                    title="New Users"
                                    goalText="65% goal reached"
                                    number="13,596"
                                    goal="20,000"
                                    progress={{ bg: "teal", now: 65 }}
                                />
                            </Col>
                            <Col sm={6} lg={12} mt="30px">
                                <MetricsProgress
                                    title="Page Views"
                                    goalText="45% goal reached"
                                    number="83,123"
                                    goal="250,000"
                                    progress={{ bg: "orange", now: 45 }}
                                />
                            </Col>
                            <Col sm={6} lg={12} mt="30px">
                                <MetricsProgress
                                    title="Page Sessions"
                                    goalText="20% goal reached"
                                    number="16,869"
                                    goal="85,000"
                                    progress={{ bg: "pink", now: 20 }}
                                />
                            </Col>
                            <Col sm={6} lg={12} mt="30px">
                                <MetricsProgress
                                    title="Bounce Rate"
                                    goalText="85% goal reached"
                                    number="28.50%"
                                    goal="30.50%"
                                    progress={{ bg: "primary", now: 85 }}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </StyledBody>
        </Card>
    );
};

export default WebsiteMetrics;
