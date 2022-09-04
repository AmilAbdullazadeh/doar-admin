import styled, { device, themeGet } from "@doar/shared/styled";

export const StyledTime = styled.div`
    flex-shrink: 0;
    padding-left: 25px;
    margin-left: 10px;
    border-left: 1px solid ${themeGet("colors.border")};
    ${device.small} {
        width: 120px;
        text-align: right;
        padding-right: 25px;
        padding-left: 0;
        margin-left: 0;
        border-left: 0;
    }
    ${device.medium} {
        width: 150px;
    }
`;
