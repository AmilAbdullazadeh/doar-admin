import { FC } from "react";
import { Media, MediaBody } from "@doar/components";
import { IconProps } from "@doar/shared/types";
import {
    StyledIcon,
    StyledTitle,
    StyledSubtitle,
    StyledRight,
    StyledCoin,
    StyledRate,
} from "./style";

interface IProps {
    status: "sent" | "received" | "bought";
    icon: FC<IconProps>;
    title: string;
    subtitle: string;
    coin: string;
    rate: string;
}

const Item: FC<IProps> = ({
    status,
    icon: Icon,
    title,
    subtitle,
    coin,
    rate,
}) => {
    return (
        <>
            <Media alignItems="center">
                <StyledIcon $status={status}>
                    <Icon width="20px" height="20px" />
                </StyledIcon>
                <MediaBody ml={[null, null, "15px"]}>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledSubtitle>{subtitle}</StyledSubtitle>
                </MediaBody>
            </Media>
            <StyledRight>
                <StyledCoin>{coin}</StyledCoin>
                <StyledRate $status={status}>{rate}</StyledRate>
            </StyledRight>
        </>
    );
};

export default Item;
