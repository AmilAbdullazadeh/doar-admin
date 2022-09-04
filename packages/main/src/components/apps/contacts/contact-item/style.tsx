import styled, { css, themeGet } from "@doar/shared/styled";
import { Media } from "@doar/components";

interface IProps {
    $active?: string;
}

export const StyledMedia = styled(({ ...rest }) => <Media {...rest} />)<IProps>`
    color: ${themeGet("colors.text2")};
    padding: 10px;
    align-items: flex-end;
    border-radius: 0.25rem;
    &:not(:first-of-type) {
        margin-top: 2px;
    }
    &:hover,
    &:focus {
        background-color: ${themeGet("colors.whisper")};
        cursor: default;
        nav {
            display: flex;
        }
    }
    ${({ $active }) =>
        $active === true &&
        css`
            @media (min-width: 480px) {
                background-color: ${themeGet("colors.catskill")};
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            &:hover,
            &:focus {
                background-color: ${themeGet("colors.gray900")};
                color: #fff;

                .avatar::after {
                    box-shadow: 0 0 0 2px ${themeGet("colors.gray900")};
                }
            }
        `}

    ${(props) =>
        props.theme.name === "dark" &&
        !!props.$active &&
        css`
            @media (min-width: 480px) {
                background-color: ${themeGet("colors.darklighten2")};
            }
            background-color: ${themeGet("colors.darklighten2")};
            }
        `}
`;

export const StyledName = styled.h6`
    font-size: 13px;
    margin-bottom: 3px;
`;

export const StyledSpan = styled.span`
    color: ${themeGet("colors.text3")};
    display: block;
    line-height: 1.02;
    font-size: 12px;
`;

export const StyledNav = styled.nav`
    display: none;
    align-items: center;
    align-self: center;
`;

export const StyledNavBtn = styled.button`
    display: block;
    color: ${themeGet("colors.text3")};
    padding: 0;
    background-color: transparent;
    border: none;
    &:not(:first-of-type) {
        margin-left: 5px;
    }
    &:hover,
    &:focus {
        color: ${themeGet("colors.text2")};
    }
    svg {
        width: 16px;
    }
`;
