import styled, { device, themeGet, css, tinycolor } from "@doar/shared/styled";

export const StyledSidebar = styled.div`
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    @media (min-width: 375px) {
        width: 220px;
        border-right: 1px solid ${themeGet("colors.border")};
    }
    ${device.medium} {
        left: 0;
        opacity: 1;
        visibility: visible;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${tinycolor(themeGet("colors.gray900")(props))
                .darken(5)
                .toString()};
        `}
`;

export const StyledBody = styled.div`
    position: relative;
    height: 100%;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            .nav-link {
                color: ${themeGet("colors.gray500")};

                &:hover,
                &:focus {
                    background-color: ${themeGet("colors.gray900")};
                    color: #fff;
                }

                &.active {
                    background-color: ${tinycolor(
                        themeGet("colors.gray900")(props)
                    )
                        .lighten(2)
                        .toString()};
                }
            }
        `}
`;
