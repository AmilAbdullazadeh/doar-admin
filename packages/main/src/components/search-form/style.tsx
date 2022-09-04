import styled, { device, themeGet, css } from "@doar/shared/styled";

export const StyledForm = styled.form`
    display: flex;
    align-items: stretch;
    margin-top: 20px;
    ${device.small} {
        margin-top: 0;
    }
    input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right-width: 0;
        &:hover,
        &:focus,
        &:active {
            border-color: ${themeGet("colors.primary")};
            box-shadow: none;
            & + .btn {
                border-color: ${themeGet("colors.primary")};
            }
        }
    }
    .btn {
        display: flex;
        align-items: center;
        padding: 0 0.5rem;
        border: 1px solid ${themeGet("colors.text4")};
        border-left-width: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        color: ${themeGet("colors.text3")};
        ${(props) =>
            props.theme.name === "dark" &&
            css`
                background-color: ${themeGet("colors.gray800")};
            `}
    }
`;
