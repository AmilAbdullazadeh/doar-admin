import styled, { themeGet, css } from "@doar/shared/styled";
import { Media } from "@doar/components";

export const StyledMedia = styled(({ ...rest }) => <Media {...rest} />)`
    padding: 15px 20px;
    background-color: ${themeGet("colors.lilac")};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:not(:first-of-type) {
        margin-top: -1px;
        border-top: 1px solid ${themeGet("colors.light")};
    }
    &.unread {
        background-color: #fff;
    }
    &:hover,
    &:focus {
        background-color: ${themeGet("colors.zircon")};
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: transparent;
            &:hover,
            &:focus {
                background-color: ${themeGet("colors.darkdarken2")};
            }
            + .media {
                border-top-color: ${themeGet("colors.gray900")};
            }
            &.unread {
                background-color: ${themeGet("colors.gray900")};
                &:hover,
                &:focus {
                    background-color: ${themeGet("colors.gray900")};
                }
            }
        `}
`;

export const StyledTop = styled.div`
    color: ${themeGet("colors.text3")};
    margin-bottom: 2px;
    align-items: center;
    justify-content: space-between;
    display: flex;
`;
