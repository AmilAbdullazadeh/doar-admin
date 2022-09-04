import styled, { css, themeGet } from "@doar/shared/styled";
import { Rotating } from "@doar/shared/animations";
import { TTheme } from "@doar/shared/types";

interface IProps {
    $show: boolean;
}

export const StyledSettings = styled.div<IProps>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1200;
    transition: all 0.2s;

    ${({ $show }) =>
        $show &&
        css`
            right: 200px;
        `}
`;

export const StyledSettingsBtn = styled.button<IProps>`
    top: 98px;
    right: 0;
    width: 45px;
    height: 45px;
    border: 1px solid transparent;
    border-right-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    transition: all 0.2s;
    z-index: 1;
    &:focus,
    &:hover {
    }
    svg {
        animation: ${Rotating} 3s linear infinite;
    }
    ${({ $show }) =>
        !$show &&
        css`
            position: fixed;
            background-color: #1c273c;
            border-color: transparent;
            color: #fff;
            &:hover,
            &:focus {
                color: #fff;
                background-color: #3b4863;
                box-shadow: 0 0 10px 2px rgb(28 39 60 / 10%);
            }
        `}
    ${({ $show }) =>
        $show &&
        css`
            position: relative;
            background-color: #fff;
            border-color: #c0ccda;
            color: #1c273c;
            box-shadow: -5px 0 10px rgb(28 39 60 / 10%);
            right: 44px;
            &:hover,
            &:focus {
                background-color: #fff;
                border-color: #c0ccda;
                color: #1c273c;
                box-shadow: -5px 0 10px rgb(28 39 60 / 10%);
            }
        `}
`;

export const StyledSettingsBody = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: #fff;
    border-left: 1px solid #c0ccda;
    box-shadow: 0 0 15px rgb(28 39 60 / 10%);
    padding: 0 20px;
    overflow-y: auto;
`;

interface ICardProps {
    $hasBorder?: boolean;
}

export const StyledCard = styled.div<ICardProps>`
    padding: 20px 0;
    ${({ $hasBorder }) =>
        $hasBorder &&
        css`
            border-top: 1px solid rgba(72, 94, 144, 0.16);
        `}
`;

export const StyledLogo = styled.h3`
    color: #042893;
    font-weight: 700;
    letter-spacing: -1px;
    margin-bottom: 0px;
    span {
        color: #0168fa;
        font-weight: 400;
    }
`;

export const StyledNote = styled.span`
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: -apple-system, BlinkMacSystemFont, "Inter UI", Roboto,
        sans-serif;
`;

export const StyledLabel = styled.h4`
    line-height: 1;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: -apple-system, BlinkMacSystemFont, "Inter UI", Roboto,
        sans-serif;
    font-weight: 700;
    color: #1b2e4b;
    margin-bottom: 15px;
`;

interface IModeProps {
    $mode: TTheme;
    $active?: boolean;
}

export const StyledMode = styled.button<IModeProps>`
    height: 20px;
    border: 1px solid rgba(72, 94, 144, 0.16);
    display: flex;
    margin-bottom: 5px;
    padding: 2px;
    width: 100%;
    background: transparent;
    position: relative;
    & > span {
        display: block;
        height: 100%;
        flex: 1;
    }
    svg {
        position: absolute;
        inset: 0;
        margin: auto;
        color: #0168fa;
        visibility: hidden;
    }
    &:hover,
    &:focus {
        border-color: #8392a5;
        box-shadow: 0 0 0 1px #8392a5;
    }

    ${({ $mode }) =>
        $mode === "light" &&
        css`
            & > span {
                &:first-of-type {
                    background-color: ${themeGet("colors.whisper")};
                }
                &:last-of-type {
                    background-color: ${themeGet("colors.light")};
                }
            }
        `}
    ${({ $mode }) =>
        $mode === "cool" &&
        css`
            & > span {
                background-color: ${themeGet("colors.primary")};
                &:first-of-type {
                    opacity: 0.1;
                }
                &:last-of-type {
                    opacity: 0.2;
                }
            }
        `}
    ${({ $mode }) =>
        $mode === "dark" &&
        css`
            & > span {
                &:first-of-type {
                    background-color: ${themeGet("colors.gray700")};
                }
                &:last-of-type {
                    background-color: ${themeGet("colors.gray900")};
                }
            }
        `}
    ${({ $active }) =>
        $active &&
        css`
            border-color: #0168fa;
            box-shadow: 0 0 0 1px #0168fa;
            position: relative;
            svg {
                visibility: visible;
            }
            & ~ span {
                color: #0168fa;
            }
        `}
`;

export const StyledSkinName = styled.span`
    font-size: 9px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Inter UI", Roboto,
        sans-serif;
    text-transform: uppercase;
    display: block;
    text-align: center;
    color: #8392a5;
`;
