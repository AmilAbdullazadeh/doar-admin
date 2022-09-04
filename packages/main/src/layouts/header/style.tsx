import styled, {
    device,
    themeGet,
    layout,
    space,
    css,
    tinycolor,
} from "@doar/shared/styled";
import { Button } from "@doar/components";

export const StyledHeader = styled.header`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    align-items: stretch;
    height: 55px;
    padding: 0;
    justify-content: flex-start;
    background-color: #fff;
    border-bottom: 1px solid ${themeGet("colors.border")};
    ${device.large} {
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }
    ${(props) =>
        props.theme.name === "cool" &&
        css`
            border-bottom-color: ${tinycolor(themeGet("colors.skinUi01")(props))
                .lighten(45)
                .toString()};
            box-shadow: 0 0 25px
                ${tinycolor(themeGet("colors.skinUi01")(props))
                    .setAlpha(0.1)
                    .toRgbString()};
        `};
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.gray900")};
            border-bottom-width: 0;
        `};
`;

export const StyledLogo = styled.div`
    padding-top: 0.33594rem;
    padding-bottom: 0.33594rem;
    margin-right: 1rem;
    font-size: 1.09375rem;
    line-height: inherit;
    white-space: nowrap;
    display: flex;
    align-items: center;
    padding-left: 15px;
    margin-right: 0;
    order: 1;
    ${device.large} {
        width: 240px;
        padding: 0 0 0 20px;
    }
`;

interface INavbar {
    $isOpen?: boolean;
}

export const StyledNavbarWrap = styled.div<INavbar>`
    order: 3;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 21, 32, 0.7);
    overflow: hidden;
    z-index: 1060;
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s;
    will-change: visibility, opacity;
    ${({ $isOpen }) =>
        $isOpen === true &&
        css`
            visibility: visible;
            opacity: 1;
        `}
    ${device.xlarge} {
        padding: 0 30px;
    }
    ${device.large} {
        width: auto;
        padding: 0 25px;
        position: relative;
        top: auto;
        left: auto;
        bottom: auto;
        overflow: visible;
        display: flex;
        justify-content: center;
        order: 2;
        transform: none;
        z-index: auto;
        flex: 1;
        visibility: visible;
        opacity: 1;
        background: transparent;
    }
`;

export const StyledNavbarMenu = styled.nav<INavbar>`
    width: 260px;
    height: 100%;
    background-color: #fff;
    transition: all 0.4s;
    will-change: transform;
    transform: translateX(-260px);
    z-index: 99999;
    position: relative;
    ${({ $isOpen }) =>
        $isOpen === true &&
        css`
            transform: translateX(0);
        `}
    ${device.large} {
        background-color: transparent;
        width: 100%;
        max-width: 780px;
        margin-top: -3px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: row;
        transform: translateX(0);
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darklighten5")};
            ${device.large} {
                background-color: transparent;
            }
        `}
`;

export const StyledNavbarHeader = styled.div`
    height: 55px;
    padding: 0 15px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${themeGet("colors.border")};
    ${device.large} {
        display: none;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.gray900")};
            border-bottom-width: 0;

            a:last-child {
                &:hover,
                &:focus {
                    color: ${themeGet("colors.white")};
                }
            }
        `}
`;

export const StyledNavbarBody = styled.div`
    padding: 25px 0;
    ${device.large} {
        padding: 0;
        width: 100%;
    }
`;

export const StyledNavbarTitle = styled.h6`
    font-size: 10px;
    font-weight: 600;
    font-family: ${themeGet("fonts.interUi")};
    letter-spacing: 0.7px;
    color: ${themeGet("colors.text3")};
    text-transform: uppercase;
    display: block;
    margin-bottom: 15px;
    padding-left: 20px;
    ${device.large} {
        display: none;
    }
`;

export const StyleNavbarRight = styled.div`
    padding: 0 15px;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    order: 2;
    ${device.xlarge} {
        width: 240px;
    }
    ${device.large} {
        order: 3;
        padding: 0 20px 0 0;
    }
`;

export const StyledNavbarElement = styled(({ mt, mb, ml, mr, ...props }) => (
    <div {...props} />
))`
    ${space};
    ${layout};
    .header-icon {
        width: 16px;
        height: 16px;
        stroke-width: 3px;
        color: ${themeGet("colors.text")};
        ${device.small} {
            width: 20px;
            height: 20px;
            stroke-width: 2.25px;
        }
        ${({ theme }) =>
            theme.name === "dark" &&
            css`
                color: ${themeGet("colors.gray300")};
                &:hover,
                &:focus {
                    color: ${themeGet("colors.white")};
                }
            `}
    }
`;

interface IMenuBtn {
    $hasSidebar?: boolean;
    $sidebarOpen?: boolean;
    $bodyOpen?: boolean;
}

export const StyledMenuBtn = styled(({ ...rest }) => (
    <Button {...rest} />
))<IMenuBtn>`
    margin-left: 18px;
    svg {
        color: ${themeGet("colors.text3")};
    }
    ${({ $hasSidebar }) =>
        $hasSidebar === true &&
        css`
            display: none;
        `}
    ${({ $sidebarOpen, $bodyOpen }) =>
        $sidebarOpen === true &&
        !$bodyOpen &&
        css`
            display: block;
        `}
	${({ $bodyOpen, $sidebarOpen }) =>
        $bodyOpen === true &&
        $sidebarOpen === true &&
        css`
            display: none;
        `}
	${device.large} {
        display: none;
    }
    ${({ theme }) =>
        theme.name === "dark" &&
        css`
            &:hover {
                color: ${themeGet("colors.white")};
            }
        `}
`;

export const StyledSidebarBtn = styled(({ ...rest }) => (
    <Button {...rest} />
))<IMenuBtn>`
    margin-left: 18px;
    svg {
        color: ${themeGet("colors.text3")};
    }
    ${device.small} {
        margin-left: 20px;
    }
    ${device.large} {
        display: none;
    }
    ${({ $sidebarOpen, $bodyOpen }) =>
        $sidebarOpen === true &&
        !$bodyOpen &&
        css`
            display: none;
        `}
    ${({ $bodyOpen, $sidebarOpen }) =>
        $bodyOpen === true &&
        $sidebarOpen === true &&
        css`
            display: block;
        `}
    ${({ theme }) =>
        theme.name === "dark" &&
        css`
            &:hover {
                color: ${themeGet("colors.white")};
            }
        `}
`;
