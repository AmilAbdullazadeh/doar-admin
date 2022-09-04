import styled, { device, css, themeGet, tinycolor } from "@doar/shared/styled";

export const StyledMain = styled.div`
    position: absolute;
    top: 0;
    left: 200vw;
    bottom: 0;
    width: 100vw;
    background-color: ${themeGet("colors.whisper")};
    ${device.xlarge} {
        left: 540px;
        width: auto;
        right: 0;
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
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 55px;
    border-bottom: 1px solid ${themeGet("colors.border")};
    padding: 0 20px;
    display: flex;
    align-items: center;
    z-index: 99;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${tinycolor(themeGet("colors.gray900")(props))
                .darken(3)
                .toString()};
        `}
`;

export const StyledBody = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: transparent;
            color: ${themeGet("colors.gray500")};
        `}
`;

export const StyledToggleBtn = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
    color: ${themeGet("colors.text2")};
    margin-right: 20px;
    display: none;
    ${device.large} {
        display: block;
    }
    ${device.xlarge} {
        display: none;
    }
`;
