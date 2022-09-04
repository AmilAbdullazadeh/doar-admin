import styled, { device, themeGet, css } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    background-color: #fff;
    padding-top: 0px;
    padding: 20px;
    ${device.large} {
        padding: 25px;
    }
    ${device.xlarge} {
        padding: 30px;
    }
    .ql {
        &-container {
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            border-color: ${themeGet("colors.border")} !important;
            height: 100px;
            font-size: 13px;
            ${device.large} {
                font-size: 14px;
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
            background-color: ${themeGet("colors.darkdarken5")};
            .ql-editor {
                color: ${themeGet("colors.gray500")};
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
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
    display: flex;
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
