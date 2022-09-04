import styled, { device, themeGet, tinycolor, css } from "@doar/shared/styled";

export const StyledGroup = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    left: 100vw;
    bottom: 0;
    transition: all 0.3s;
    @media (min-width: 375px) {
        left: 220px;
    }
    ${device.medium} {
        width: auto;
        right: 0;
        left: 220px;
    }
    ${device.xlarge} {
        width: 320px;
        border-right: 1px solid ${themeGet("colors.border")};
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${tinycolor(themeGet("colors.gray900")(props))
                .darken(5)
                .toString()};
        `}
`;

export const StyledHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 55px;
    background-color: #fff;
    border-bottom: 1px solid ${themeGet("colors.border")};
    display: flex;
    align-items: center;
    padding: 0 20px;
    .search {
        color: ${themeGet("colors.text3")};
        align-self: center;
        width: 18px;
        stroke-width: 2.8px;
        margin-right: 10px;
        margin-top: -2px;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${tinycolor(themeGet("colors.gray900")(props))
                .darken(3)
                .toString()};
        `}
`;

export const StyledBody = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
`;

export const StyledTopDiv = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    align-items: center;
    justify-content: space-between;
    display: flex;
`;

export const StyledLabel = styled.h6`
    display: block;
    padding: 6px 20px;
    background-color: ${(props) =>
        !!props.theme &&
        css`
            ${tinycolor(themeGet("colors.light")(props))
                .setAlpha(0.8)
                .toRgbString()}
        `};
    text-transform: uppercase;
    font-size: 10px;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 500;
    letter-spacing: 0.5px;
    color: ${themeGet("colors.text3")};
    margin: 1px 0;
    &:first-of-type {
        margin-top: 0;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${tinycolor(themeGet("colors.gray900")(props))
                .darken(7)
                .toString()};
        `}
`;

export const StyledList = styled.div``;

export const StyledReadMore = styled.div`
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 1px;
    button {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-weight: 500;
        min-height: inherit;
        border-width: 0;
    }
`;
