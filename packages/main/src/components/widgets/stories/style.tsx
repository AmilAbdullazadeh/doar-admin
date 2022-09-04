import styled, { themeGet } from "@doar/shared/styled";

export const StyledName = styled.p`
    font-weight: 500;
    margin-bottom: 0px;
`;

export const StyledTime = styled.span`
    font-size: 12px;
    color: ${themeGet("colors.text3")};
`;
