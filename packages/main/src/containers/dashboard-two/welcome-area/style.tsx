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
    display: flex;
    flex-wrap: wrap;
`;

export const StyledButton = styled((props) => <Button {...props} />)`
    text-transform: uppercase;
    font-size: 11px;
    line-height: 1.773;
    font-weight: 500;
    letter-spacing: 0.5px;
    max-width: 48%;
    flex-basis: 48%;
    padding-left: 15px;
    padding-right: 15px;
    ${device.small} {
        max-width: auto;
        flex-basis: auto;
    }
`;
