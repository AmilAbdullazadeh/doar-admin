/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { device, themeGet, css, tinycolor } from "@doar/shared/styled";

interface IProps {
    $showSidebar: boolean;
}

export const StyledWrap = styled.div<IProps>`
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 0.3s;
    ${device.large} {
        left: 280px;
    }
    @media (max-width: 991.98px) {
        ${({ $showSidebar }) =>
            $showSidebar &&
            css`
                transform: translateX(280px);
            `}
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: transparent;
        `}
    .fc {
        height: 100%;
        .fc {
            &-toolbar {
                &.fc-header-toolbar {
                    height: 55px;
                    margin-bottom: 0 !important;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid ${themeGet("colors.border")};
                    padding: 0 15px;
                }
                button {
                    height: 32px;
                    background-color: #fff;
                    background-image: none;
                    border: 1px solid ${themeGet("colors.border")};
                    color: ${(props) =>
                        tinycolor(themeGet("colors.text2")(props))
                            .setAlpha(0.7)
                            .toRgbString()};
                    box-shadow: none;
                    padding: 0 15px;
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    text-transform: capitalize;
                    outline: none;
                    text-shadow: none;
                    border-radius: 0;
                    transition: all 0.2s ease-in-out;
                    &:hover,
                    &:focus {
                        border-color: ${themeGet("colors.text3")};
                        color: ${themeGet("colors.text2")};
                        position: relative;
                        z-index: 5;
                        background-color: #fff;
                    }
                    &:not(:disabled) {
                        &.fc-button-active {
                            background-color: ${themeGet("colors.whisper")};
                            border-color: ${themeGet("colors.text4")};
                            color: ${themeGet("colors.text2")};
                        }
                    }
                    ${(props) =>
                        props.theme.name === "dark" &&
                        css`
                            border-width: 0;
                            background-color: ${themeGet("colors.gray800")};
                            color: ${themeGet("colors.gray500")};
                            &:hover,
                            &:focus {
                                background-color: ${themeGet("colors.gray700")};
                                color: #fff;
                            }
                            &:not(:disabled) {
                                &.fc-button-active {
                                    background-color: ${themeGet(
                                        "colors.gray700"
                                    )};
                                    color: #fff;
                                }
                            }
                        `}
                }
                .fc {
                    &-toolbar-chunk {
                        &:first-child {
                            display: flex;
                            align-items: center;
                        }
                        &:last-child {
                            display: none;
                            @media (min-width: 480px) {
                                display: block;
                            }

                            @media (max-width: 575px) {
                                button {
                                    text-indent: -9999px;
                                    width: 32px;
                                    height: 32px;
                                    position: relative;
                                    color: transparent;
                                    &:before {
                                        position: absolute;
                                        top: 6px;
                                        left: 10px;
                                        z-index: 100;
                                        display: inline-block;
                                        text-indent: 0;
                                        font-size: 12px;
                                        font-weight: 700;
                                        color: ${themeGet("colors.text2")};
                                    }
                                    &.fc-dayGridMonth-button {
                                        &:before {
                                            content: "M";
                                        }
                                    }
                                    &.fc-timeGridWeek-button {
                                        &:before {
                                            content: "W";
                                        }
                                    }
                                    &.fc-timeGridDay-button {
                                        &:before {
                                            content: "D";
                                        }
                                    }
                                    &.fc-listWeek-button {
                                        &:before {
                                            content: "L";
                                        }
                                    }
                                }
                            }
                        }
                    }
                    &-button-group {
                        button:first-child {
                            border-top-left-radius: ${themeGet(
                                "radii.rounded"
                            )};
                            border-bottom-left-radius: ${themeGet(
                                "radii.rounded"
                            )};
                        }
                        button:last-child {
                            border-top-right-radius: ${themeGet(
                                "radii.rounded"
                            )};
                            border-bottom-right-radius: ${themeGet(
                                "radii.rounded"
                            )};
                        }
                    }
                    &-prev-button,
                    &-next-button {
                        padding: 0;
                        width: 34px;
                        justify-content: center;
                        span {
                            margin: 0;
                        }
                    }
                    &-icon-left-single-arrow,
                    &-icon-right-single-arrow {
                        top: 0;
                    }
                    &-today-button {
                        border-radius: ${themeGet("radii.rounded")};
                        color: ${(props) =>
                            tinycolor(themeGet("colors.text2")(props))
                                .setAlpha(0.7)
                                .toRgbString()};
                        background-color: #fff;
                        display: none;
                        ${device.medium} {
                            display: block;
                        }
                        &:disabled {
                            border-color: ${themeGet("colors.border")};
                            background-color: ${themeGet("colors.whisper")};
                            color: ${themeGet("colors.text3")};
                            font-weight: 400;
                            cursor: default;
                        }
                        ${(props) =>
                            props.theme.name === "dark" &&
                            css`
                                background-color: ${themeGet("colors.gray800")};
                                color: ${themeGet("colors.gray500")};
                                &:hover,
                                &:focus {
                                    background-color: ${themeGet(
                                        "colors.gray700"
                                    )};
                                    color: #fff;
                                }

                                &:disabled {
                                    background-color: ${themeGet(
                                        "colors.gray900"
                                    )};
                                    color: ${themeGet("colors.gray700")};
                                }
                            `}
                    }
                    &-toolbar-title {
                        font-size: 16px;
                        font-weight: 500;
                        letter-spacing: -0.2px;
                        ${device.small} {
                            font-size: 18px;
                        }
                        ${device.large} {
                            font-size: 20px;
                        }
                    }
                }
            }
            &-view-harness {
                height: calc(100% - 50px) !important;
            }
            &-view {
                th,
                td {
                    border-color: ${themeGet("colors.border")};
                }
            }
            &-scrollgrid {
                border-top-width: 0;
                border-left-width: 0;
                &-section-header {
                    .fc-scroller {
                        overflow-y: auto !important;
                    }
                }
                table {
                    width: 100% !important;
                }
            }
            &-col {
                &-header-cell {
                    padding: 5px 0;
                    border-color: ${themeGet("colors.border")};
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 500;
                    color: ${themeGet("colors.text2")};
                    font-weight: 600;
                    ${device.small} {
                        font-size: 12px;
                    }
                    &-cushion {
                        padding: 0;
                        color: inherit;
                    }
                }
            }
            &-daygrid {
                &-body {
                    border-left-width: 0;
                    font-family: ${themeGet("fonts.interUi")};
                    width: 100% !important;
                }
                &-day {
                    &.fc-day {
                        &-other,
                        &-today {
                            background-color: ${themeGet("colors.lilac")};
                            ${(props) =>
                                props.theme.name === "dark" &&
                                css`
                                    background-color: ${themeGet(
                                        "colors.darkdarken2"
                                    )};
                                `}
                        }
                        &-other {
                            .fc-daygrid-day-top {
                                opacity: 1;
                            }
                        }
                        &-today {
                            .fc-daygrid-day-number {
                                background-color: ${themeGet("colors.primary")};
                                color: #fff;
                                border-radius: 1px;
                            }
                        }
                    }
                    &-number {
                        font-size: 14px;
                        font-weight: 400;
                        font-family: ${themeGet("fonts.interUi")};
                        color: ${themeGet("colors.gray700")};
                        display: inline-block;
                        padding: 5px 8px;
                        position: relative;
                        transition: all 0.2s ease-in-out;
                        margin: 2px 2px 0 0;
                        min-width: 36px;
                        text-align: center;
                        &:hover,
                        &:focus {
                            color: ${themeGet("colors.text2")};
                            background-color: ${themeGet("colors.whisper")};
                            text-decoration: none;
                        }
                    }
                    &-events {
                        min-height: 1.7em;
                    }
                }
                &-event {
                    border-width: 0;
                    border-top-width: 5px;
                    border-radius: 0;
                    ${device.small} {
                        border-top-width: 0;
                        border-left-width: 2px;
                        padding: 1px 4px;
                    }
                    .fc-event {
                        &-main {
                            color: ${themeGet("colors.text")};
                            display: none;
                            ${device.small} {
                                display: block;
                            }
                        }
                        &-title {
                            ${(props) =>
                                props.theme.name === "dark" &&
                                css`
                                    color: ${themeGet("colors.gray700")};
                                `}
                        }
                        &-time {
                            font-weight: 500;
                            overflow: visible;
                            ${(props) =>
                                props.theme.name === "dark" &&
                                css`
                                    color: ${themeGet("colors.gray700")};
                                `}
                        }
                        &-desc {
                            display: none;
                        }
                    }
                }
            }
            &-timegrid {
                &-body {
                    overflow: hidden;
                }
                &-divider {
                    ${(props) =>
                        props.theme.name === "dark" &&
                        css`
                            background-color: ${themeGet("colors.darkdarken2")};
                            border-color: ${tinycolor(
                                themeGet("colors.gray900")(props)
                            )
                                .lighten(2)
                                .toString()};
                        `}
                }
                .fc {
                    &-col-header {
                        font-size: 11px;
                        font-weight: 600;
                        text-transform: uppercase;
                        padding: 5px 0;
                        color: ${themeGet("colors.text2")};
                        ${device.small} {
                            font-size: 12px;
                        }
                        &-cell-cushion {
                            &:hover {
                                text-decoration: none;
                            }
                            span {
                                display: block;
                                &:first-child {
                                    color: ${themeGet("colors.text3")};
                                    font-size: 8px;
                                    font-weight: 400;
                                    line-height: 1.2;
                                    ${device.small} {
                                        font-size: 11px;
                                        font-weight: 500;
                                    }
                                }
                                &:last-child {
                                    font-weight: 500;
                                    font-size: 14px;
                                    font-family: Helvetica, Arial, sans-serif;
                                    line-height: 1;
                                    ${device.small} {
                                        font-size: 25px;
                                    }
                                }
                            }
                        }
                        .fc-day-today {
                            .fc-col-header-cell-cushion {
                                span:last-child {
                                    color: ${themeGet("colors.primary")};
                                }
                            }
                        }
                    }
                    &-timegrid-event {
                        padding: 5px;
                        border-left-width: 0;
                        border-right-width: 0;
                        border-top-width: 2px;
                        .fc-event {
                            &-title {
                                font-size: 14px;
                                font-weight: 700;
                                color: ${themeGet("colors.gray900")};
                                margin-bottom: 10px;
                                &-container {
                                    flex-grow: 0;
                                }
                                ${(props) =>
                                    props.theme.name === "dark" &&
                                    css`
                                        color: ${themeGet("colors.gray700")};
                                    `}
                            }
                            &-time {
                                font-size: 11px;
                                color: ${themeGet("colors.gray900")};
                                ${(props) =>
                                    props.theme.name === "dark" &&
                                    css`
                                        color: ${themeGet("colors.gray700")};
                                    `}
                            }
                            &-desc {
                                display: none;
                                line-height: 1.3;
                                color: ${(props) =>
                                    tinycolor(themeGet("colors.gray900")(props))
                                        .setAlpha(0.8)
                                        .toRgbString()};
                                ${device.large} {
                                    display: block;
                                }
                            }
                        }
                    }
                    &-timegrid-col {
                        &.fc-day-today {
                            background-color: ${(props) =>
                                tinycolor(themeGet("colors.gray100")(props))
                                    .setAlpha(0.7)
                                    .toRgbString()};

                            ${(props) =>
                                props.theme.name === "dark" &&
                                css`
                                    background-color: ${themeGet(
                                        "colors.darkdarken2"
                                    )};
                                `}
                        }
                    }
                }
            }
            &-list {
                border: none;
                .fc {
                    &-scroller {
                        padding: 20px 20px 20px 0;
                    }
                    &-list {
                        &-table {
                            border-collapse: separate;
                            display: block;
                            font-family: ${themeGet("fonts.interUi")};
                            & > tbody {
                                display: flex;
                                flex-wrap: wrap;
                            }
                        }
                        &-day {
                            flex: 0 0 20%;
                            max-width: 20%;
                            margin-top: 15px;
                            display: flex;
                            justify-content: center;
                            ${device.small} {
                                flex: 0 0 15%;
                                max-width: 15%;
                            }
                            ${device.medium} {
                                flex: 0 0 12%;
                                max-width: 12%;
                            }
                            ${device.large} {
                                flex: 0 0 10%;
                                max-width: 10%;
                            }
                            ${device.large} {
                                flex: 0 0 8%;
                                max-width: 8%;
                            }
                            &:first-of-type {
                                margin-top: 0;
                                & + .fc-list-event {
                                    margin-top: 0;
                                }
                            }
                            & > th {
                                border: none;
                                background: transparent;
                            }
                            .fc-list-day {
                                &-cushion {
                                    background-color: transparent;
                                    border-width: 0;
                                    padding: 0;
                                }
                                &-text {
                                    display: block;
                                    font-size: 11px;
                                    text-transform: uppercase;
                                    color: ${themeGet("colors.text3")};
                                    font-weight: 500;
                                    padding: 5px;
                                    text-align: center;
                                    &:hover {
                                        text-decoration: none;
                                    }
                                    &.now {
                                        color: ${themeGet("colors.primary")};
                                        span {
                                            color: ${themeGet(
                                                "colors.primary"
                                            )};
                                        }
                                    }
                                    span {
                                        display: block;
                                        font-size: 28px;
                                        font-weight: 400;
                                        letter-spacing: -1.5px;
                                        color: ${themeGet("colors.text")};
                                        line-height: 1;
                                        ${device.small} {
                                            font-size: 32px;
                                        }
                                        ${device.xlarge} {
                                            font-size: 36px;
                                        }
                                    }
                                }
                            }
                        }
                        &-event {
                            flex: 0 0 calc(80% - 5px);
                            max-width: calc(80% - 5px);
                            display: flex;
                            flex-direction: column;
                            border-left-width: 4px;
                            border-left-style: solid;
                            background-color: #fff;
                            margin-top: 15px;
                            cursor: pointer;
                            & + .fc-list-event {
                                margin-left: 20%;
                                ${device.small} {
                                    margin-left: 15%;
                                }
                                ${device.medium} {
                                    margin-left: 12%;
                                }
                                ${device.large} {
                                    margin-left: 10%;
                                }
                                ${device.xlarge} {
                                    margin-left: 8%;
                                }
                            }
                            &:hover {
                                background-color: #fff;
                            }
                            ${device.small} {
                                flex: 0 0 calc(85% - 5px);
                                max-width: calc(85% - 5px);
                            }
                            ${device.medium} {
                                flex: 0 0 calc(88% - 5px);
                                max-width: calc(88% - 5px);
                            }
                            ${device.large} {
                                flex: 0 0 calc(90% - 5px);
                                max-width: calc(90% - 5px);
                            }
                            ${device.xlarge} {
                                flex: 0 0 calc(92% - 5px);
                                max-width: calc(92% - 5px);
                            }
                            &:first-child {
                            }
                            & > td {
                                border-width: 0;
                            }
                            .fc-list-event {
                                &-graphic {
                                    display: none;
                                }
                                &-time {
                                    padding: 12px 15px 2px;
                                    width: 100%;
                                    text-transform: uppercase;
                                    font-size: 11px;
                                    font-weight: 600;
                                    letter-spacing: 0.5px;
                                    border-top: 1px solid
                                        ${themeGet("colors.light")};
                                    border-right: 1px solid
                                        ${themeGet("colors.light")};
                                    box-sizing: border-box;
                                    border-bottom: none;
                                }
                                &-title {
                                    padding: 0 15px 12px;
                                    border-bottom: 1px solid
                                        ${themeGet("colors.light")};
                                    border-right: 1px solid
                                        ${themeGet("colors.light")};
                                    box-sizing: border-box;
                                    border-top: none;
                                    a {
                                        display: block;
                                        font-weight: 500;
                                        font-size: 16px;
                                        margin-bottom: 2px;
                                        color: ${themeGet("colors.text")};
                                        ${device.small} {
                                            font-size: 18px;
                                        }
                                    }
                                }
                                &-desc {
                                    font-size: 12px;
                                    line-height: 1.375;
                                    display: block;
                                    color: ${themeGet("colors.text3")};
                                    ${device.large} {
                                        font-size: 13px;
                                    }
                                }
                            }
                            ${(props) =>
                                props.theme.name === "dark" &&
                                css`
                                    background-color: ${themeGet(
                                        "colors.gray900"
                                    )};
                                    &:hover,
                                    &:focus {
                                        background-color: ${themeGet(
                                            "colors.gray900"
                                        )};
                                        td {
                                            background-color: ${themeGet(
                                                "colors.gray900"
                                            )};
                                        }
                                    }
                                `}
                        }
                    }
                }
            }
        }
    }
`;
