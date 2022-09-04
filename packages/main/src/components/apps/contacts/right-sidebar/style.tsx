/* eslint-disable react/button-has-type */
import styled, {
    device,
    color as colorStyles,
    ColorProps,
    themeGet,
} from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledWrap = styled.div`
    padding: 20px;
    ${device.xlarge} {
        padding: 25px;
    }
`;

export const StyledTopDiv = styled.div`
    margin-bottom: 25px;
    &:after {
        display: block;
        clear: both;
        content: "";
    }
`;

export const StyledAvatar = styled.div`
    position: relative;
    float: left;
`;

export const StyledName = styled.h5`
    margin-bottom: 5px;
    font-size: 18px;
    ${device.xlarge} {
        font-size: 20px;
    }
`;

export const StyledRole = styled.p`
    margin-bottom: 20px;
    color: ${themeGet("colors.text3")};
    font-size: 13px;
    ${device.large} {
        font-size: 12px;
    }
    ${device.xlarge} {
        font-size: 13px;
    }
`;

export const StyledBtns = styled.nav`
    margin-bottom: 20px;
    display: flex;
`;

export const StyledNavBtn = styled(({ bg, ...rest }) => (
    <button {...rest} />
))<ColorProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    color: #fff;
    border: none;
    &:not(:first-of-type) {
        margin-left: 8px;
    }
    svg {
        width: 16px;
        stroke-width: 2.6px;
    }
    ${colorStyles};
`;

export const StyledBio = styled.p`
    font-size: 13px;
    margin-bottom: 0px;
`;

export const StyledNav = styled.nav`
    margin-bottom: 25px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const StyledLink = styled(({ ...rest }) => <Anchor {...rest} />)`
    color: ${themeGet("colors.text2")};
    display: flex;
    align-items: center;
    padding: 0;
    &:not(:first-of-type) {
        margin-top: 10px;
    }
    svg {
        position: relative;
        margin-top: -2px;
        width: 18px;
        margin-right: 12px;
    }
`;
