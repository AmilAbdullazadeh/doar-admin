import styled, { css, themeGet } from "@doar/shared/styled";
import { Input } from "@doar/components";

export const StyledForm = styled.form`
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

export const StyldFile = styled.label`
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeGet("colors.text3")};
    border-right: 1px solid ${themeGet("colors.border")};
    cursor: pointer;
    &:hover,
    &:focus {
        color: ${themeGet("colors.text2")};
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray500")};
            &:hover,
            &:focus {
                color: #fff;
            }
        `}
`;

export const StyledInput = styled(({ ...rest }) => <Input {...rest} />)`
    font-size: inherit;
    border: 0;
    box-shadow: none !important;
    background-color: transparent;
    align-self: center;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray300")};
            &:placeholder {
                color: ${themeGet("colors.gray800")};
            }
        `}
`;

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    border-left: 1px solid ${themeGet("colors.border")};
    padding: 10px 20px;
    svg {
        width: 20px;
        color: ${themeGet("colors.text3")};
        &:hover {
            color: ${themeGet("colors.cornflower")};
        }
    }
`;

export const StyledImage = styled.label`
    padding: 2px 5px;
    border-radius: 0.25rem;
    cursor: pointer;
    line-height: 1;
`;

export const StyledBtn = styled.button`
    padding: 2px 5px;
    border-radius: 0.25rem;
    cursor: pointer;
    background: transparent;
    border: none;
    margin-left: 2px;
    line-height: 1;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray500")};
            &:hover,
            &:focus {
                color: #fff;
            }
        `}
`;
