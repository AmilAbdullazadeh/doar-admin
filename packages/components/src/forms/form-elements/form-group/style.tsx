import styled, { space, SpaceProps } from "@doar/shared/styled";

export const StyledGroup = styled(({ mb, mt, ...rest }) => (
    <div {...rest} />
))<SpaceProps>`
    ${space}
`;
