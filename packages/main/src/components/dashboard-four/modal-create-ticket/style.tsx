import styled, {
    device,
    space,
    SpaceProps,
    themeGet,
} from "@doar/shared/styled";
import { ModalClose } from "@doar/components";

export const StyledTitle = styled.h5`
    margin-bottom: 20px;
    font-size: 18px;
    ${device.small} {
        font-size: 20px;
        margin-bottom: 30px;
    }
`;

export const StyledClose = styled(({ ...rest }) => <ModalClose {...rest} />)`
    position: absolute;
    top: 20px;
    right: 20px;
`;

export const StyledGroup = styled(({ ...rest }) => (
    <div {...rest} />
))<SpaceProps>`
    margin-bottom: 20px;
    select {
        text-transform: capitalize;
    }
    ${space}
`;

export const StyledLabel = styled.label`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: ${themeGet("colors.interUi")};
    font-weight: 500;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0.5rem;
`;
