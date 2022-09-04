/* eslint-disable jsx-a11y/label-has-associated-control */
import styled, { themeGet } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    width: 100%;
    padding-top: 20px;
`;

export const StyledTitle = styled.h3`
    color: ${themeGet("colors.text")};
    margin-bottom: 5px;
`;

export const StyledDesc = styled.p`
    font-size: 16px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 40px;
`;

export const StyledLabelWrap = styled.div`
    margin-bottom: 5px;
    justify-content: space-between;
    display: flex;
`;

export const StyledDivider = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: ${themeGet("colors.text3")};
    font-size: 10px;
    font-weight: 500;
    font-family: ${themeGet("fonts.interui")};
    letter-spacing: 0.5px;
    margin: 15px 0;
    &:after,
    &:before {
        content: "";
        display: block;
        flex: 1;
        height: 1px;
        background-color: ${themeGet("colors.light")};
    }
    &:before {
        margin-right: 10px;
    }
    &:after {
        margin-left: 10px;
    }
`;

export const StyledBottomText = styled.div`
    margin-top: 20px;
    text-align: center;
    font-size: 13px;
`;
