import styled, { themeGet } from "@doar/shared/styled";

export const StyleLabel = styled.h6`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 500;
    color: ${themeGet("colors.text3")};
    margin-bottom: 15px;
`;
