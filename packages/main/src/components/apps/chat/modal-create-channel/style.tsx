import styled from "@doar/shared/styled";
import { ModalClose, ModalFooter } from "@doar/components";

export const StyledClose = styled(({ ...rest }) => <ModalClose {...rest} />)`
    font-weight: 300;
    font-size: 28px;
    line-height: 0.87;
    position: absolute;
    top: 15px;
    right: 15px;
`;

export const StyledTitle = styled.h6`
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const StyledFooter = styled(({ ...rest }) => <ModalFooter {...rest} />)`
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 0px;
    border-top: 0;
`;
