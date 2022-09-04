import styled, { css, themeGet } from "@doar/shared/styled";
import { Dropdown } from "@doar/components";

export const StyledWrap = styled(({ ...rest }) => <Dropdown {...rest} />)`
    .dropdown {
        &-toggle {
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 20px;
            padding-right: 15px;
            position: relative;
            z-index: 5;
            width: 100%;
        }
        &-menu {
            box-shadow: none;
            width: 100%;
            max-width: 255px;
            border-width: 0 0 1px 1px;
            border-color: ${themeGet("colors.border")};
            padding: 10px;
            margin: 60px -5px 0 -1px;
            border-radius: 0;
            transform: none !important;
            &:before {
                content: "";
                position: absolute;
                top: -10px;
                right: 15px;
                border-bottom: 10px solid rgba(192, 204, 218, 0.53);
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
            }
            &:after {
                content: "";
                position: absolute;
                top: -8.5px;
                right: 16px;
                border-bottom: 9px solid #fff;
                border-left: 9px solid transparent;
                border-right: 9px solid transparent;
            }
            @media (min-width: 480px) {
                border-width: 0 0 1px;
                width: 100%;
                max-width: none;
                margin: 0;
            }
        }
        &-item {
            display: flex;
            align-items: center;
            padding: 4px 10px;
            border-radius: 0.25rem;
            svg {
                width: 16px;
                margin-right: 10px;
            }
        }
        &-divider {
            margin: 5px 10px;
        }
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            .dropdown {
                &-toggle {
                    & > span {
                        color: ${themeGet("colors.gray800")};
                    }
                    &:hover,
                    &:focus {
                        > span {
                            color: ${themeGet("colors.gray300")};
                        }
                    }
                }
                &-menu {
                    background-color: ${themeGet("colors.darkdarken2")};

                    &::before {
                        border-bottom-color: rgba(255, 255, 255, 0.08);
                    }
                    &::after {
                        border-bottom-color: ${themeGet("colors.darkdarken2")};
                    }
                }
                &-item {
                    color: ${themeGet("colors.gray500")};
                    &:hover,
                    &:focus {
                        color: #fff;
                        background-color: ${themeGet("colors.darklighten2")};
                    }
                }
            }
        `}
`;

StyledWrap.displayName = "Dropdown";

export const StyledMedia = styled.div`
    display: flex;
    align-items: center;
`;
