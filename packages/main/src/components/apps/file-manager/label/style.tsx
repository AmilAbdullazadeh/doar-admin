/* eslint-disable jsx-a11y/heading-has-content */
import styled, { themeGet, space, SpaceProps } from "@doar/shared/styled";

export const StyledTitle = styled(({ mb, pl, ...rest }) => (
    <h6 {...rest} />
))<SpaceProps>`
    font-size: 10px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 500;
    color: ${themeGet("colors.text3")};
    ${space}
`;
