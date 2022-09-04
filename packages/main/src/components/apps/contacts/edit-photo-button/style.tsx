import styled, { themeGet } from "@doar/shared/styled";

export const StyledEditPhoto = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    background-color: ${themeGet("colors.light")};
    color: ${themeGet("colors.text3")};
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    box-shadow: 0 0 0 3px #fff;
    svg {
        width: 12px;
        stroke-width: 3px;
    }
`;
