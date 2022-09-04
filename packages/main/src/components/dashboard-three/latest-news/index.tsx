import { FC } from "react";
import { MoreHorizontal } from "react-feather";
import { Card, CardBody, SectionTitle, Text } from "@doar/components";
import image1 from "@doar/shared/images/img37.jpg";
import image2 from "@doar/shared/images/img38.jpg";
import image3 from "@doar/shared/images/img39.jpg";
import Item from "./item";
import { StyledHeader, StyledList, StyleHr } from "./style";

const LatestNews: FC = () => {
    return (
        <Card height="100%">
            <StyledHeader>
                <SectionTitle title="Latest Crypto News" />
                <Text as="span" color="text3">
                    <MoreHorizontal width={20} height={20} />
                </Text>
            </StyledHeader>
            <CardBody p={["0px", "0px"]}>
                <StyledList>
                    <Item
                        image={image1}
                        category="CryptoNinja"
                        title="Dow Futures, Bitcoin Teeter as Markets Wait for FOMC Bounce"
                        excerpt="As the unwelcome bearish momentum returns to all top cryptocurrency markets, most of this morning’s excitement..."
                        path="#!"
                    />
                    <StyleHr />
                    <Item
                        image={image2}
                        category="CNN"
                        title="XRP Price Remains Bearish as XRP/BTC Drops Below 7,800 Satoshi"
                        excerpt="Liquidity has shifted away from the top gaining crypto assets, with only six of the week’s 30 top performing markets..."
                        path="#!"
                    />
                    <StyleHr />
                    <Item
                        image={image3}
                        category="Bitcoin.com"
                        title="Bitcoin Price to $4500 soon? BTC Price Analysis"
                        excerpt="Published on CoinnounceTechnical Indicators: Support Level: $3900 Resistance Levels: $4100, $4200 Bitcoin Price Analysis..."
                        path="#!"
                    />
                </StyledList>
            </CardBody>
        </Card>
    );
};

export default LatestNews;
