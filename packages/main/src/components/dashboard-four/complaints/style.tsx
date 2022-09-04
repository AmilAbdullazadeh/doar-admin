import styled, {
    themeGet,
    color as colorStyles,
    ColorProps,
    device,
} from "@doar/shared/styled";
import { CardHeader, Dropdown } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    padding-top: 20px;
    padding-bottom: 0px;
    border-bottom: 0;
    justify-content: space-between;
    display: flex;
    position: relative;
    z-index: 9;
`;

export const StyledDropdown = styled(({ ...rest }) => <Dropdown {...rest} />)`
    .btn {
        font-size: 13px;
        color: ${themeGet("colors.text3")};
        i {
            font-size: 10px;
            margin-left: 4px;
        }
    }
    .item {
        margin: 0;
        padding: 5px 8px;
        font-size: 13px;
        color: ${themeGet("colors.text3")};
        background: transparent;
        border: none;
        display: block;
    }
    .dropdown-menu {
        left: auto;
        right: 0px;
    }
`;

export const StyledDiv = styled.div`
    position: absolute;
    left: 20px;
    top: 10px;
`;

export const StyledDivTop = styled.div`
    display: flex;
    align-items: baseline;
`;

export const StyledNumb = styled.h1`
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-right: 5px;
    margin-bottom: 0px;
`;

export const StyledText = styled.p`
    font-size: 11px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
`;

export const StyledRate = styled(({ color, ...rest }) => (
    <span {...rest} />
))<ColorProps>`
    font-weight: 500;
    ${colorStyles};
`;

export const StyledDesc = styled.p`
    width: 60%;
    font-size: 12px;
    color: ${themeGet("colors.text3")};
`;

export const StyledChart = styled.div`
    width: 100%;
    height: 205px;
    margin-bottom: -5px;
    margin-top: -20px;
    & > div {
        margin-left: -9px;
        margin-right: -7px;
    }
    ${device.medium} {
        height: 283px;
    }
    ${device.large} {
        height: 180px;
    }
    ${device.xlarge} {
        height: 205px;
    }
    .apexcharts-xaxis {
        &-label {
            font-size: 9px;
            font-weight: 600;
            font-family: ${themeGet("fonts.interUi")} !important;
            &:first-of-type {
                display: none;
            }
        }
    }
    .apexcharts-gridline {
        stroke-width: 0.3px;
    }
`;
