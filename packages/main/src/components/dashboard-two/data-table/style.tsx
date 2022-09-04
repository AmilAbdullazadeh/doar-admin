import styled, { themeGet, css } from "@doar/shared/styled";
import { Table } from "@doar/components";

export const StyledTable = styled(({ ...rest }) => <Table {...rest} />)``;

export const StyledTheadTR = styled.tr`
    &:first-child {
        th {
            border-top-width: 0;
            font-size: 13px;
            background-color: #f5f6fa;
            text-align: left;
            ${(props) =>
                props.theme.name === "dark" &&
                css`
                    background-color: rgba(255, 255, 255, 0.05);
                `}
        }
    }
    th:first-child {
        border-left-width: 0;
        text-align: left;
    }
    th:last-child {
        border-right-width: 0;
    }
    &:last-child {
        th {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 8px 15px;
            color: ${themeGet("colors.text3")};
            &:not(:first-child) {
                text-align: right;
            }
        }
    }
`;

export const StyledTD = styled.td`
    border-color: ${themeGet("colors.border")};
    padding: 10px 15px !important;
    font-size: 13px;
    text-align: right;
    white-space: nowrap;
    &:first-child {
        text-align: left;
    }
    strong {
        font-weight: 500;
        font-family: ${themeGet("fonts.interUi")};
    }
`;
