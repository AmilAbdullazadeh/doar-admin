import styled, { device, themeGet } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;

export const StyledImg = styled.div`
    margin-bottom: 15px;
    width: 70%;
    ${device.small} {
        width: 250px;
    }
    ${device.large} {
        width: 300px;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 24px;
    ${device.small} {
        font-size: 32px;
    }
    ${device.large} {
        font-size: 36px;
    }
    ${device.xlarge} {
        margin-bottom: 5px;
    }
`;

export const StyledSubTitle = styled.h5`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
    ${device.small} {
        font-size: 18px;
    }
    ${device.large} {
        font-size: 20px;
    }
`;

export const StyledDesc = styled.p`
    color: ${themeGet("colors.text3")};
    margin-bottom: 30px;
`;

export const StyledResetForm = styled.div`
    margin-bottom: 40px;
    display: flex;
`;

export const StyledNote = styled.span`
    color: ${themeGet("colors.text3")};
    font-size: 12px;
`;
