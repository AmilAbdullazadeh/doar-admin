import { FC } from "react";
import { BarChart2 } from "react-feather";
import {
    Card,
    CardBody,
    Row,
    Col,
    Media,
    MediaBody,
    ApexAreaChart,
    SectionTitle,
} from "@doar/components";
import { acquisitionChart } from "@doar/shared/data/dashboard-two";
import {
    StyledHeader,
    StyledMediaIcon,
    StyledMediaTitle,
    StyledMediaDesc,
    StyledChart,
} from "./style";

const Acquisition: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <SectionTitle
                    title="Acquisition"
                    desc="Tells you where your visitors originated from, such as
                    search engines, social networks or website referrals. 
                    <a href='/'>Learn more</a>"
                    descProps={{ fontSize: "12px" }}
                />
            </StyledHeader>
            <CardBody p={[null, "20px", null, "25px"]}>
                <Row gutters={20}>
                    <Col sm={5} md={12} lg={6} xl={5}>
                        <Media>
                            <StyledMediaIcon $variant="primary">
                                <BarChart2 size={20} strokeWidth="3px" />
                            </StyledMediaIcon>
                            <MediaBody ml="10px">
                                <StyledMediaTitle>33.50%</StyledMediaTitle>
                                <StyledMediaDesc>Bounce Rate</StyledMediaDesc>
                            </MediaBody>
                        </Media>
                    </Col>
                    <Col
                        sm={5}
                        md={12}
                        lg={6}
                        xl={5}
                        mt={["20px", 0, "20px", 0]}
                    >
                        <Media>
                            <StyledMediaIcon $variant="light">
                                <BarChart2 size={20} strokeWidth="3px" />
                            </StyledMediaIcon>
                            <MediaBody ml="10px">
                                <StyledMediaTitle>9,065</StyledMediaTitle>
                                <StyledMediaDesc>Page Sessions</StyledMediaDesc>
                            </MediaBody>
                        </Media>
                    </Col>
                </Row>
            </CardBody>
            <StyledChart>
                <ApexAreaChart
                    options={acquisitionChart.options}
                    series={acquisitionChart.series}
                    width="100%"
                    height="100%"
                />
            </StyledChart>
        </Card>
    );
};

export default Acquisition;
