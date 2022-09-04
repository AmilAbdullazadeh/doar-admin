import styled, { themeGet } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    padding: 20px;
    border: 1px solid ${themeGet("colors.border")};
`;

export const StyledTitle = styled.h6`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 500;
    color: ${themeGet("colors.text3")};
    margin-bottom: 10px;
`;

export const StyledList = styled.ul`
    line-height: 1.7;
    margin-bottom: 0px;
`;
