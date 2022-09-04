import styled, {
    device,
    color,
    ColorProps,
    themeGet,
    css,
} from "@doar/shared/styled";
import { ModalHeader } from "@doar/components";

export const StyledHeader = styled(({ bg, ...rest }) => (
    <ModalHeader {...rest} />
))<ColorProps>`
    position: relative;
    padding: 10px 15px 20px 20px;
    border-bottom-width: 0;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    ${color};
    ${device.small} {
        padding: 20px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

export const StyledTitle = styled.h6`
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 0;
    line-height: 1;
    order: 2;
    ${device.small} {
        margin-top: 0;
        order: 1;
    }
    ${device.large} {
        font-size: 20px;
    }
`;

export const StyledNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    align-items: center;
    align-self: flex-end;
    ${device.small} {
        align-self: auto;
        order: 2;
    }
`;

export const StyledNavBtn = styled.button`
    padding: 0;
    color: rgba(255, 255, 255, 0.75);
    line-height: 0;
    position: relative;
    transition: all 0.2s ease-in-out;
    border: 0;
    background-color: transparent;
    &:not(:first-of-type) {
        margin-left: 10px;
    }
    svg {
        width: 16px;
        ${device.small} {
            width: 20px;
            stroke-width: 2.5px;
        }
    }
`;

export const StyledLabel = styled.h6`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 500;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0.5rem;
`;

export const StyledDate = styled.p`
    color: ${themeGet("colors.gray900")};
    font-weight: 500;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray300")};
        `}
`;

export const StyledDesc = styled.p`
    margin-top: 5px;
    color: ${themeGet("colors.gray900")};
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray300")};
        `}
`;

export const StyledDescWrap = styled.div`
    margin-bottom: 40px;
`;

export const StyledDetails = styled.div``;

export const StyledForm = styled.div``;
