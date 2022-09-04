import styled, { device } from "@doar/shared/styled";
import { CardFooter } from "@doar/components";

export const StyledFooter = styled(({ ...rest }) => <CardFooter {...rest} />)`
    background-color: transparent;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    ${device.small} {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 15px;
        padding-bottom: 15px;
    }
`;
