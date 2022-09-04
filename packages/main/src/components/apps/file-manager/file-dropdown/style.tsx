import styled, { tinycolor, css, themeGet } from "@doar/shared/styled";
import { Dropdown } from "@doar/components";

export const StyledDropdown = styled(({ ...rest }) => <Dropdown {...rest} />)`
    position: absolute;
    top: 8px;
    right: 4px;
    .btn {
        svg {
            color: ${(props) =>
                !!props.theme &&
                css`
                    ${tinycolor(themeGet("colors.text3")(props))
                        .setAlpha(0.5)
                        .toRgbString()}
                `};
            width: 18px;
            height: 18px;
        }
    }
    .dropdown {
        &-menu {
            left: auto;
            right: 0;
        }
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            .dropdown {
                &-menu {
                    border-width: 0;
                    background-color: ${themeGet("colors.darklighten8")};
                }
            }
        `}
`;

export const StyledItem = styled.button`
    font-size: 12px;
    display: flex;
    align-items: center;
    padding: 6px 10px;
    border-radius: 0.25rem;
    transition: all 0.2s ease-in-out;
    clear: both;
    font-weight: 400;
    color: ${themeGet("colors.gray900")};
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    width: 100%;
    background: transparent;
    border: none;
    svg {
        width: 14px;
        height: 14px;
        stroke-width: 2.5px;
        margin-right: 10px;
        color: ${themeGet("colors.text3")};
    }
    &:hover {
        background-color: ${themeGet("colors.light")};
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray300")};
            &:hover,
            &:focus {
                background-color: ${tinycolor(themeGet("colors.gray900")(props))
                    .lighten(3)
                    .toString()};
                color: #fff;
            }
        `}
`;

StyledDropdown.displayName = "Dropdwon";
