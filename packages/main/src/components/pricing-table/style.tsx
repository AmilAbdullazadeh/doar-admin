import styled, { themeGet } from "@doar/shared/styled";

export const StyledPricing = styled.div`
    text-align: center;
`;

export const StyledIcon = styled.div`
    font-size: 100px;
    line-height: 1.1;
`;

export const StyleTitle = styled.h3`
    margin-bottom: 25px;
`;

export const StyledText = styled.p`
    color: ${themeGet("colors.text3")};
    margin-bottom: 25px;
`;

export const StyledPrice = styled.h1`
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-top: auto;
    margin-bottom: 30px;
`;
