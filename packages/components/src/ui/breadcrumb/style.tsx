import styled, { space, css, themeGet, SpaceProps } from "@doar/shared/styled";

export const StyledNav = styled.nav``;

export const StyledBreadcrumb = styled(({ mr, ml, mb, mt, ...props }) => (
    <ol {...props} />
))<SpaceProps>`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-bottom: 10px;
    margin-top: 0;
    list-style: none;
    background-color: ${themeGet("colors.gray200")};
    border-radius: 0.25rem;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: transparent;
        `}
    ${space};
`;

interface IProps {
    $active?: boolean;
}

export const StyledBreadcrumbItem = styled.li<IProps>`
    ${({ $active }) =>
        $active &&
        css`
            color: ${themeGet("colors.gray600")};
            ${(props) =>
                props.theme.name === "dark" &&
                css`
                    color: ${themeGet("colors.primary")};
                `}
        `}
    a {
        color: ${themeGet("colors.primary")};
        &:hover {
            color: ${themeGet("colors.primary")};
        }
        ${(props) =>
            props.theme.name === "dark" &&
            css`
                color: ${themeGet("colors.gray600")};
            `}
    }
    &:not(:first-of-type) {
        padding-left: 0.5rem;
        &:before {
            display: inline-block;
            padding-right: 0.5rem;
            color: ${themeGet("colors.gray600")};
            content: "/";
            ${(props) =>
                props.theme.name === "dark" &&
                css`
                    color: ${themeGet("colors.gray700")};
                    font-weight: 400;
                `}
        }
    }
`;
