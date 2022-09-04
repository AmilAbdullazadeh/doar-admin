import styled, { themeGet, device, css } from "@doar/shared/styled";
import { Input, Button } from "@doar/components";

export const StyledForm = styled.form`
    display: none;
    ${device.small} {
        margin-right: 10px;
        flex: 1;
        display: flex;
        align-items: center;
        margin-left: 15px;
        height: 34px;
    }
    input {
        &:hover,
        &:focus,
        &:active {
            box-shadow: none;
            border-color: ${themeGet("colors.primary")};
            & + button {
                border-color: ${themeGet("colors.primary")};
            }
            ${(props) =>
                props.theme.name === "dark" &&
                css`
                    border-color: ${themeGet("colors.gray800")};
                    & + button {
                        border-color: ${themeGet("colors.gray800")};
                    }
                `}
        }
    }
`;

export const StyledInput = styled(({ ...rest }) => <Input {...rest} />)`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-width: 0;
    font-size: inherit;
    width: 150px;
    height: 100%;
    min-height: 0;
    background-color: transparent;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            border-color: rgba(255, 255, 255, 0.08);
        `}
`;

export const StyledButton = styled(({ ...rest }) => <Button {...rest} />)`
    display: flex;
    align-items: center;
    border: 1px solid ${themeGet("colors.text4")};
    border-left-width: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: ${themeGet("colors.text3")};
    min-height: 0;
    padding: 0 10px;
    height: 100%;
    svg {
        width: 18px;
        height: 18px;
        stroke-width: 2.5px;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            border-color: rgba(255, 255, 255, 0.08);
            &:hover,
            &:focus {
                color: #fff;
            }
        `}
`;
