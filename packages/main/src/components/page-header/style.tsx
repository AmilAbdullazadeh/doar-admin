import styled, { device } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    ${device.small} {
        justify-content: space-between;
        align-items: center;
        display: flex;
    }
`;
