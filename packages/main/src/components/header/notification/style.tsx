/* eslint-disable react/react-in-jsx-scope */
import styled, { themeGet, css, tinycolor } from "@doar/shared/styled";
import { MediaBody } from "@doar/components";

export const StyledMediaBody = styled(({ ...rest }) => <MediaBody {...rest} />)`
    margin-left: 15px;
    font-size: 13px;
`;

export const StyledStrong = styled.strong`
    font-weight: 500;
    color: ${themeGet("colors.text2")};
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.white")};
        `}
`;

export const StyledText = styled.p`
    margin-bottom: 2px;
    color: ${(props) =>
        props &&
        css`${tinycolor(props.theme.colors.text)
            .setAlpha(0.85)
            .toRgbString()}}`};
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray500")};
        `}
`;

export const StyledSpan = styled.span`
    color: ${themeGet("colors.text3")};
    font-size: 11px;
    font-family: ${themeGet("fonts.interUi")};
`;
