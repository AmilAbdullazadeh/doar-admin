import { FC } from "react";
import { BarChart2 } from "react-feather";
import {
    Card,
    CardBody,
    ButtonGroup,
    Button,
    Media,
    MediaBody,
    SectionTitle,
} from "@doar/components";
import { recentEarnings } from "@doar/shared/data/dashboard-one";
import { flatDeep } from "@doar/shared/methods";
import {
    StyledHeader,
    StyledMediaWrap,
    StyledMedaLeft,
    StyledMediaTitle,
    StyledMediaSub,
    StyledTable,
    StyledTH,
    StyledTD,
    StyledTDRate,
} from "./style";

const RecentEarnings: FC = () => {
    const keys = [
        ...new Set(flatDeep(recentEarnings.map((sale) => Object.keys(sale)))),
    ];

    return (
        <Card mb="10px">
            <StyledHeader>
                <div>
                    <SectionTitle
                        title="Your Most Recent Earnings"
                        desc="Your sales and referral earnings over the last 30 days"
                    />
                </div>
                <ButtonGroup mt={["20px", "0px"]}>
                    <Button size="xs" color="white" active>
                        Range
                    </Button>
                    <Button size="xs" color="white">
                        Period
                    </Button>
                </ButtonGroup>
            </StyledHeader>
            <CardBody py={["30px", "30px"]}>
                <StyledMediaWrap>
                    <Media>
                        <StyledMedaLeft bg="teal">
                            <BarChart2 size="24" />
                        </StyledMedaLeft>
                        <MediaBody>
                            <StyledMediaTitle>Gross Earnings</StyledMediaTitle>
                            <StyledMediaSub>$1,958,104</StyledMediaSub>
                        </MediaBody>
                    </Media>
                    <Media mt={["20px", "0px"]} ml={[null, "15px", "40px"]}>
                        <StyledMedaLeft bg="pink">
                            <BarChart2 size="24" />
                        </StyledMedaLeft>
                        <MediaBody>
                            <StyledMediaTitle>Tax Withheld</StyledMediaTitle>
                            <StyledMediaSub>
                                $234,769<small>.50</small>
                            </StyledMediaSub>
                        </MediaBody>
                    </Media>
                    <Media mt={["20px", "0px"]} ml={[null, "15px", "40px"]}>
                        <StyledMedaLeft bg="primary">
                            <BarChart2 size="24" />
                        </StyledMedaLeft>
                        <MediaBody>
                            <StyledMediaTitle>Net Earnings</StyledMediaTitle>
                            <StyledMediaSub>
                                $1,608,469<small>.50</small>
                            </StyledMediaSub>
                        </MediaBody>
                    </Media>
                </StyledMediaWrap>
            </CardBody>
            <StyledTable>
                <thead>
                    <tr>
                        {keys.map((key) => (
                            <StyledTH key={key}>
                                {key.replace(/_/g, " ")}
                            </StyledTH>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {recentEarnings.map((ear) => (
                        <tr key={ear.date}>
                            <StyledTD color="text3">{ear.date}</StyledTD>
                            <StyledTD fontWeight="500">
                                {ear.sales_count}
                            </StyledTD>
                            <StyledTD color="teal">
                                + {ear.gross_earnings}
                            </StyledTD>
                            <StyledTD color="pink">
                                - {ear.tax_withheld}
                            </StyledTD>
                            <StyledTD fontWeight="500">
                                {ear.net_earinings.earning}{" "}
                                <StyledTDRate
                                    color={
                                        ear.net_earinings.status === "up"
                                            ? "success"
                                            : "danger"
                                    }
                                >
                                    {ear.net_earinings.status === "up" && (
                                        <i className="fa fa-arrow-up" />
                                    )}
                                    {ear.net_earinings.status === "down" && (
                                        <i className="fa fa-arrow-down" />
                                    )}{" "}
                                    {ear.net_earinings.growth}
                                </StyledTDRate>
                            </StyledTD>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        </Card>
    );
};

export default RecentEarnings;
