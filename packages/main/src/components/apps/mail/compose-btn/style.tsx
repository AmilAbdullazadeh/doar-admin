import styled, { themeGet } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    padding: 20px;
    button {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-family: ${themeGet("fonts.interUi")};
        font-weight: 500;
    }
`;
