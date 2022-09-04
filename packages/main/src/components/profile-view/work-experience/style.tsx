import styled, { themeGet } from "@doar/shared/styled";

export const StyledTime = styled.span`
    font-size: 13px;
    color: ${themeGet("colors.text3")};
    display: block;
`;

export const StyledIcon = styled.div`
    width: 80px;
    height: 80px;
    background-color: ${themeGet("colors.text3")};
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: ${themeGet("radii.rounded")};
    svg {
        color: rgba(255, 255, 255, 0.7);
    }
`;

export const StyledName = styled.span`
    font-weight: 500;
    color: ${themeGet("colors.text1")};
`;

export const StyledList = styled.ul`
    font-size: 13px;
    margin: 0px;
    padding-left: 10px;
    margin-top: 20px;
    list-style: disc;
`;
