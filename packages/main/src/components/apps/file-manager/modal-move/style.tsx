import styled, { device, themeGet } from "@doar/shared/styled";
import { ModalClose } from "@doar/components";

export const StyledClose = styled(({ ...rest }) => <ModalClose {...rest} />)`
    position: absolute;
    top: 15px;
    right: 20px;
`;

export const StyledTitle = styled.h5`
    font-size: 18px;
    margin-bottom: 0;
    ${device.small} {
        font-size: 20px;
    }
`;

export const StyledText = styled.p`
    color: ${themeGet("colors.text3")};
    margin-bottom: 25px;
`;

export const StyledWrap = styled.div`
    padding: 10px;
    border: 1px solid ${themeGet("colors.border")};
    background-color: ${themeGet("colors.whisper")};
`;

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
`;
