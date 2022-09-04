import styled, { device, themeGet } from "@doar/shared/styled";

export const StyledLabel = styled.div`
    margin-left: 10px;
    padding-left: 25px;
    padding-top: 25px;
    padding-bottom: 25px;
    border-left: 1px solid ${themeGet("colors.border")};
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    position: relative;
    ${device.small} {
        margin-left: 120px;
    }
    ${device.medium} {
        margin-left: 150px;
    }
    &:before {
        content: "";
        position: absolute;
        top: 29px;
        left: -6px;
        background-color: ${themeGet("colors.dark")};
        width: 11px;
        height: 11px;
        border-radius: 100%;
    }
    &:first-of-type {
        padding-top: 0;
        &:before {
            top: 4px;
        }
    }
`;
