/* eslint-disable react/button-has-type */
import styled, { themeGet } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    padding: 20px;
    margin-bottom: 20px;
`;

export const StyledGroup = styled.div``;

export const StyledItem = styled.div<{ $color: string }>`
    display: block;
    padding: 0 10px;
    color: ${themeGet("colors.text2")};
    transition: all 0.2s ease-in-out;
    background: transparent;
    border: none;
    border-left-width: 2px;
    border-left-style: solid;
    background: transparent;
    text-align: left;
    border-color: ${(props) => props.$color};
    &:focus,
    &:active {
        outline: none;
    }
    &:not(:first-of-type) {
        margin-top: 20px;
    }
`;

export const StyledTitle = styled.h6`
    margin-bottom: 3px;
`;

export const StyledDetails = styled.span`
    font-size: 12px;
    color: ${themeGet("colors.text3")};
    display: block;
`;
