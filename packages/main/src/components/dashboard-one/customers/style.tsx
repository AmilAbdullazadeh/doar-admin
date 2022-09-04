/* eslint-disable jsx-a11y/anchor-has-content */
import styled, {
    themeGet,
    space,
    SpaceProps,
    device,
    layout,
    LayoutProps,
} from "@doar/shared/styled";
import { CardHeader, CardFooter, Dropdown } from "@doar/components";

export const StyledHeader = styled(({ ...props }) => <CardHeader {...props} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledHeaderRight = styled.div`
    font-size: 18px;
    display: flex;
`;

export const StyledIcon = styled(({ m, ml, mr, mt, mb, ...rest }) => (
    <a {...rest} />
))<SpaceProps>`
    color: ${themeGet("colors.text3")};
    line-height: 0;
    ${space};
`;

export const StyledListMiddle = styled.div`
    ${device.small} {
        padding-left: 10px;
    }
`;

export const StyledListTitle = styled.p`
    font-weight: 500;
    margin-bottom: 0px;
    font-size: 13px;
`;

export const StyledListText = styled.small`
    color: ${themeGet("colors.text3")};
    font-size: 12px;
    margin-bottom: 0px;
`;

export const StyledListEnd = styled.div`
    margin-left: auto;
    text-align: right;
    align-self: center;
`;

export const StyledNavIcon = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    align-items: center;
`;

export const StyledNavLink = styled(({ display, ...rest }) => (
    <a {...rest} />
))<LayoutProps>`
    padding: 0;
    color: ${themeGet("colors.text3")};
    display: none;
    &:not(:first-of-type) {
        margin-left: 10px;
    }
    ${layout};
    svg {
        width: 18px;
        height: 18px;
    }
`;

export const StyledFooter = styled(({ ...props }) => <CardFooter {...props} />)`
    text-align: center;
    font-size: 13px;
`;

export const StyledFooterLink = styled.a`
    color: ${themeGet("colors.text3")};
    i {
        margin-left: 5px;
    }
`;

export const StyledDropdown = styled(({ ...rest }) => <Dropdown {...rest} />)`
    ${device.small} {
        display: none;
    }
    button {
        color: ${themeGet("colors.text3")};
    }
    .dropdown-item {
        display: flex;
        align-items: center;
        svg {
            margin-right: 4px;
        }
    }
`;
