import styled, { themeGet, css } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    padding: 20px 12px;
    min-height: 273px;
    .react-calendar {
        &__navigation {
            display: flex;
            padding: 0 10px;
            margin-bottom: 10px;
            justify-content: flex-end;
            align-items: center;
            position: relative;
            font-weight: 500;
            font-size: 12px;
            text-transform: uppercase;
            color: ${themeGet("colors.text")};
            letter-spacing: 1px;
            &__arrow,
            &__label {
                border: none;
                background: transparent;
                text-align: left;
                padding: 0;
                &:focus {
                    outline: none;
                }
            }
            &__arrow {
                position: relative;
                display: block;
                top: 0;
                width: 10px;
                text-align: center;
                color: ${themeGet("colors.text3")};
                line-height: 1;
                font-size: 14px;
            }
            &__label {
                order: 1;
                cursor: none;
                pointer-events: none;
                color: ${themeGet("colors.text")};
                text-transform: none;
                font-size: 15px;
                font-weight: 600;
                letter-spacing: -0.2px;
            }
            &__prev-button {
                order: 2;
                margin-right: 8px;
            }
            &__next-button {
                order: 3;
            }
            &__next2-button,
            &__prev2-button {
                display: none;
            }
        }
        &__viewContainer {
            margin: 0;
            background-color: transparent;
            width: 100%;
        }
        &__month-view {
            &__weekdays {
                &__weekday {
                    text-align: center;
                    letter-spacing: normal;
                    font-weight: 500;
                    color: ${themeGet("colors.text3")};
                    text-transform: uppercase;
                    font-size: 11px;
                    padding: 6px 9px;
                    abbr {
                        text-decoration: none;
                    }
                }
            }
            &__days {
                &__day {
                    background: transparent;
                    border: none;
                    padding: 0;
                    text-align: center;
                    font-size: 12px;
                    font-family: ${themeGet("fonts.interUi")};
                    width: 32px;
                    height: 33px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: auto;
                    border-radius: 100%;
                    &:hover,
                    &:focus,
                    &:active {
                        outline: none;
                    }
                    &--neighboringMonth {
                        color: ${themeGet("colors.text4")};
                    }
                    ${(props) =>
                        props.theme.name === "dark" &&
                        css`
                            color: ${themeGet("colors.gray600")};
                            &:hover,
                            &:focus {
                                background-color: ${themeGet(
                                    "colors.darklighten5"
                                )};
                                color: #fff;
                            }
                        `}
                }
            }
        }
        &__tile {
            &--active {
                color: ${themeGet("colors.primary")};
            }
        }
    }
`;
