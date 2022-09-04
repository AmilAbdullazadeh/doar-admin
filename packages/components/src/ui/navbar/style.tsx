/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { themeGet, device, css } from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";
import { Anchor } from "../anchor";

export const StyledNavbar = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

type NavItemProps = {
    $hasSubmenu: boolean;
};

export const StyledNavitem = styled.li<NavItemProps>`
    ${({ $hasSubmenu }) =>
        $hasSubmenu &&
        css`
            position: relative;
            & > a {
                ${device.large} {
                    padding-right: 14px;
                }
                &:after {
                    position: absolute;
                    right: 20px;
                    top: 5px;
                    content: "";
                    width: 4px;
                    height: 4px;
                    border-right: 1.5px solid ${themeGet("colors.text3")};
                    border-bottom: 1.5px solid ${themeGet("colors.text3")};
                    transform: rotate(45deg);
                    transition: all 0.2s ease-in-out;
                    ${device.large} {
                        margin-left: 6px;
                        right: 0;
                    }
                }
            }
        `}
    &:not(:first-of-type) {
        margin-top: 10px;
    }
    ${device.large} {
        display: inline-block;
        margin-left: 25px;
        &:first-child {
            margin-left: 0;
        }
    }
    ${device.xlarge} {
        margin-left: 30px;
    }
`;

export const StyledNavlink = styled(({ ...rest }) => <Anchor {...rest} />)`
    display: flex;
    align-items: center;
    font-weight: 500;
    color: ${themeGet("colors.text")};
    transition: all 0.2s ease-in-out;
    position: relative;
    font-size: ${themeGet("fontSize.body")};
    padding: 0 20px;
    ${device.large} {
        padding: 0;
        & > svg {
            display: none;
        }
    }
    svg {
        width: 18px;
        height: 18px;
        stroke-width: 2.2px;
        fill: ${(props) =>
            tinycolor2(props.theme.colors.text2).setAlpha(0.1).toString()};
        margin-right: 15px;
        color: ${themeGet("colors.gray600")};
        transition: all 0.2s ease-in-out;
    }
    &:hover {
        color: ${themeGet("colors.primary")};
        svg {
            color: ${themeGet("colors.primary")};
        }
    }
    &:focus {
        outline: none;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray300")};
        `}
`;

export const StyledSubmenu = styled.ul`
    position: relative;
    min-width: 200px;
    list-style: none;
    padding: 0 15px 3px 24px;
    border-left: 1px solid ${themeGet("colors.border")};
    margin-top: 10px;
    margin-left: 28px;
    z-index: 1000;
    display: none;
    &.open {
        display: block;
    }
    ${device.large} {
        position: absolute;
        top: 37.5px;
        left: -25px;
        background-color: #fff;
        padding: 20px 25px;
        border: 1px solid
            ${(props) =>
                tinycolor2(props.theme.colors.text4).setAlpha(0.53).toString()};
        margin-top: 0;
        margin-left: 0;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        &:before {
            content: "";
            position: absolute;
            width: 12px;
            height: 12px;
            top: -7px;
            left: 25px;
            border-bottom: 1.5px solid
                ${(props) =>
                    tinycolor2(props.theme.colors.text4)
                        .setAlpha(0.53)
                        .toString()};
            border-right: 1.5px solid
                ${(props) =>
                    tinycolor2(props.theme.colors.text4)
                        .setAlpha(0.53)
                        .toString()};
            transform: rotate(-135deg);
            background: #fff;
        }
        ${(props) =>
            props.theme.name === "cool" &&
            css`
                padding-top: 10px;
                margin-top: 0;
                border-color: ${tinycolor2(props.theme.colors.skinUi01)
                    .lighten(45)
                    .toString()};
                border-top-color: transparent;
                box-shadow: 0 15px 15px
                    ${tinycolor2(props.theme.colors.skinUi01)
                        .setAlpha(0.1)
                        .toRgbString()};
                &:before {
                    opacity: 0;
                }
            `}
        ${(props) =>
            props.theme.name === "dark" &&
            css`
                border-width: 0;
                ${device.large} {
                    background-color: ${tinycolor2(props.theme.colors.gray900)
                        .lighten(5)
                        .toString()};
                }
                &::before {
                    border-bottom-color: ${tinycolor2(
                        props.theme.colors.gray900
                    )
                        .lighten(5)
                        .toString()};
                    border-right-color: ${tinycolor2(props.theme.colors.gray900)
                        .lighten(5)
                        .toString()};
                    background: ${tinycolor2(props.theme.colors.gray900)
                        .lighten(5)
                        .toString()};
                }
                &::after {
                    border-bottom-color: ${tinycolor2(
                        props.theme.colors.gray900
                    )
                        .lighten(5)
                        .toString()};
                }
            `}
    }
