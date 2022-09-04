import styled, { layout, LayoutProps } from "@doar/shared/styled";

export const StyledMap = styled(({ width, height, ...props }) => (
    <div {...props} />
))<LayoutProps>`
    ${layout}
`;
