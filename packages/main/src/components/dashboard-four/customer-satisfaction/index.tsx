import { FC } from "react";
import { Card, CardBody, SectionTitle, Text } from "@doar/components";
import {
    StyledHeader,
    StyledDiv,
    StyledRate,
    StyledNumb,
    StyledTitle,
    StyledProgress,
    StyledProgressBar,
    StyledTable,
    StyledTD,
    StyledBullet,
} from "./style";

const CustomerSatisfaction: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="Customer Satisfaction" />
            </StyledHeader>
            <CardBody py={["10px", "10px"]}>
                <StyledDiv>
                    <StyledNumb>9.8</StyledNumb>
                    <StyledRate>
                        <Text as="span" color="success">
                            1.6% <i className="fa fa-arrow-up" />
                        </Text>
                    </StyledRate>
                </StyledDiv>
                <StyledTitle>Performance Score</StyledTitle>
                <StyledProgress>
                    <StyledProgressBar $width={50} bg="primary" />
                    <StyledProgressBar $width={25} bg="success" />
                    <StyledProgressBar $width={5} bg="warning" />
                    <StyledProgressBar $width={5} bg="pink" />
                    <StyledProgressBar $width={10} bg="teal" />
                    <StyledProgressBar $width={5} bg="purple" />
                </StyledProgress>
                <StyledTable mb="0px">
                    <tbody>
                        <tr>
                            <StyledTD>
                                <StyledBullet borderColor="primary" />
                            </StyledTD>
                            <StyledTD fontWeight="500">Excellent</StyledTD>
                            <StyledTD textAlign="right" fontFamily="rubik">
                                3,007
                            </StyledTD>
                            <StyledTD
                                textAlign="right"
                                fontFamily="rubik"
                                color="text3"
                            >
                                50%
                            </StyledTD>
                        </tr>
                        <tr>
                            <StyledTD>
                                <StyledBullet borderColor="success" />
                            </StyledTD>
                            <StyledTD fontWeight="500">Very Good</StyledTD>
                            <StyledTD textAlign="right" fontFamily="rubik">
                                1,674
                            </StyledTD>
                            <StyledTD
                                textAlign="right"
                                fontFamily="rubik"
                                color="text3"
                            >
                                25%
                            </StyledTD>
                        </tr>
                        <tr>
                            <StyledTD>
                                <StyledBullet borderColor="warning" />
                            </StyledTD>
                            <StyledTD fontWeight="500">Good</StyledTD>
                            <StyledTD textAlign="right" fontFamily="rubik">
                                125
                            </StyledTD>
                            <StyledTD
                                textAlign="right"
                                fontFamily="rubik"
                                color="text3"
                            >
                                6%
                            </StyledTD>
                        </tr>
                        <tr>
                            <StyledTD>
                                <StyledBullet borderColor="pink" />
                            </StyledTD>
                            <StyledTD fontWeight="500">Fair</StyledTD>
                            <StyledTD textAlign="right" fontFamily="rubik">
                                98
                            </StyledTD>
                            <StyledTD
                                textAlign="right"
                                fontFamily="rubik"
                                color="text3"
                            >
                                5%
                            </StyledTD>
                        </tr>
                        <tr>
                            <StyledTD>
                                <StyledBullet borderColor="teal" />
                            </StyledTD>
                            <StyledTD fontWeight="500">Poor</StyledTD>
                            <StyledTD textAlign="right" fontFamily="rubik">
                                512
                            </StyledTD>
                            <StyledTD
                                textAlign="right"
                                fontFamily="rubik"
                                color="text3"
                            >
                                10%
                            </StyledTD>
                        </tr>
                        <tr>
                            <StyledTD>
                                <StyledBullet borderColor="purple" />
                            </StyledTD>
                            <StyledTD fontWeight="500">Very Poor</StyledTD>
                            <StyledTD textAlign="right" fontFamily="rubik">
                                81
                            </StyledTD>
                            <StyledTD
                                textAlign="right"
                                fontFamily="rubik"
                                color="text3"
                            >
                                4%
                            </StyledTD>
                        </tr>
                    </tbody>
                </StyledTable>
            </CardBody>
        </Card>
    );
};

export default CustomerSatisfaction;
