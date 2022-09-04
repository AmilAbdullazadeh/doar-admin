import { FC } from "react";
import { Media, MediaBody, ApexAreaChart } from "@doar/components";
import { IWatchlist } from "@doar/shared/types";
import {
    StyledCrypto,
    StyledIcon,
    StyledTitle,
    StyledDiv,
    StyledCoin,
    StyledRate,
    StyledChart,
    CryptoFooter,
    StyledLabel,
} from "./style";

type IProps = Omit<IWatchlist, "id">;

const Watchlist: FC<IProps> = ({
    icon,
    title,
    subtitle,
    coin,
    coinRate,
    coinStatus,
    color,
    markets,
    chart,
}) => {
    return (
        <StyledCrypto>
            <Media mb="10px">
                <StyledIcon bg={color}>
                    <i className={icon} />
                </StyledIcon>
                <MediaBody ml="8px">
                    <StyledTitle>
                        {title} {subtitle && <span>({subtitle})</span>}
                    </StyledTitle>
                    <StyledDiv>
                        <StyledCoin>{coin}</StyledCoin>
                        <StyledRate $status={coinStatus}>
                            <i className={`fa fa-arrow-${coinStatus}`} />{" "}
                            {coinRate}
                        </StyledRate>
                    </StyledDiv>
                </MediaBody>
            </Media>
            {chart && (
                <StyledChart>
                    <ApexAreaChart
                        options={chart.options}
                        series={chart.series}
                        width="100%"
                        height="100%"
                    />
                </StyledChart>
            )}
            <CryptoFooter>
                {markets &&
                    markets.map((market) => (
                        <StyledLabel key={market}>
                            <span>{market}</span> USD Markets
                        </StyledLabel>
                    ))}
            </CryptoFooter>
        </StyledCrypto>
    );
};

export default Watchlist;
