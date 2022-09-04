import styled, { css, themeGet } from "@doar/shared/styled";
import { Tabs } from "react-tabs";

interface ITab {
    $justified?: boolean;
    $vertical?: boolean;
    $variation?: "line";
}

export const StyledTabs = styled(({ ...rest }) => <Tabs {...rest} />)<ITab>`
    ${({ $vertical }) =>
        $vertical === true &&
        css`
            display: flex;
            align-items: flex-start;
        `}
    .react-tabs {
        &__tab-list {
            display: flex;
            flex-wrap: wrap;
            border-color: ${themeGet("colors.border")};
            ${({ $vertical }) =>
                $vertical === true &&
                css`
                    border-bottom: 0;
                    border-right: 0;
                    justify-content: flex-start;
                    flex-direction: column;
                    width: 150px;
                `}
            ${({ $variation }) =>
                $variation === "line" &&
                css`
                    border-bottom: 2px solid ${themeGet("colors.border")};
                `}
        }
        &__tab {
            margin-bottom: 0;
            background-color: ${themeGet("colors.border")};
            border-color: ${themeGet("colors.border")};
            color: ${themeGet("colors.gray700")};
            border-bottom-width: 0;
            position: relative;
            margin-bottom: -1px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 38px;
            transition: background-color 0.2s;
            border: 1px solid transparent;
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
            cursor: pointer;
            &:not(:first-of-type) {
                margin-left: 5px;
            }
            &--selected {
                background-color: #fff;
                z-index: 5;
                color: ${themeGet("colors.primary")};
                border-color: ${themeGet("colors.gray300")}
                    ${themeGet("colors.gray300")} #fff;
            }
            &--disabled {
                background-color: transparent;
                color: ${themeGet("colors.gray400")};
                border-color: transparent;
                pointer-events: none;
                cursor: default;
            }
            ${({ $justified }) =>
                $justified === true &&
                css`
                    flex-basis: 0;
                    flex-grow: 1;
                    text-align: center;
                `}
            ${({ $vertical }) =>
                $vertical === true &&
                css`
                    border-color: ${themeGet("colors.border")};
                    border-right-width: 0;
                    margin-bottom: 0;
                    margin-right: -1px;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                    border-top-left-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                    &:not(:first-of-type) {
                        margin-left: 0;
                        margin-top: 5px;
                    }
                    &--selected {
                        border-color: ${themeGet("colors.border")};
                    }
                `}
			${({ $variation }) =>
                $variation === "line" &&
                css`
                    padding: 8px 0;
                    background-color: transparent;
                    border: none;
                    border-radius: 0;
                    &:not(:first-of-type) {
                        margin-left: 25px;
                    }
                    &--selected {
                        border: none;
                        background-color: transparent;
                        &:after {
                            content: "";
                            position: absolute;
                            bottom: -1px;
                            left: 0;
                            right: 0;
                            height: 2px;
                            background-color: ${themeGet("colors.primary")};
                        }
                    }
                `}
                ${(props) =>
                props.theme.name === "dark" &&
                css`
                    color: ${themeGet("colors.gray300")};
                `}
        }
        &__tab-panel {
            transition: all 0.15s linear;
            display: none;
            height: 0;
            max-width: 100%;
            visibility: hidden;
            overflow: hidden;
            opacity: 0;
            &--selected {
                display: block;
                height: auto;
                visibility: visible;
                opacity: 1;
                overflow: visible;
            }
        }
        &__content {
            ${({ $vertical }) =>
                $vertical === true &&
                css`
                    flex: 1;
                `}
            ${({ $variation }) =>
                $variation === "line" &&
                css`
                    border: none;
                    padding: 0;
                    margin-top: 20px;
                `}
        }
    }
`;

export const StyledTabContent = styled.div`
    padding: 20px;
    border-top: 0;
    border: 1px solid ${themeGet("colors.gray300")};
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            border-color: ${themeGet("colors.gray500")};
        `}
`;
