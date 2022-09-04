import { FC } from "react";
import { ArrowRight, Download, Upload, ShoppingBag } from "react-feather";
import { Card, SectionTitle, CardBody } from "@doar/components";
import Item from "./item";
import {
    StyledHeader,
    StyledHeaderText,
    StyledList,
    StyledListIitem,
    StyledListLabel,
} from "./style";

const Transactions: FC = () => {
    return (
        <Card height={[null, null, "100%"]}>
            <StyledHeader>
                <SectionTitle title="Transactions" />
                <StyledHeaderText path="/invoice">
                    View All Transactions{" "}
                    <ArrowRight width="15px" height="15px" />
                </StyledHeaderText>
            </StyledHeader>
            <CardBody p={["0px", "0px"]}>
                <StyledList>
                    <StyledListLabel>TODAY, MAR 20</StyledListLabel>
                    <StyledListIitem>
                        <Item
                            status="received"
                            icon={Download}
                            title="Received Bitcoin"
                            subtitle="Received via PayPal"
                            coin="+0.0108 BTC"
                            rate="+$25.00 USD"
                        />
                    </StyledListIitem>
                    <StyledListIitem>
                        <Item
                            status="sent"
                            icon={Upload}
                            title="Sent Bitcoin"
                            subtitle="To Bitcoin address"
                            coin="-0.0157 BTC"
                            rate="-$289.00 USD"
                        />
                    </StyledListIitem>
                    <StyledListLabel>YESTERDAY, MAR 19</StyledListLabel>
                    <StyledListIitem>
                        <Item
                            status="bought"
                            icon={ShoppingBag}
                            title="Bought Ethereum"
                            subtitle="Using PayPal account"
                            coin="+2.0157 ETH"
                            rate="+$21.50 USD"
                        />
                    </StyledListIitem>
                    <StyledListIitem>
                        <Item
                            status="bought"
                            icon={ShoppingBag}
                            title="Bought Bitcoin"
                            subtitle="Using visa debit ***1146"
                            coin="+0.004 BTC"
                            rate="+$18.50 USD"
                        />
                    </StyledListIitem>
                    <StyledListIitem>
                        <Item
                            status="sent"
                            icon={Upload}
                            title="Sent Bitcoin"
                            subtitle="To Bitcoin address"
                            coin="-0.0025 BTC"
                            rate="-$289.00 USD"
                        />
                    </StyledListIitem>
                    <StyledListIitem>
                        <Item
                            status="sent"
                            icon={Upload}
                            title="Sent Bitcoin"
                            subtitle="To Bitcoin address"
                            coin="-0.0025 BTC"
                            rate="-$289.00 USD"
                        />
                    </StyledListIitem>
                </StyledList>
            </CardBody>
        </Card>
    );
};

export default Transactions;
