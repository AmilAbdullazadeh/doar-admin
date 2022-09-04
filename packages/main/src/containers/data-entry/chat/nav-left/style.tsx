import styled, { css, themeGet } from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledNavLeft = styled.div<{ $sidebar?: boolean }>`
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    border-right: 1px solid ${themeGet("colors.border")};
    width: 60px;
    padding: 15px 10px;
    transition: all 0.3s;
    ${({ $sidebar }) =>
        $sidebar &&
        css`
            @media (max-width: 479px) {
                transform: translateX(-100vw);
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darkdarken3")};
        `}
`;

export const StyledNav = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

interface ILinkProps {
    $active?: boolean;
}

export const StyledNavLink = styled(({ ...rest }) => (
    <Anchor {...rest} />
))<ILinkProps>`
    padding: 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeGet("colors.text2")};
    border-radius: 0.25rem;
    transition: all 0.2s ease-in-out;
    &:not(:first-of-type) {
        margin-top: 10px;
    }
    svg {
        width: 20px;
        height: 20px;
        fill: rgba(27, 46, 75, 0.1);
    }
    ${({ $active }) =>
        !!$active &&
        css`
            color: ${themeGet("colors.primary")};
            svg {
                fill: rgba(1, 104, 250, 0.2);
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        !props.$active &&
        css`
            color: ${themeGet("colors.gray500")};
            &:hover,
            &:focus {
                color: #fff;
            }
        `}
`;
