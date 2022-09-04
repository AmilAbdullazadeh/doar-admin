import styled, { device } from "@doar/shared/styled";
import { ModalClose } from "@doar/components";

export const StyledClose = styled(({ ...rest }) => <ModalClose {...rest} />)`
    position: absolute;
    top: 15px;
    right: 20px;
`;

export const StyledTitle = styled.h5`
    font-size: 18px;
    margin-bottom: 30px;
    ${device.small} {
        font-size: 20px;
    }
`;
