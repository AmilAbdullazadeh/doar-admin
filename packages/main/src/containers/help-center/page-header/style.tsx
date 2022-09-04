import styled, { device } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    ${device.small} {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
