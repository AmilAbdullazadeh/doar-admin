/* eslint-disable jsx-a11y/heading-has-content */
import styled, { space, SpaceProps, themeGet } from "@doar/shared/styled";

export const StyledLabel = styled(({ mb, pl, ...rest }) => (
    <h6 {...rest} />
))<SpaceProps>`
    font-size: 10px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 500;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0;
    ${space}
`;
