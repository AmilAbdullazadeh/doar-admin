import styled, { device, themeGet, css } from "@doar/shared/styled";
import { ModalHeader, ModalBody } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <ModalHeader {...rest} />)`
    background-color: ${themeGet("colors.gray900")};
    padding: 20px;
    color: #fff;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    .nav-link {
        color: rgba(255, 255, 255, 0.5);
    }
`;

export const StyledTitle = styled.h6`
    margin-bottom: 0;
    font-weight: 400;
    position: relative;
    top: 1px;
    color: #fff;
`;

export const StyledBody = styled(({ ...rest }) => <ModalBody {...rest} />)`
    transition: all 0.3s;
    ${device.large} {
        padding: 30px;
    }
    .form-control {
        &:hover,
        &:focus {
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            border-width: 0;
            background-color: ${themeGet("colors.darkdarken3")};
            box-shadow: none;
            color: ${themeGet("colors.gray500")};
            .form-control {
                background-color: transparent;
                color: ${themeGet("colors.gray300")};
                &:placeholder {
                    color: ${themeGet("colors.gray700")};
                }
            }
        `}
`;

export const StyledWrap = styled.div`
    background-color: #fff;
    margin-top: 15px;
    .ql {
        &-container {
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            border-color: ${themeGet("colors.border")} !important;
            height: 80px;
            ${device.small} {
                height: 150px;
            }
        }
        &-editor {
            padding: 20px;
            color: ${themeGet("colors.text")};
        }
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: transparent;
            .ql-editor {
                color: ${themeGet("colors.gray500")};
                &.ql-blank {
                    &:before {
                        color: ${themeGet("colors.gray500")};
                        font-style: normal;
                        font-size: 18px;
                    }
                }
            }
            .ql-snow.ql-toolbar button {
                .ql-stroke {
                    stroke: ${themeGet("colors.gray700")};
                }

                &:hover,
                &:focus {
                    background-color: ${themeGet("colors.gray900")};
                    .ql-stroke {
                        stroke: #fff;
                    }
                }
            }
        `}
`;

export const StyledToolbarWrap = styled.div`
    margin-top: 25px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
`;

export const StyledToolbar = styled.div`
    padding: 0px !important;
    border: 0 !important;
    .ql {
        &-toolbar {
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
        }
        &-formats {
            display: inline-flex;
        }
    }
`;

export const StyledBtnWrap = styled.div`
    margin-top: 15px;
    ${device.small} {
        margin-top: 0px;
    }
    button {
        font-size: 13px;
    }
`;
