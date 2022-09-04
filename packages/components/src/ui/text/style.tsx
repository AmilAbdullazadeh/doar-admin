import styled, {
    space,
    color as colorStyles,
    typography,
    layout,
    SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    css,
} from "@doar/shared/styled";

interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {
    $tt?: string;
}

const props = [
    "p",
    "px",
    "py",
    "pt",
    "pb",
    "pl",
    "pr",
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "ml",
    "mr",
    "color",
    "fontFamily",
    "fontSize",
    "fontWeight",
    "lineHeight",
    "letterSpacing",
    "textAlign",
    "display",
];

export const StyledText = styled("p").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...props].includes(prop) && defaultValidatorFn(prop),
})<IProps>`
    ${({ $tt }) =>
        $tt &&
        css`
            text-transform: ${$tt};
        `}
    ${space};
    ${colorStyles};
    ${typography};
    ${layout};
`;
