import styled, { themeGet } from "@doar/shared/styled";

export const StyledTitle = styled.h5`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 600;
    color: ${themeGet("colors.text2")};
    margin-bottom: 20px;
`;
