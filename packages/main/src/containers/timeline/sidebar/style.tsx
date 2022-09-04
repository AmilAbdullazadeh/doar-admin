import styled, { device } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    margin-top: 40px;
    width: 300px;
    ${device.large} {
        margin-top: 0px;
        padding-left: 25px;
        width: 260px;
    }
`;

export const WidgetWrap = styled.div`
    &:not(:last-of-type) {
        margin-bottom: 45px;
    }
`;
