import { FC } from "react";
import {
    Card,
    CardBody,
    SectionTitle,
    ApexAreaChart,
    ListGroup,
} from "@doar/components";
import { portfolioChart } from "@doar/shared/data/dashboard-three";
import Item from "./item";
import {
    StyledHeader,
    StyledNav,
    StyledNavLink,
    StyledChart,
    StyledTopDiv,
    StyledTopTitle,
    StyledTopFlex,
    StyledTopCoin,
    StyledTopRate,
    StyledListItem,
} from "./style";

const Portfolio: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="Portfolio" />
                <StyledNav>
                    <StyledNavLink href="#!">1D</StyledNavLink>
                    <StyledNavLink href="#!" $active>
                        1W
                    </StyledNavLink>
                    <StyledNavLink href="#!">1M</StyledNavLink>
                    <StyledNavLink href="#!">1Y</StyledNavLink>
                </StyledNav>
            </StyledHeader>
            <CardBody p={["0px", "0px"]} position="relative">
                <StyledTopDiv>
                    <StyledTopTitle>Total Balance</StyledTopTitle>
                    <StyledTopFlex>
                        <StyledTopCoin>
                            <small>$</small> 7,429.97
                        </StyledTopCoin>
                        <StyledTopRate>
                            <i className="fa fa-arrow-up" /> 60 (2.45%)
                        </StyledTopRate>
                    </StyledTopFlex>
                </StyledTopDiv>
                <StyledChart>
                    <ApexAreaChart
                        options={portfolioChart.options}
                        series={portfolioChart.series}
                        width="100%"
                        height="100%"
                    />
                </StyledChart>
                <ListGroup flush mt="17px">
                    <StyledListItem>
                        <Item
                            color="orange"
                            icon="cf cf-btc"
                            title="Bitcoin"
                            subtitle="btc/usd"
                            coin="0.7200 BTC"
                            usd="$2,907.71 USD"
                        />
                    </StyledListItem>
                    <StyledListItem>
                        <Item
                            color="secondary"
                            icon="cf cf-eth"
                            title="Ethereum"
                            subtitle="eth/usd"
                            coin="15.0030 ETH"
                            usd="$2,083.62 USD"
                        />
                    </StyledListItem>
                    <StyledListItem>
                        <Item
                            color="litecoin"
                            icon="cf cf-ltc"
                            title="Litecoin"
                            subtitle="ltc/usd"
                            coin="12.5021 LTC"
                            usd="$748.88 USD"
                        />
                    </StyledListItem>
                    <StyledListItem>
                        <Item
                            color="success"
                            icon="cf cf-btc"
                            title="Bitcoin Cash`"
                            subtitle="bch/usd"
                            coin="5.8120 BCH"
                            usd="$916.67 USD"
                        />
                    </StyledListItem>
                    <StyledListItem>
                        <Item
                            color="primary"
                            icon="cf cf-dash"
                            title="Dash`"
                            subtitle="dash/usd"
                            coin="16.5019 DASH"
                            usd="$1,521.97 USD"
                        />
                    </StyledListItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

export default Portfolio;
