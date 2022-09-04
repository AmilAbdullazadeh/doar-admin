import styled, {
    device,
    themeGet,
    css,
    space,
    tinycolor,
} from "@doar/shared/styled";
import { DropdownMenu, Anchor, Avatar } from "@doar/components";

export const StyledDropMenu = styled(({ ...rest }) => (
    <DropdownMenu {...rest} />
))`
    border-top-width: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-color: ${themeGet("colors.border")};
    width: 230px;
    padding: 25px;
    margin-top: 11.5px;
    box-shadow: none;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    margin-right: -10px;
    right: 0;
    left: auto;
    ${device.large} {
        margin-top: 14.5px;
    }
    &:before {
        content: "";
        position: absolute;
        top: -10px;
        left: 25px;
        border-bottom: 10px solid ${themeGet("colors.border")};
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        left: auto;
        right: 20px;
        ${device.small} {
            right: 20px;
        }
    }
    &:after {
        content: "";
        position: absolute;
        top: -8.5px;
        left: 26px;
        border-bottom: 9px solid #fff;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        left: auto;
        right: 21px;
        ${device.small} {
            right: 21px;
        }
    }
    ${(props) =>
        props.theme.name === "cool" &&
        css`
            margin-top: 13.5px;
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            &::before {
                opacity: 0;
            }
            &::after {
                border-bottom-color: ${themeGet("colors.darklighten5")};
            }
            margin-top: 14px;
        `}
`;

export const StyledAvatar = styled(({ ...rest }) => <Avatar {...rest} />)`
    transition: all 0.3s;
    &:hover {
        border: 2px solid ${themeGet("colors.gray300")};
        ${({ theme }) =>
            theme.name === "dark" &&
            css`
                border-color: ${themeGet("colors.gray800")};
            `}
    }
`;

StyledDropMenu.displayName = "DropdownMenu";

export const StyledAuthorName = styled.h6`
    font-weight: 600;
    margin-bottom: 5px;
    margin-top: 15px;
`;

export const StyledAuthorRole = styled.p`
    font-size: 12px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 25px;
`;

export const StyledDropItem = styled(({ mt, ...rest }) => <Anchor {...rest} />)`
    padding: 0;
    display: flex;
    align-items: center;
    color: ${themeGet("colors.text2")};
    border-radius: 0.25rem;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    clear: both;
    font-weight: 400;
    width: 100%;
    font-size: 13px;
    svg {
        width: 16px;
        height: 16px;
        margin-right: 15px;
    }
    ${({ theme }) =>
        theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray500")};
        `}
    ${space}
`;

export const StyledDivider = styled.div`
    height: 0;
    overflow: hidden;
    border-top: 1px solid ${themeGet("colors.gray200")};
    margin: 15px 0;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            border-color: ${tinycolor(themeGet("colors.white")(props))
                .setAlpha(0.06)
                .toRgbString()};
        `}
`;
