import styled, { device, css, themeGet } from "@doar/shared/styled";

interface IProps {
    $showSidebar: boolean;
}

export const StyledMain = styled.div<IProps>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s;
    ${device.large} {
        left: 240px;
    }
    @media (max-width: 991.98px) {
        ${({ $showSidebar }) =>
            $showSidebar &&
            css`
                transform: translateX(240px);
            `}
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darkdarken5")};
        `}
`;

export const StyledHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 55px;
    border-bottom: 1px solid ${themeGet("colors.border")};
    display: flex;
    align-items: center;
    padding: 0 20px;
    z-index: 99;
    .search {
        color: ${themeGet("colors.text3")};
        align-self: center;
        width: 18px;
        stroke-width: 2.8px;
        margin-right: 10px;
        margin-top: -2px;
    }
`;

export const StyledBody = styled.div`
    background-color: ${themeGet("colors.lilac")};
    width: 100%;
    height: 100%;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darkdarken5")};
        `}
`;

export const StyledBodyInner = styled.div`
    padding: 20px;
    ${device.large} {
        padding: 25px;
    }
    ${device.xlarge} {
        padding: 30px;
        max-width: 1140px;
    }
`;

export const StyledHeading = styled.h4`
    margin-bottom: 15px;
    ${device.large} {
        margin-bottom: 25px;
    }
`;
