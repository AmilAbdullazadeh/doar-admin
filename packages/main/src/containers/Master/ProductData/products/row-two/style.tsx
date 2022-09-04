import styled, {
    layout,
    LayoutProps,
    typography,
    TypographyProps,
    color as colorStyle,
    ColorProps,
} from "@doar/shared/styled";

interface IProps extends LayoutProps, TypographyProps, ColorProps {}

export const StyledTH = styled(({ display, width, textAlign, ...rest }) => (
    <th {...rest} />
))<IProps>`
    font-size: 13px;
    ${layout};
    ${typography};
`;

export const StyledTD = styled(({ display, textAlign, color, ...rest }) => (
    <td {...rest} />
))<IProps>`
    white-space: normal !important;
    font-size: 13px;
    ${layout};
    ${typography};
    ${colorStyle};
`;
