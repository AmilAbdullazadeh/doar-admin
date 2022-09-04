import styled, { device } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    ${device.small} {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const StyledBtnWrap = styled.div`
    margin-top: 20px;
    ${device.small} {
        margin-top: 0;
    }
`;
