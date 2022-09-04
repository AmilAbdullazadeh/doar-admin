import styled, { css, themeGet } from "@doar/shared/styled";
import { Media } from "@doar/components";

export const StyledWrap = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border-top: 1px solid ${themeGet("colors.border")};
    flex: 1 1 auto;
`;

export const StyledList = styled.div``;

interface IProps {
    $active: boolean;
}

export const StyledItem = styled(({ ...rest }) => <Media {...rest} />)<IProps>`
    padding: 8px 10px;
    color: ${themeGet("colors.text2")};
    border-radius: 0.25rem;
    cursor: pointer;
    align-items: center;
    &:hover,
    &:focus {
        background-color: ${themeGet("colors.whisper")};
    }
    ${({ $active }) =>
        !!$active &&
        css`
            background-color: ${themeGet("colors.light")};
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            .avatar:after {
                box-shadow: 0 0 0 2px ${themeGet("colors.gray900")};
            }
            &:hover {
                background-color: ${themeGet("colors.gray900")};
                .avatar:after {
                    box-shadow: 0 0 0 2px ${themeGet("colors.gray900")};
                }
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        !!props.$active &&
        css`
            background-color: ${themeGet("colors.gray900")};
            .avatar::after {
                box-shadow: 0 0 0 2px ${themeGet("colors.gray900")};
            }
        `}
`;
