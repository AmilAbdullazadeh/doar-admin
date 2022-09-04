import styled, { themeGet } from "@doar/shared/styled";

export const StyledLabel = styled.h6`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: ${themeGet("colros.interUi")};
    font-weight: 500;
    color: ${themeGet("colros.text3")};
    margin-bottom: 10px;
    line-height: 1.5;
`;
