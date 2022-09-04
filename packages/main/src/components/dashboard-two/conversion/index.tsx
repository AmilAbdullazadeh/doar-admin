/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { Card, CardBody, Row, Col, ApexBarChart } from "@doar/components";
import { StyledNumber, StyledTitle, StyledText, StyledChart } from "./style";

interface IProps {
    number: string;
    title: string;
    text: string;
    color: string;
    chart: {
        options: {
            [x: string]: unknown;
        };
        series: any[];
    };
}

const Conversion: FC<IProps> = ({ number, title, text, color, chart }) => {
    return (
        <Card>
            <CardBody px={["25px", "25px"]} py={["20px"]}>
                <Row gutters={10}>
                    <Col col={7}>
                        <StyledNumber>{number}</StyledNumber>
                        <StyledTitle color={color}>{title}</StyledTitle>
                        <StyledText>{text}</StyledText>
                    </Col>
                    <Col col={5}>
                        <StyledChart>
                            <ApexBarChart
                                options={chart.options}
                                series={chart.series}
                                width="100%"
                                height="100%"
                            />
                        </StyledChart>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default Conversion;
