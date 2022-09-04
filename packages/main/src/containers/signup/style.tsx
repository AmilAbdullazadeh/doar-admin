import styled, { device } from "@doar/shared/styled";
import { Media, MediaBody } from "@doar/components";

export const StyledMedia = styled(({ ...rest }) => <Media {...rest} />)`
    height: 100%;
    align-items: stretch;
    justify-content: center;
`;

export const StyledMediaBody = styled(({ ...rest }) => <MediaBody {...rest} />)`
    display: none;
    ${device.large} {
        display: flex;
        position: relative;
        align-items: center;
        padding-left: 50px;
        padding-right: 50px;
    }
    ${device.xlarge} {
        padding-left: 60px;
        padding-right: 60px;
    }
`;

export const StyledImage = styled.div``;

export const StyledImgText = styled.div`
    font-size: 12px;
    text-align: center;
    right: 0px;
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
        margin-right: 50px;
    }
    ${device.xlarge} {
        margin-right: 60px;
    }
`;
