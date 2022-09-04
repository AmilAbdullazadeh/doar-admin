import styled, {
    device,
    ColorProps,
    color as colorStyle,
    themeGet,
    css,
} from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    padding-top: 20px;
    padding-bottom: 0px;
    border-bottom: 0;
    ${device.small} {
        display: flex;
        justify-content: space-between;
    }
`;

export const StyledHeaderLeft = styled.div`
    margin-bottom: 10px;
    ${device.small} {
        margin-bottom: 0px;
    }
`;

export const StyledList = styled.div`
    letter-spacing: 0.5px;
    margin-bottom: 0px;
    padding-left: 0;
    list-style: none;
    position: relative;
    z-index: 9;
`;

export const StyledListItem = styled.button`
    display: inline-block;
    padding: 0;
    background: transparent;
    border: none;
    &.hidden {
        text-decoration: line-through;
    }
    &:not(:last-child) {
        margin-right: 0.5rem;
    }
    &:not(:first-child) {
        margin-left: 10px;
    }
`;

export const StyledBullet = styled(({ bg, ...rest }) => (
    <span {...rest} />
))<ColorProps>`
    display: inline-block;
    border-radius: 50%;
    height: 7px;
    margin-right: 5px;
    width: 7px;
    ${colorStyle};
`;

export const StyledListText = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 500;
    color: ${themeGet("colors.text3")};
    span {
        display: none;
        ${device.medium} {
            display: inherit;
        }
    }
`;

export const StyledChart = styled.div`
    width: 100%;
    height: 219px;
    margin-top: -4px;
    & > div {
        margin-left: -14px;
        margin-right: -11px;
    }
    .apexcharts-grid {
        line {
            stroke-width: 1px;
        }
        & > line {
            display: none;
        }
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            .apexcharts-xaxis-label {
                fill: rgba(255, 255, 255, 0.5);
            }
        `}
`;

export const StyledNumb = styled.h4`
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-bottom: 10px;
`;

export const StyleTitle = styled.h6`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: ${themeGet("colors.text2")};
    margin-bottom: 2px;
`;

export const StyledText = styled.p`
    font-size: 10px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
    span {
        font-weight: 500;
    }
    i {
        font-size: 8px;
    }
`;

export const StyledRate = styled(({ ...rest }) => (
    <span {...rest} />
))<ColorProps>`
    ${colorStyle}
`;
