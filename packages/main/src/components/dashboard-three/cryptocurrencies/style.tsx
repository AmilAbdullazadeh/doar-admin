import styled, {
    themeGet,
    typography,
    TypographyProps,
    device,
} from "@doar/shared/styled";
import { Table } from "@doar/components";

export const StyledTable = styled(({ ...rest }) => <Table {...rest} />)`
    th,
    td {
        ${device.large} {
            padding: 8px 8px;
        }
        ${device.xlarge} {
            padding: 8px 10px;
        }
    }
`;

export const StyledTheadTR = styled.tr`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: ${themeGet("colors.text3")};
`;

export const StyledTH = styled(({ textAlign, ...rest }) => (
    <th {...rest} />
))<TypographyProps>`
    ${typography};
`;

export const StyledTR = styled.tr`
    font-size: 13px;
`;

export const StyledTD = styled.td`
    text-align: right;
    font-family: ${themeGet("fonts.rubik")};
    i {
        font-size: 10px;
    }
`;
