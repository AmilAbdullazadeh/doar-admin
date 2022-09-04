import styled, { css, themeGet, tinycolor } from "@doar/shared/styled";

interface IProps {
    $size?: "lg";
}

export const StyledLabel = styled.h6<IProps>`
    display: flex;
    align-items: center;
    color: ${themeGet("colors.text3")};
    font-size: 10px;
    font-weight: 500;
    font-family: ${themeGet("fonts.interUi")};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 15px -10px 10px;
    &:first-of-type {
        margin-top: 0;
    }
    &:before,
    &:after {
        content: "";
        display: block;
        height: 1px;
        background-color: ${(props) =>
            !!props.theme &&
            css`
                ${tinycolor(themeGet("colors.light")(props))
                    .setAlpha(0.7)
                    .toRgbString()}
            `};
    }
    &:before {
        width: 15px;
        margin-right: 5px;
        ${({ $size }) =>
            $size === "lg" &&
            css`
                width: 27px;
            `}
    }
    &:after {
        margin-left: 5px;
        flex: 1;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            &::before,
            &::after {
                background-color: ${themeGet("colors.darklighten2")};
            }
        `}
`;
