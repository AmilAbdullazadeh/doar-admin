import styled, { themeGet } from "@doar/shared/styled";

export const StyledNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-top: 15px;
    & > a {
        color: ${themeGet("colors.gray700")};
        &:not(:first-of-type) {
            margin-left: 15px;
        }
    }
`;
