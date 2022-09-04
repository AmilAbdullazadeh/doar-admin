import styled, {
    themeGet,
    css,
    TypographyProps,
    typography,
} from "@doar/shared/styled";

interface ITitle extends TypographyProps {
    $hasDesc?: boolean;
}

export const StyledTitle = styled.h6<ITitle>`
    ${({ $hasDesc }) =>
        !$hasDesc &&
        css`
            margin-bottom: 0;
        `}
    ${({ $hasDesc }) =>
        $hasDesc &&
        css`
            margin-bottom: 5px;
        `}
	${typography}
`;

export const StyledDesc = styled(({ fontSize, ...rest }) => (
    <p {...rest} />
))<TypographyProps>`
    color: ${themeGet("colors.text3")};
    font-size: 13px;
    margin-bottom: 0px;
    ${typography}
`;
