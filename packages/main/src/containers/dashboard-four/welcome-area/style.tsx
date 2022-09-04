import styled, { device } from "@doar/shared/styled";
import { Button } from "@doar/components";

export const StyledWelcomeArea = styled.div`
    margin-bottom: 20px;
    ${device.medium} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ${device.large} {
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
    font-size: 10px;
    line-height: 1.773;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: 600;
    letter-spacing: 0.5px;
    ${device.small} {
        font-size: 11px;
        padding-left: 15px;
        padding-right: 15px;
    }
`;
