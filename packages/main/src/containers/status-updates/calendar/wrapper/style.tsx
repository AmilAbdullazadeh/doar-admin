import styled, { device } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    position: fixed;
    top: 55px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    ${device.large} {
        top: 60px;
    }
`;