`;

export const StyledSubNavItem = styled.li`
    margin-top: 5px;
    &:first-child {
        margin-top: 0;
    }
`;

export const StyledSubNavlink = styled(({ ...rest }) => <Anchor {...rest} />)`
    color: ${themeGet("colors.text2")};
    white-space: nowrap;
    font-size: 13px;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${themeGet("colors.primary")};
    }
    svg {
        width: 16px;
        height: 16px;
        margin-right: 15px;
        display: none;
        ${device.large} {
            display: block;
        }
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray300")};
        `}
`;

export const StyledMegaMenu = styled.div`
    position: relative;
    min-width: 200px;
    list-style: none;
    padding: 0 15px 3px 24px;
    border-left: 1px solid ${themeGet("colors.border")};
    margin-top: 10px;
    margin-left: 28px;
    z-index: 1000;
    display: none;
    &.open {
        display: block;
    }
    ${device.large} {
        position: absolute;
        top: 37.5px;
        left: -25px;
        background-color: #fff;
        padding: 20px 25px;
        border: 1px solid
            ${(props) =>
                tinycolor2(props.theme.colors.text4).setAlpha(0.53).toString()};
        margin-top: 0;
        margin-left: 0;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        &:before {
            content: "";
            position: absolute;
            width: 12px;
            height: 12px;
            top: -7px;
            left: 25px;
            border-bottom: 1.5px solid
                ${(props) =>
                    tinycolor2(props.theme.colors.text4)
                        .setAlpha(0.53)
                        .toString()};
            border-right: 1.5px solid
                ${(props) =>
                    tinycolor2(props.theme.colors.text4)
                        .setAlpha(0.53)
                        .toString()};
            transform: rotate(-135deg);
            background: #fff;
        }
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            ${device.large} {
                background-color: ${tinycolor2(props.theme.colors.gray900)
                    .lighten(5)
                    .toString()};
                border-width: 0;
            }
            &::before {
                border-bottom-color: ${tinycolor2(props.theme.colors.gray900)
                    .lighten(5)
                    .toString()};
                border-right-color: ${tinycolor2(props.theme.colors.gray900)
                    .lighten(5)
                    .toString()};
                background: ${tinycolor2(props.theme.colors.gray900)
                    .lighten(5)
                    .toString()};
            }
            &::after {
                border-bottom-color: ${tinycolor2(props.theme.colors.gray900)
                    .lighten(5)
                    .toString()};
            }
        `}
`;

export const StyledMegaMenuInner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-width: 100%;
    ${device.large} {
        min-width: 425px;
    }
`;

export const StyledMegamenuList = styled.ul`
    flex-basis: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    &:not(:first-of-type) {
        margin-top: 10px;
    }
    ${device.large} {
        flex-basis: 47%;
        max-width: 47%;
        &:nth-of-type(even) {
            margin-left: 25px;
            padding-left: 25px;
            border-left: 1px solid ${themeGet("colors.border")};
        }
        &:not(:nth-of-type(-n + 2)) {
            padding-top: 10px;
        }
    }
`;

export const StyledMegamenuLabel = styled.li`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: ${themeGet("colors.text3")};
    font-family: ${themeGet("fonts.interUi")};
    text-transform: uppercase;
    display: block;
    margin-bottom: 15px;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray700")};
        `}
`;
