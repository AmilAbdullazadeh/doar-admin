import styled, { themeGet, device, css, tinycolor } from "@doar/shared/styled";
import { CardHeader, Anchor } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${device.small} {
        flex-direction: column;
        align-items: flex-start;
    }
    ${device.medium} {
        flex-direction: row;
        align-items: center;
    }
`;

export const StyledHeaderText = styled(({ ...rest }) => <Anchor {...rest} />)`
    font-size: 12px;
    color: ${themeGet("colors.text3")};
    display: flex;
    align-items: center;
    line-height: 1;
    ${device.small} {
        margin-top: 5px;
    }
    ${device.medium} {
        margin-top: 0;
    }
    svg {
        margin-left: 2px;
    }
`;

export const StyledList = styled.ul`
    margin-bottom: 0px;
`;

export const StyledListIitem = styled.li`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${themeGet("colors.light")};
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            border-color: ${themeGet("colors.darklighten5")};
        `}
`;

export const StyledListLabel = styled.li`
    padding: 6px 20px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 10px;
    font-family: ${themeGet("fonts.interUi")};
    background-color: ${themeGet("colors.whisper")};
    color: ${themeGet("colors.text3")};
    letter-spacing: 1px;
    border-top: 1px solid ${themeGet("colors.light")};
    &:first-of-type {
        border-top-width: 0;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${tinycolor(themeGet("colors.gray900")(props))
                .darken(2)
                .toString()};
            border-color: ${tinycolor(themeGet("colors.gray900")(props))
                .lighten(5)
                .toString()};
        `}
`;

interface IStatus {
    $status: "sent" | "received" | "bought";
}

export const StyledIcon = styled.div<IStatus>`
    width: 35px;
    height: 35px;
    opacity: 0.6;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    display: none;
    ${({ $status }) =>
        $status === "sent" &&
        css`
            color: ${themeGet("colors.primary")};
            border-color: ${themeGet("colors.primary")};
        `}
    ${({ $status }) =>
        $status === "received" &&
        css`
            color: ${themeGet("colors.info")};
            border-color: ${themeGet("colors.info")};
        `}
	${({ $status }) =>
        $status === "bought" &&
        css`
            color: ${themeGet("colors.success")};
            border-color: ${themeGet("colors.success")};
        `}		
    ${device.medium} {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const StyledTitle = styled.p`
    font-weight: 500;
    margin-bottom: 0px;
`;

export const StyledSubtitle = styled.p`
    font-size: 12px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
`;

export const StyledRight = styled.div`
    text-align: right;
`;

export const StyledCoin = styled.p`
    margin-bottom: 0px;
    font-family: ${themeGet("fonts.rubik")};
`;

export const StyledRate = styled.p<IStatus>`
    font-size: 12px;
    margin-bottom: 0px;
    font-family: ${themeGet("fonts.rubik")};
    ${({ $status }) =>
        ($status === "received" || $status === "bought") &&
        css`
            color: ${themeGet("colors.success")};
        `}
    ${({ $status }) =>
        $status === "sent" &&
        css`
            color: ${themeGet("colors.danger")};
        `}
`;
