import styled, { device } from "@doar/shared/styled";
import { Button } from "@doar/components";

export const StyledWelcomeArea = styled.div`
    margin-bottom: 10px;
    ${device.medium} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ${device.large} {
        margin-bottom: 25px;
    }
    ${device.xlarge} {
        margin-bottom: 30px;
    }
`;

export const StyledWelcomeLeft = styled.div``;

export const StyledWelcomeRight = styled.div`
    margin-top: 10px;
    ${device.medium} {
        margin: 0;
    }
`;

export const StyledButton = styled((props) => <Button {...props} />)`
    text-transform: uppercase;
    font-size: 11px;
    line-height: 1.773;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
    ${device.small} {
        padding-left: 20px;
        padding-right: 20px;
    }
    &.btn-icon {
        padding-left: 8px;
        padding-right: 8px;
    }
`;
