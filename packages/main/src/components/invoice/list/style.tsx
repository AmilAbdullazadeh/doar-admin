import styled, { space, SpaceProps } from "@doar/shared/styled";

export const StyledList = styled(({ pr, ...rest }) => (
    <ul {...rest} />
))<SpaceProps>`
    line-height: 1.7;
    margin-bottom: 1rem;
    ${space}
`;

export const StyledItem = styled.li`
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    text-transform: capitalize;
`;
