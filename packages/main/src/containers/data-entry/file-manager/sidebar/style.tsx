import styled, { device, css, themeGet } from "@doar/shared/styled";

interface ISidebar {
    $show: boolean;
}

export const StyledSidebar = styled.div<ISidebar>`
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -240px;
    width: 240px;
    border-right: 1px solid ${themeGet("colors.border")};
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    ${device.large} {
        left: 0;
        opacity: 1;
        visibility: visible;
    }
    @media (max-width: 991.98px) {
        ${({ $show }) =>
            $show &&
            css`
                left: 0;
                visibility: visible;
                opacity: 1;
            `}
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darkdarken5")};
        `}
`;

export const StyledHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 55px;
    border-bottom: 1px solid ${themeGet("colors.border")};
    display: flex;
    align-items: center;
    padding: 0 20px;
    z-index: 9;
    background: #fff;
    button {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 10px;
        font-family: ${themeGet("fonts.interUi")};
        letter-spacing: 0.5px;
    }
    .btn-white {
        font-weight: 700;
    }
    .dropdown {
        flex: 1 1 auto;
        &:last-child {
            margin-left: 10px;
        }
        &-menu {
            font-size: 13px;
        }
        &-item {
            display: flex;
            align-items: center;
            padding: 5px 10px;
            svg {
                width: 16px;
                height: 16px;
                margin-right: 10px;
            }
            span {
                display: block;
                position: relative;
                top: 1.5px;
            }
        }
        &-divider {
            margin: 10px 15px;
        }
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darkdarken3")};
            .dropdown {
                &-menu {
                    border-width: 0;
                    background-color: ${themeGet("colors.darklighten8")};
                }
                &-item {
                    color: ${themeGet("colors.gray300")};

                    &:hover,
                    &:focus {
                        background-color: ${themeGet("colors.darklighten3")};
                        color: #fff;
                    }
                }
            }
        `}
`;

export const StyledBody = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray500")};

            .nav-link {
                color: ${themeGet("colors.gray500")};
                &:hover,
                &:focus {
                    background-color: ${themeGet("colors.gray900")};
                    color: #fff;
                }
                &.active {
                    background-color: ${themeGet("colors.darklighten2")};
                }
            }
        `}
`;
