import styled, { themeGet } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const StyledTitle = styled.h6`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
`;

export const StyledDesc = styled.p`
    font-size: 13px;
    color: ${themeGet("colros.text3")};
    margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
    font-size: 13px;
    margin-bottom: 0.5rem;
    display: block;
`;
