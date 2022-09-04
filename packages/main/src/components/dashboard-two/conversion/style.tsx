import styled, {
    themeGet,
    color as colorStyles,
    ColorProps,
} from "@doar/shared/styled";

export const StyledNumber = styled.h3`
    letter-spacing: -0.5px;
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-bottom: 5px;
`;

export const StyledTitle = styled(({ color, ...rest }) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h6 {...rest} />
))<ColorProps>`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    margin-bottom: 5px;
    ${colorStyles};
`;

export const StyledText = styled.p`
    font-size: 11px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
`;

export const StyledChart = styled.div`
    width: 100%;
    height: 120px;
    margin-top: -21px;
    margin-bottom: -7px;
    & > div {
        margin-left: -22px;
        margin-right: 0;
    }
`;
