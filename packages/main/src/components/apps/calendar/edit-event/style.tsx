import styled, { space, SpaceProps, themeGet } from "@doar/shared/styled";

export const StyledGroup = styled(({ ...rest }) => (
    <div {...rest} />
))<SpaceProps>`
    margin-bottom: 20px;
    select {
        text-transform: capitalize;
    }
    ${space}
`;

export const StyledLabel = styled.label`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: ${themeGet("colors.interUi")};
    font-weight: 500;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0.5rem;
`;
