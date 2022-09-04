import { FC } from "react";
import { Button } from "@doar/components";
import {
    StyledPricing,
    StyledIcon,
    StyleTitle,
    StyledText,
    StyledPrice,
} from "./style";

interface IProps {
    icon: string;
    title: string;
    desc: string;
    price: string;
}

const PricingTable: FC<IProps> = ({ icon, title, desc, price }) => {
    return (
        <StyledPricing>
            <StyledIcon>
                <i className={`fa ${icon}`} />
            </StyledIcon>
            <StyleTitle>{title}</StyleTitle>
            <StyledText>{desc}</StyledText>
            <StyledPrice>{price}</StyledPrice>
            <Button color="primary" fullwidth>
                Choose Plan
            </Button>
        </StyledPricing>
    );
};

export default PricingTable;
