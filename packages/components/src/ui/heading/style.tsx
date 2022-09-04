/* eslint-disable jsx-a11y/heading-has-content */
import styled, {
    space,
    color as colorStyles,
    typography,
    SpaceProps,
    ColorProps,
    TypographyProps,
    css,
} from "@doar/shared/styled";

interface IProps extends SpaceProps, ColorProps, TypographyProps {
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
];

export const StyledHeading = styled("h6").withConfig({
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
`;
