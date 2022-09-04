import { FC } from "react";
import {
    Card,
    SectionTitle,
    CardBody,
    DropdownToggle,
    DropdownMenu,
} from "@doar/components";
import Item from "./item";
import {
    StyledHeader,
    StyledDropdown,
    StyledList,
    StyledListIitem,
} from "./style";

const PriceIndexes: FC = () => {
    return (
        <Card height={[null, null, "100%"]}>
            <StyledHeader>
                <SectionTitle title="Price Indexes" />
                <StyledDropdown>
                    <DropdownToggle variant="texted">
                        USD <i className="fa fa-chevron-down" />
                    </DropdownToggle>
                    <DropdownMenu>
                        <button type="button" className="item">
                            USD
                        </button>
                        <button type="button" className="item">
                            EUR
                        </button>
                    </DropdownMenu>
                </StyledDropdown>
            </StyledHeader>
            <CardBody p={["0px", "0px"]}>
                <StyledList>
                    <StyledListIitem>
                        <Item
                            color="orange"
                            icon="cf cf-btc"
                            title="Bitcoin"
                            subtitle="BTC/USD"
                            coin="$4,000.19"
                            rate="0.27%"
                            status="up"
                        />
                    </StyledListIitem>
                    <StyledListIitem>
                        <Item
                            color="secondary"
                            icon="cf cf-eth"
                            title="Ethereum"
                            subtitle="ETH/USD"
                            coin="$138.90"
                            rate="0.35%"
                            status="up"
                        />
                    </StyledListIitem>
                    <StyledListIitem>
                        <Item
                            color="litecoin"
                            icon="cf cf-ltc"
                            title="Litecoin"
                            subtitle="LTC/USD"
                            coin="$59.95"
                            rate="0.05%"
                            status="up"
                        />
                    </StyledListIitem>
                    <StyledListIitem>
                        <Item
                            color="success"
                            icon="cf cf-btc"
                            title="Bitcoin Cash"
                            subtitle="BCH/USD"
                            coin="$160.28"
                            rate="-0.19%"
                            status="down"
                        />
                    </StyledListIitem>
                    <StyledListIitem>
                        <Item
                            color="primary"
                            icon="cf cf-dash"
                            title="Dash"
                            subtitle="DASH/USD"
                            coin="$92.19"
                            rate="-0.21%"
                            status="down"
                        />
                    </StyledListIitem>
                    <StyledListIitem>
                        <Item
                            color="primary"
                            opacity={0.7}
                            icon="cf cf-bsd"
                            title="BitSend"
                            subtitle="BSD/USD"
                            coin="$56.53"
                            rate="2.86%"
                            status="up"
                        />
                    </StyledListIitem>
                    <StyledListIitem>
                        <Item
                            color="pink"
                            icon="cf cf-bcn"
                            title="ByteCoin"
                            subtitle="BCN/USD"
                            coin="$0.000776"
                            rate="-1.32%"
                            status="down"
                        />
                    </StyledListIitem>
                </StyledList>
            </CardBody>
        </Card>
    );
};

export default PriceIndexes;
