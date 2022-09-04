/* eslint-disable react/react-in-jsx-scope */
import styled, { themeGet, device, tinycolor, css } from "@doar/shared";
import { Anchor } from "@doar/components";

export const StyledFooter = styled.footer`
    font-size: 10px;
    font-family: ${themeGet("fonts.interUi")};
    letter-spacing: 0.3px;
    padding: 15px 25px;
    background-color: ${themeGet("colors.gray50")};
    color: ${themeGet("colors.gray950")};
    border-top: 1px solid ${themeGet("colors.border")};
    text-transform: uppercase;
    ${device.large} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
    }
    ${(props) =>
        props.theme.name === "cool" &&
        css`
            border-top-color: transparent;
            box-shadow: 0 0 25px
                ${tinycolor(themeGet("colors.skinUi01")(props))
                    .setAlpha(0.1)
                    .toRgbString()};
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.gray900")};
            border-top-width: 0;

            a {
                color: ${themeGet("colors.gray500")};
                &:hover,
                &:focus {
                    color: #fff;
                }
            }
        `}
`;

export const StyledFooterLeft = styled.div`
    margin-top: 10px;
    ${device.medium} {
        margin-top: 0;
    }
    a {
        padding: 0;
        color: ${themeGet("colors.text2")};
    }
    .copright-link {
        display: inline-flex;
        a {
            margin-left: 2px;
        }
    }
    svg {
        width: 16px;
        height: 16px;
        color: ${themeGet("colors.danger")};
        margin: 0 5px;
    }
`;

export const StyledFooterRight = styled.div``;

export const StyledFooterNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
`;

export const StyledFotterNavLink = styled(({ ...rest }) => (
    <Anchor {...rest} />
))`
    padding: 0;
    color: ${themeGet("colors.text2")};
    display: block;
    &:not(:first-of-type) {
        margin-left: 25px;
    }
    &:hover {
        color: ${themeGet("colors.primary")};
    }
`;
