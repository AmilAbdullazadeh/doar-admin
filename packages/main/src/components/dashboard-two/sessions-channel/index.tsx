import { FC } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Row,
    Col,
    ApexDonutChart,
    SectionTitle,
} from "@doar/components";
import { sessionsChart } from "@doar/shared/data/dashboard-two";
import { useAppSelector } from "../../../redux/hooks";
import {
    StyledChart,
    StyledFooterText,
    StyledFooterDiv,
    StyledFooterBullet,
    StyledFooterTitle,
} from "./style";

const SessoionsChannel: FC = () => {
    const { theme } = useAppSelector((state) => state.ui);
    const chartOptions = sessionsChart.options;
    const darkChartOptions = {
        ...chartOptions,
        stroke: {
            colors: ["#1c273c"],
        },
    };
    return (
        <Card>
            <CardHeader>
                <SectionTitle title="Sessions By Channel" />
            </CardHeader>
            <CardBody p={[null, null, null, "25px"]}>
                <StyledChart>
                    <ApexDonutChart
                        options={
                            theme !== "dark" ? chartOptions : darkChartOptions
                        }
                        series={sessionsChart.series}
                        width="100%"
                        height="100%"
                    />
                </StyledChart>
            </CardBody>
            <CardFooter p="20px">
                <Row>
                    <Col col={6}>
                        <StyledFooterText>Organic Search</StyledFooterText>
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="pink" />
                            <StyledFooterTitle>
                                1,320 <small>25%</small>
                            </StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                    <Col col={6}>
                        <StyledFooterText>Email</StyledFooterText>
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="primary" />
                            <StyledFooterTitle>
                                987 <small>20%</small>
                            </StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                    <Col col={6} mt="20px">
                        <StyledFooterText>Referrral</StyledFooterText>
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="teal" />
                            <StyledFooterTitle>
                                2,010 <small>30%</small>
                            </StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                    <Col col={6} mt="20px">
                        <StyledFooterText>Social Media</StyledFooterText>
                        <StyledFooterDiv>
                            <StyledFooterBullet bg="orange" />
                            <StyledFooterTitle>
                                1,054 <small>25%</small>
                            </StyledFooterTitle>
                        </StyledFooterDiv>
                    </Col>
                </Row>
            </CardFooter>
        </Card>
    );
};

export default SessoionsChannel;
