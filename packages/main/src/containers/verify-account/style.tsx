import styled, { device, themeGet } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
`;

export const StyledImg = styled.div`
    margin-bottom: 30px;
    width: 150px;
    ${device.small} {
        width: 250px;
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

export const StyledBtnWrap = styled.div`
    margin-bottom: 40px;
    font-size: 13px;
    ${device.large} {
        font-size: 14px;
    }
`;

export const StyledNote = styled.span`
    color: ${themeGet("colors.text3")};
    font-size: 12px;
`;
