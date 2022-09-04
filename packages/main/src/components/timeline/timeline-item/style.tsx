import styled, { device, themeGet } from "@doar/shared/styled";

export const StyledItem = styled.div`
    ${device.small} {
        display: flex;
        align-items: flex-start;
    }
    & + .timeline-item {
        margin-top: 20px;
        position: relative;
        &:before {
            content: "";
            position: absolute;
            top: -20px;
            left: 10px;
            width: 1px;
            height: 20px;
            background-color: ${themeGet("colors.border")};
            ${device.small} {
                left: 120px;
            }
            ${device.medium} {
                left: 150px;
            }
        }
    }
`;
