import styled, { PositionProps, position, css } from "@doar/shared/styled";

export const StyledWrap = styled(({ top, bottom, ...rest }) => (
    <div {...rest} />
))<PositionProps>`
    height: 100%;
    position: relative;
    ${({ bottom }) =>
        !!bottom &&
        css`
            height: calc(100% - ${bottom});
        `}
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
    .scrollbar-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: auto;
        ${position};
    }
`;
