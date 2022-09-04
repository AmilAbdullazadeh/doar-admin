import styled, { device, themeGet } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    ${device.small} {
        width: 450px;
    }
`;

export const StyledImg = styled.div`
    margin-bottom: 15px;
    width: 80%;
    ${device.small} {
        width: 300px;
    }
`;

export const StyledTitle = styled.h4`
    font-size: 20px;
    ${device.small} {
        font-size: 24px;
    }
`;

export const StyledDesc = styled.p`
    color: ${themeGet("colors.text3")};
    margin-bottom: 40px;
`;

export const StyledResetForm = styled.div`
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    ${device.small} {
        flex-direction: row;
    }
    input {
        flex: 1 0 auto;
    }
`;

export const StyledNote = styled.span`
    color: ${themeGet("colors.text3")};
    font-size: 12px;
`;
