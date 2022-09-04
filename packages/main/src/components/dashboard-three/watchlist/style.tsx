import styled, { themeGet, css, color, ColorProps } from "@doar/shared/styled";

export const StyledCrypto = styled.div`
    position: relative;
    padding: 20px 20px 15px;
`;

export const StyledIcon = styled.div<ColorProps>`
    width: 42px;
    height: 42px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    ${color};
`;

export const StyledTitle = styled.h6`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    margin-bottom: 5px;
`;

export const StyledDiv = styled.div`
    font-family: ${themeGet("fonts.rubik")};
    align-items: baseline;
    display: flex;
`;

export const StyledCoin = styled.h5`
    font-size: 20px;
    margin-bottom: 0px;
`;

interface IRate {
    $status: "up" | "down";
}

export const StyledRate = styled.p<IRate>`
    font-size: 11px;
    margin-left: 3px;
    margin-bottom: 0px;
    ${({ $status }) =>
        $status === "up" &&
        css`
            color: ${themeGet("colors.success")};
        `}
    ${({ $status }) =>
        $status === "down" &&
        css`
            color: ${themeGet("colors.danger")};
        `}
`;

export const StyledChart = styled.div`
    width: 100%;
    height: 80px;
    & > div {
        margin-left: -10px;
        margin-right: -10px;
    }
`;

export const CryptoFooter = styled.div`
    font-weight: 500;
    margin-top: 10px;
    line-height: 1;
`;

export const StyledLabel = styled.p`
    margin: 0;
    font-size: 9px;
    font-family: ${themeGet("fonts.interUi")};
    color: ${themeGet("colors.text3")};
    display: inline-block;
    span {
        font-weight: 600;
        color: ${themeGet("colors.text")};
    }
    &:last-child {
        margin-left: 10px;
    }
`;
