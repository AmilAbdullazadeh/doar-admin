import styled, { themeGet } from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
`;

export const StyledLink = styled(({ ...rest }) => <Anchor {...rest} />)`
    display: block;
    padding: 0;
    color: ${themeGet("colors.gray700")};
    &:not(:first-of-type) {
        margin-left: 10px;
    }
    svg {
        width: 20px;
        height: 20px;
        stroke-width: 2.2px;
        &.settings {
            width: 18px;
            height: 18px;
        }
    }
`;
