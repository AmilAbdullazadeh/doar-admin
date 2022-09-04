import { FC } from "react";
import { Media, MediaBody } from "@doar/components";
import {
    StyledIcon,
    StyledTitle,
    StyledSubtitle,
    StyledRight,
    StyledCoin,
    StyledRate,
} from "./style";

interface IProps {
    color: string;
    opacity?: number;
    icon: string;
    title: string;
    subtitle: string;
    coin: string;
    rate: string;
    status: "up" | "down";
}

const Item: FC<IProps> = ({
    color,
    opacity,
    icon,
    title,
    subtitle,
    coin,
    rate,
    status,
}) => {
    return (
        <>
            <Media>
                <StyledIcon bg={color} opacity={opacity}>
                    <i className={icon} />
                </StyledIcon>
                <MediaBody ml="15px">
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
