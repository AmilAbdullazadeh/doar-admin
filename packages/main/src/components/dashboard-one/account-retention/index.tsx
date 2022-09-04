import { FC } from "react";
import { Card, Row, Col, ApexBarChart, SectionTitle } from "@doar/components";
import { RetentionChart } from "@doar/shared/data/dashboard-one";
import { useAppSelector } from "../../../redux/hooks";
import {
    StyledCardHeader,
    StyledCardBody,
    StyledCardBodyTitle,
    StyledCardBodySubtitle,
    StyledCardBodyText,
    StyledChart,
} from "./style";

const AccountRetention: FC = () => {
    const { theme } = useAppSelector((state) => state.ui);
    const chartOptions = RetentionChart.options;
    const darkChartOptions = {
        ...chartOptions,
        colors: [chartOptions.colors[0], "#141c2b"],
    };
    return (
        <Card>
            <StyledCardHeader>
                <SectionTitle
                    title="Account Retention"
                    desc="Number of customers who have active subscription with you."
                    descProps={{ fontSize: "12px" }}
                />
            </StyledCardHeader>
            <StyledCardBody>
                <StyledChart>
                    <ApexBarChart
                        series={RetentionChart.series}
                        options={
                            theme !== "dark" ? chartOptions : darkChartOptions
                        }
                        width="100%"
                        height={282}
                    />
                </StyledChart>
                <Row>
                    <Col col={12} sm>
                        <StyledCardBodyTitle>
                            $1,680<small>.50</small>
                        </StyledCardBodyTitle>
                        <StyledCardBodySubtitle color="primary">
                            Expansions
                        </StyledCardBodySubtitle>
                        <StyledCardBodyText>
                            Customers who have upgraded the level of your
                            products or service.
                        </StyledCardBodyText>
                    </Col>
                    <Col col={12} sm mt={["20px", "0px"]}>
                        <StyledCardBodyTitle>
                            $1,520<small>.00</small>
                        </StyledCardBodyTitle>
                        <StyledCardBodySubtitle color="pink">
                            Cancellations
                        </StyledCardBodySubtitle>
                        <StyledCardBodyText>
                            Customers who have ended their subscription with
                            you.
                        </StyledCardBodyText>
                    </Col>
                </Row>
            </StyledCardBody>
        </Card>
    );
};

export default AccountRetention;
