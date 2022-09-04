import styled, {
    themeGet,
    layout,
    LayoutProps,
    typography,
    TypographyProps,
    color as colorStyles,
    ColorProps,
    device,
} from "@doar/shared/styled";
import { CardHeader, Table, Dropdown } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    ${device.small} {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
`;

export const StyledDropdown = styled(({ ...rest }) => <Dropdown {...rest} />)`
    .btn {
        font-size: 13px;
        color: ${themeGet("colors.text3")};
        i {
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
    }
`;

export const StyledTable = styled(({ ...rest }) => <Table {...rest} />)`
    font-size: 13px;
    white-space: nowrap;
`;

export const StyledHeadTR = styled.tr`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: ${themeGet("colors.text3")};
`;

interface ITH extends LayoutProps, TypographyProps {}

export const StyledTH = styled(({ width, textAlign, ...rest }) => (
    <th {...rest} />
))<ITH>`
    ${layout};
    ${typography}
`;

type ITD = TypographyProps;

export const StyledTD = styled(({ textAlign, fontWeight, ...rest }) => (
    <td {...rest} />
))<ITD>`
    vertical-align: middle;
    ${typography}
`;

export const StyledProgressWrap = styled.div`
    width: 150px;
    display: inline-block;
`;

export const StyledIcon = styled(({ color, ...rest }) => (
    <i {...rest} />
))<ColorProps>`
    ${colorStyles};
`;
