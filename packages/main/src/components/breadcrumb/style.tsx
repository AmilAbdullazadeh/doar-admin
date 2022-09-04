/* eslint-disable react/react-in-jsx-scope */
import styled, { themeGet, css } from "@doar/shared/styled";
import { BreadcrumbItem, Breadcrumb } from "@doar/components";

export const StyledBreadWrap = styled((props) => <Breadcrumb {...props} />)`
    background: transparent;
    margin-bottom: 10px;
    padding: 0;
`;

export const StyledBreadItem = styled((props) => <BreadcrumbItem {...props} />)`
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 600;
    font-family: ${themeGet("fonts.interUi")};
    a {
        color: ${themeGet("colors.gray900")};
    }
    ${({ active }) =>
        active === true &&
        css`
            color: ${themeGet("colors.primary")};
        `}

    &:before {
        color: ${themeGet("colors.gray500")};
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            a {
                color: ${themeGet("colors.gray600")};
            }
        `}
`;

export const PageHeading = styled.h4`
    letter-spacing: -0.5px;
    margin-bottom: 0px;
`;
