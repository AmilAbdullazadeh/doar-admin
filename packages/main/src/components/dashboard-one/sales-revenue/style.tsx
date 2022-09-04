import styled, { themeGet } from "@doar/shared/styled";
import { CardHeader, Table } from "@doar/components";

export const StyledHeader = styled(({ ...props }) => <CardHeader {...props} />)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledHeaderRight = styled.div`
    font-size: 13px;
    align-items: center;
    display: flex;
`;

export const StyledHeaderRightText = styled.span`
    margin-right: 5px;
`;

export const StyledHeaderRightIcon = styled.span`
    cursor: pointer;
    line-height: 0;
    color: ${themeGet("colors.text3")};
    display: flex;
    align-items: center;
    i {
        margin-left: 5px;
    }
`;

export const StyeldMap = styled.div`
    padding: 25px 20px;
`;

export const StyledTable = styled(({ ...rest }) => <Table {...rest} />)`
    font-size: 13px;
    thead th,
    tbody td {
        border-color: ${themeGet("colors.light")};
    }
    tbody td {
        padding-top: 5px;
        padding-bottom: 5px;
    }
`;

export const StyledTH = styled.th`
    font-family: ${themeGet("fonts.interUi")};
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: ${themeGet("colors.text3")};
    &:first-child {
        padding-left: 20px;
        width: 40px;
    }
    &:not(:first-child) {
        width: 25px;
        text-align: right;
    }
    &:last-child {
        padding-right: 20px;
    }
`;

export const StyledTD = styled.td`
    &:first-child {
        padding-left: 20px;
        font-weight: 500;
    }
    &:not(:first-child) {
        text-align: right;
    }
    &:last-child {
        padding-right: 20px;
    }
`;
