import styled, { device, themeGet } from "@doar/shared/styled";

export const StyleBody = styled.div`
    flex: 1;
    padding-left: 25px;
    border-left: 1px solid ${themeGet("colors.border")};
    position: relative;
    margin-left: 10px;
    ${device.small} {
        margin-left: 0;
    }
    &:before {
        content: "";
        position: absolute;
        top: 4px;
        left: -6px;
        background-color: #fff;
        width: 7px;
        height: 7px;
        border: 2px solid ${themeGet("colors.primary")};
        border-radius: 100%;
    }
    h6 {
        line-height: 1.5;
    }
`;
