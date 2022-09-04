import styled, { space, SpaceProps, css, themeGet } from "@doar/shared/styled";

export const StyledInputGroup = styled(({ mb, ...rest }) => (
    <div {...rest} />
))<SpaceProps>`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    .form-control,
    .custom-select {
        &:not(:first-child) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        &:not(:last-child) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        position: relative;
        flex: 1 1 0%;
        min-width: 0;
        margin-bottom: 0;
    }
    .form-control {
        & + .form-control {
            margin-left: -1px;
        }
    }
    ${space};
`;

interface IWrap extends SpaceProps {
    $dir?: "append" | "prepend";
}

export const StyledInputGroupWrap = styled(({ mb, ...rest }) => (
    <div {...rest} />
))<IWrap>`
    display: flex;
    ${({ $dir }) =>
        $dir === "append" &&
        css`
            margin-left: -1px;
            .input-group-text,
            .btn {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
            &:last-child {
                .input-group-text {
                    &:not(:last-child) {
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;
                    }
                    & + .input-group-text {
                        margin-left: -1px;
                    }
                }
            }
        `}
    ${({ $dir }) =>
        $dir === "prepend" &&
        css`
            margin-right: -1px;
            .input-group-text,
            .btn {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
            &:first-child {
                .input-group-text {
                    & + .input-group-text {
                        margin-left: -1px;
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                    }
                }
            }
        `}
    ${space};
`;

export const StyledInputGroupText = styled.div`
    display: flex;
    align-items: center;
    padding: 0.46875rem 0.625rem;
    margin-bottom: 0;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${themeGet("colors.gray700")};
    text-align: center;
    white-space: nowrap;
    background-color: ${themeGet("colors.whisper")};
    border: 1px solid ${themeGet("colors.text4")};
    border-radius: 0.25rem;
    font-size: inherit;
`;
