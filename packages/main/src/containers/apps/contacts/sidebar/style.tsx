import styled, { device, css, themeGet, tinycolor } from "@doar/shared/styled";

interface ISidebar {
    $show: boolean;
}

export const StyledSidebar = styled.div<ISidebar>`
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    left: 0;
    transition: all 0.3s;
    @media (min-width: 480px) {
        right: auto;
        width: 304px;
        border-right: 1px solid ${themeGet("colors.border")};
    }

    ${device.large} {
        width: 325px;
    }
    ${device.xlarge} {
        width: 340px;
    }
    ${({ $show }) =>
        !$show &&
        css`
            @media (max-width: 991.98px) {
                transform: translateX(-350px);
            }
            @media (min-width: 992px) and (max-width: 1199.98px) {
                transform: translateX(-260px);
            }
        `}
    .react-tabs {
        height: 100%;
        &__tab-list {
            width: 54px;
            height: 100%;
            padding: 15px 10px;
            border-right: 1px solid ${themeGet("colors.border")};
            ${device.large} {
                width: 60px;
            }
            ${(props) =>
                props.theme.name === "dark" &&
                css`
                    background-color: ${themeGet("colors.darkdarken3")};
                `}
        }
        &__tab {
            padding: 0;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${themeGet("colors.text2")};
            border-radius: 0;
            transition: all 0.2s ease-in-out;
            background-color: transparent;
            border: none;
            &--selected {
                border: none;
                color: ${themeGet("colors.primary")};
            }
            &:not(:first-of-type) {
                margin-top: 10px;
            }
            svg {
                width: 20px;
                stroke-width: 2.2px;
                fill: ${(props) =>
                    !!props.theme &&
                    css`
                        ${tinycolor(themeGet("colors.text2")(props))
                            .setAlpha(0.1)
                            .toRgbString()}
                    `};
            }
            ${(props) =>
                props.theme.name === "dark" &&
                css`
                    color: rgba(255, 255, 255, 0.5);
                    &:hover {
                        color: #fff;
                    }
                `}
        }
        &__content {
            border: none;
            position: relative;
            padding: 0;
            height: 100%;
            ${device.large} {
                width: 265px;
            }
            ${device.xlarge} {
                width: 280px;
            }
            ${(props) =>
                props.theme.name === "dark" &&
                css`
                    background-color: ${themeGet("colors.darkdarken5")};
                `}
        }
    }
`;

export const StyledContactList = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
`;
