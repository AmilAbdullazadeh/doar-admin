import styled, {
    device,
    themeGet,
    color,
    ColorProps,
    css,
} from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...props }) => <CardHeader {...props} />)`
    padding-top: 20px;
    padding-bottom: 20px;
    ${device.medium} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const StyledList = styled.div`
    padding-left: 0;
    list-style: none;
    display: flex;
    margin-bottom: 0px;
    margin-top: 20px;
    ${device.small} {
        margin-top: 10px;
    }
    ${device.medium} {
        margin-top: 0px;
    }
`;

export const StyledListItem = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
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
        margin-left: 5px;
    }
`;

export const StyledBullet = styled.span<ColorProps>`
    display: block;
    border-radius: 0.25rem;
    height: 10px;
    margin-right: 5px;
    width: 10px;
    ${color};
`;

export const StyledListText = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 500;
    color: ${themeGet("colors.text3")};
`;

export const StyledCardBodyWrap = styled.div`
    padding-left: 20px;
    padding-top: 20px;
`;

export const StyledCardBodyTitle = styled.h3`
    margin-bottom: 5px;
    font-weight: 400;
    letter-spacing: -1px;
    font-family: ${themeGet("fonts.rubik")};
`;

export const StyledCardBodySubtitle = styled.h6`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: ${themeGet("colors.text2")};
    margin-bottom: 10px;
`;

export const StyledCardBodyText = styled.p`
    font-size: 12px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
`;

export const StyledChart = styled.div`
    position: relative;
    overflow: hidden;
    margin: 0 10px 0;
    .apexcharts-xaxis-label {
        text-transform: uppercase;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            .apexcharts-xaxis-label {
                fill: rgba(255, 255, 255, 0.4);
            }
        `}
`;
