import styled, { device, themeGet, css } from "@doar/shared/styled";

const link3 = css`
    color: ${themeGet("colors.text3")};
    &:hover {
        color: ${themeGet("colors.text2")};
    }
`;

export const StyledWrap = styled.form`
    background-color: #fff;
    border-radius: ${themeGet("radii.rounded")};
    display: flex;
    justify-content: flex-end;
    border: 1px solid ${themeGet("colors.border")};
    height: 50px;
    margin-bottom: 20px;
    ${device.large} {
        margin-bottom: 25px;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.gray900")};
        `}
`;

export const StyledShare = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    margin-right: auto;
    align-items: center;
    display: flex;
    max-width: calc(100% - 150px);
    flex-basis: calc(100% - 150px);
`;

export const StyledStatusInput = styled.textarea`
    margin-left: 10px;
    background: transparent;
    padding: 0;
    border: none;
    padding-top: 11px;
`;

export const RightBtn = styled.div`
    max-width: 50px;
    flex-basis: 50px;
    border-left: 1px solid ${themeGet("colors.border")};
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const RightBtnLink = styled.a`
    ${link3}
    line-height: 1;
`;
