import styled, { device } from "@doar/shared/styled";
import { Media, MediaBody } from "@doar/components";

export const StyledMedia = styled(({ ...rest }) => <Media {...rest} />)`
    position: relative;
    height: 100%;
    align-items: stretch;
    justify-content: center;
`;

export const StyledMediaBody = styled(({ ...rest }) => <MediaBody {...rest} />)`
    align-items: center;
    display: none;
    ${device.large} {
        display: flex;
    }
`;

export const StyledImage = styled.div`
    width: 600px;
`;

export const StyledImgText = styled.div`
    font-size: 12px;
    text-align: center;
    left: 0px;
    bottom: -10px;
    position: absolute;
`;

export const StyledSignin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 340px;
    ${device.large} {
        margin-left: 50px;
    }
    ${device.xlarge} {
        margin-left: 60px;
        width: 340px;
    }
`;
