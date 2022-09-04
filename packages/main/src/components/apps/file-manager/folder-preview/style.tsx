import styled, { themeGet, css } from "@doar/shared/styled";
import { Media, MediaBody } from "@doar/components";

export const StyledMedia = styled(({ ...rest }) => <Media {...rest} />)`
    position: relative;
    border: 1px solid ${themeGet("colors.border")};
    padding: 10px 12px;
    background-color: #fff;
    border-radius: 0.25rem;
    transition: all 0.2s ease-in-out;
    & > svg {
        width: 42px;
        height: 42px;
        stroke-width: 1.5px;
        color: ${themeGet("colors.primary")};
        opacity: 0.7;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            border-width: 0;
            background-color: ${themeGet("colors.gray900")};
        `}
`;

export const StyledMediaBody = styled(({ ...rest }) => <MediaBody {...rest} />)`
    margin-top: 5px;
    margin-left: 10px;
    h6 {
        margin-bottom: 1px;
    }
    span {
        font-size: 12px;
        color: ${themeGet("colors.text3")};
        display: block;
    }
`;
