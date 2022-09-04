import styled, { device, themeGet } from "@doar/shared/styled";
import { ModalClose, ModalFooter } from "@doar/components";

export const StyledClose = styled(({ ...rest }) => <ModalClose {...rest} />)`
    position: absolute;
    top: 20px;
    right: 20px;
`;

export const StyledTitle = styled.h6`
    margin-bottom: 5px;
    font-size: 18px;
    ${device.small} {
        font-size: 20px;
    }
`;

export const StyledFooter = styled(({ ...rest }) => <ModalFooter {...rest} />)`
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 0px;
    border-top: 0;
`;

export const StyledText = styled.p`
    color: ${themeGet("colors.text3")};
    margin-bottom: 20px;
`;
