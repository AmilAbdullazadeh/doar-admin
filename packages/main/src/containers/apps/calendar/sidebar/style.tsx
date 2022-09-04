import styled, { device, themeGet, css } from "@doar/shared/styled";

interface ISidebar {
    $show: boolean;
}

export const StyledWrap = styled.div<ISidebar>`
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100%;
    width: 100%;
    border-right: 1px solid ${themeGet("colors.border")};
    visibility: hidden;
    transition: all 0.3s;
    @media (min-width: 375px) {
        width: 280px;
        left: -281px;
    }
    @media (max-width: 991.98px) {
        ${({ $show }) =>
            $show &&
            css`
                left: 0;
                visibility: visible;
            `}
    }

    ${device.large} {
        left: 0;
        visibility: visible;
    }

    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darkdarken5")};
        `}

    .scrollbar-container {
        position: absolute;
        top: 55px;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .ps {
        overflow: hidden;
    }
    .ps > .ps__rail-y {
        width: 3px;
        background-color: rgba(72, 83, 114, 0.06);
        z-index: 10;
        position: absolute;
        left: auto !important;
        right: 0;
        opacity: 0;
        margin: 1px;
        transition: opacity 0.2s;
    }
    @media (prefers-reduced-motion: reduce) {
        .ps > .ps__rail-y {
            transition: none;
        }
    }
    .ps > .ps__rail-y > .ps__thumb-y {
        position: absolute;
        border-radius: 0;
        width: 3px;
        left: 0;
        background-color: #97a3b9;
    }
    .ps.ps--active-y:hover > .ps__rail-y,
    .ps.ps--active-y:focus > .ps__rail-y {
        opacity: 1;
    }

    .scrollbar-sm > .ps__rail-y {
        width: 1px;
    }
    .scrollbar-sm > .ps__rail-y > .ps__thumb-y {
        width: 1px;
    }

    .scrollbar-lg > .ps__rail-y {
        width: 6px;
    }
    .scrollbar-lg > .ps__rail-y > .ps__thumb-y {
        width: 6px;
    }
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
    padding: 0 15px 0 20px;
    background: #fff;
    z-index: 99;
    .search {
        color: ${themeGet("colors.text3")};
        align-self: center;
        width: 18px;
        stroke-width: 2.8px;
        margin-right: 10px;
        margin-top: -2px;
    }
    .plus {
        margin-top: 0;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: transparent;
        `}
`;

export const StyledBody = styled.div``;
