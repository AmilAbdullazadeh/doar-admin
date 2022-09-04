import styled, { themeGet } from "@doar/shared/styled";
import { NavLink } from "@doar/components";

export const StyledNavLink = styled(({ ...rest }) => <NavLink {...rest} />)`
    align-items: center;
    display: flex;
    &.active {
        font-weight: 500;
        .badge {
            background-color: ${themeGet("colors.info")};
            color: #fff;
        }
    }

    .badge {
        margin-left: 10px;
        background-color: ${themeGet("colors.light")};
        color: ${themeGet("colors.text3")};
    }
`;
