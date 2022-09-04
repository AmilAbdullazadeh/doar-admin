import styled, { themeGet } from "@doar/shared/styled";

export const StyledName = styled.h5`
    letter-spacing: -0.5px;
    margin-bottom: 2px;
`;

export const StyledUserName = styled.p`
    color: ${themeGet("colors.text3")};
    margin-bottom: 25px;
`;

export const StyledBtnWrap = styled.div`
    margin-bottom: 25px;
    display: flex;
    & > * {
        flex: 1 1 auto;
    }
`;

export const StyledDesc = styled.p`
    font-size: 13px;
    color: ${themeGet("colors.text2")};
    margin-bottom: 25px;
`;

export const StyledBottom = styled.div`
    display: flex;
`;

export const StyledSkillset = styled.div`
    flex: 1 1 auto;
`;

export const StyledSkillNumb = styled.h4`
    font-size: 20px;
    font-family: ${themeGet("fonts.interUi")};
    letter-spacing: -1px;
    margin-bottom: 3px;
`;

export const StyledSkillLabel = styled.p`
    display: block;
    margin-bottom: 0;
    text-transform: uppercase;
    color: ${themeGet("colors.text3")};
    font-size: 10px;
    font-weight: 500;
    font-family: ${themeGet("fonts.interUi")};
    letter-spacing: 0.5px;
`;
