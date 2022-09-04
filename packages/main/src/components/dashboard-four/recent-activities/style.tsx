import styled, { device, css, themeGet, tinycolor } from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    padding-top: 20px;
    padding-bottom: 0px;
    border-bottom: 0;
    ${device.small} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const StyledList = styled.ul`
    font-size: 13px;
`;

export const StyledListItem = styled.li`
    display: flex;
    padding: 5px 0 10px;
    position: relative;
    min-height: 70px;
    &:last-of-type {
        padding-bottom: 0;
        min-height: inherit;
    }
    &:before {
        content: "";
        position: absolute;
        top: 50px;
        bottom: 0;
        left: 20px;
        border-left: 2px dotted ${themeGet("colors.text4")};
        ${(props) =>
            props.theme.name === "dark" &&
            css`
                border-color: rgba(255, 255, 255, 0.6);
            `}
    }
`;

interface IIcon {
    $color: string;
}

export const StyledIcon = styled.div<IIcon>`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    ${(props) =>
        props.$color &&
        css`
            color: ${themeGet(`colors.${props.$color}`)};
            background-color: ${tinycolor(
                themeGet(`colors.${props.$color}`)(props)
            )
                .setAlpha(0.18)
                .toString()};
        `}
`;

export const StyledBody = styled.div`
    margin-left: 15px;
    flex: 1;
    color: ${themeGet("colors.shuttle")};
    strong {
        color: ${themeGet("colors.text2")};
        font-weight: 500;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            border-color: rgba(255, 255, 255, 0.5);
            strong {
                color: #fff;
            }
        `}
`;

export const StyledDate = styled.small`
    color: ${themeGet("colors.text3")};
`;
