import styled, { device, themeGet, css } from "@doar/shared/styled";
import { CardHeader, Nav, NavLink, Dropdown } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    padding-top: 8px;
    padding-bottom: 8px;
    ${device.small} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const StyledNavLine = styled(({ ...rest }) => <Nav {...rest} />)`
    border-bottom-width: 0 !important;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 0.5px;
`;

export const StyledNavLink = styled(({ ...rest }) => <NavLink {...rest} />)`
    &:not(:first-of-type) {
        margin-left: 10px;
    }
    &:after {
        height: 3px;
        bottom: -10px;
        border-radius: 0.25rem;
        display: none;
    }
    ${device.small} {
        &:after {
            display: block;
        }
    }
`;

export const StyledHeaderRight = styled.div`
    font-size: 12px;
    color: ${themeGet("colors.text3")};
    display: none;
    ${device.small} {
        display: flex;
        align-items: center;
    }
`;

export const StyledHeaderText = styled.span`
    letter-spacing: 0.5px;
    font-family: ${themeGet("fonts.rubik")};
    color: ${themeGet("colors.text")};
    font-weight: 400;
    i {
        margin-left: 2px;
        font-weight: 600;
        color: ${themeGet("colors.text2")};
    }
`;

export const StyledDropdown = styled(({ ...rest }) => <Dropdown {...rest} />)`
    .btn {
        letter-spacing: 0.5px;
        font-family: ${themeGet("fonts.rubik")};
        color: ${themeGet("colors.text")};
        font-weight: 400;
        i {
            margin-left: 2px;
            font-weight: 600;
            color: ${themeGet("colors.text2")};
        }
    }
    .item {
        margin: 0;
        padding: 5px 8px;
        font-family: ${themeGet("fonts.rubik")};
        color: ${themeGet("colors.text")};
        background: transparent;
        border: none;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            .dropdown {
                &-menu {
                    border-width: 0;
                    background-color: ${themeGet("colors.darklighten5")};
                }
            }
        `}
`;

export const StyledText = styled.span`
    margin-left: 10px;
    margin-right: 10px;
`;

export const StyledChart = styled.div`
    width: 100%;
    height: 200px;
    margin-top: -15px;
    ${device.large} {
        height: 284px;
    }
    & > div {
        margin-left: -20px;
        margin-right: -10px;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            .apexcharts-xaxis-label {
                fill: rgba(255, 255, 255, 0.5);
            }
        `}
`;

export const StyledFooterTitle = styled.h6`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 19px;
    ${device.small} {
        font-size: 11px;
    }
`;

export const StyledFooterSub = styled.h5`
    font-family: ${themeGet("fonts.rubik")};
    line-height: 1.1;
    font-weight: 400;
    margin-right: 5px;
    margin-bottom: 0px;
    .danger {
        color: ${themeGet("colors.danger")};
    }
    i {
        font-weight: 600;
        font-size: 10px;
    }
`;
