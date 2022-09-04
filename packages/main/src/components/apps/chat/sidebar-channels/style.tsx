import styled, { css, device, themeGet } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    flex: 1 1 auto;
`;

export const StyledHeader = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledBtn = styled.button`
    color: ${themeGet("colors.text3")};
    background: transparent;
    padding: 0;
    border: none;
`;

export const StyledNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 20px;
`;

interface ILinkProps {
    $active?: boolean;
}

export const StyledLink = styled(({ ...rest }) => (
    <button type="button" {...rest} />
))<ILinkProps>`
    display: flex;
    align-items: center;
    position: relative;
    padding: 5px 10px;
    font-weight: 500;
    color: ${themeGet("colors.text2")};
    border-radius: 0.25rem;
    background-color: transparent;
    border: none;
    &:not(:first-of-type) {
        margin-top: 2px;
    }
    &:hover,
    &:focus {
        background-color: ${themeGet("colors.whisper")};
    }
    ${device.large} {
        ${({ $active }) =>
            !!$active &&
            css`
                color: ${themeGet("colors.primary")};
                background-color: ${themeGet("colors.catskill")};
            `}
        ${(props) =>
            props.theme.name === "dark" &&
            !!props.$active &&
            css`
                background-color: ${themeGet("colors.darklighten2")};
            `}
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray500")};
            &:hover,
            &:focus {
                background-color: ${themeGet("colors.gray900")};
                color: #fff;
            }
        `}
`;
