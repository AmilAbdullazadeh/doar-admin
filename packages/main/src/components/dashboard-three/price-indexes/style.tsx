import styled, {
    themeGet,
    css,
    color as colorStyles,
    ColorProps,
    device,
} from "@doar/shared/styled";
import { CardHeader, Dropdown } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 0px;
    ${device.small} {
        flex-direction: column;
        align-items: flex-start;
    }
    ${device.medium} {
        flex-direction: row;
        align-items: center;
    }
`;

export const StyledHeaderText = styled.span`
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
    i {
        margin-left: 2px;
        font-size: 10px;
    }
`;

export const StyledDropdown = styled(({ ...rest }) => <Dropdown {...rest} />)`
    ${device.small} {
        margin-top: 5px;
    }
    ${device.medium} {
        margin-top: 0;
    }
    .btn {
        font-size: 12px;
        color: ${themeGet("colors.text3")};
        display: flex;
        align-items: center;
        line-height: 1;
        i {
            margin-left: 2px;
            font-size: 10px;
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

export const StyledIcon = styled(({ bg, opacity, ...rest }) => (
    <div {...rest} />
))<ColorProps>`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
    ${colorStyles};
`;

export const StyledTitle = styled.p`
    font-weight: 500;
    margin-bottom: 0px;
`;

export const StyledSubtitle = styled.p`
    font-size: 11px;
    letter-spacing: 0.5px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 500;
`;

export const StyledRight = styled.div`
    text-align: right;
`;

export const StyledCoin = styled.p`
    margin-bottom: 0px;
    font-weight: 400;
    font-family: ${themeGet("fonts.rubik")};
`;

interface IStatus {
    $status: "up" | "down";
}

export const StyledRate = styled.p<IStatus>`
    font-size: 12px;
    margin-bottom: 0px;
    font-family: ${themeGet("fonts.rubik")};
    ${({ $status }) =>
        $status === "up" &&
        css`
            color: ${themeGet("colors.success")};
        `}
    ${({ $status }) =>
        $status === "down" &&
        css`
            color: ${themeGet("colors.danger")};
        `}
`;
