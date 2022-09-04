import styled, { device, themeGet } from "@doar/shared/styled";

export const StyledWrapper = styled.div`
    background-color: ${themeGet("colors.lilac")};
    position: fixed;
    top: 55px;
    bottom: 0;
    left: 0;
    right: 0;
    ${device.large} {
        top: 60px;
    }
`;
