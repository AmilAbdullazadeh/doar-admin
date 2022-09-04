import styled, { themeGet } from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    padding-top: 20px;
    padding-bottom: 0px;
    border-bottom: 0;
`;

export const StyledTitle = styled.h6`
    margin-bottom: 2px;
    font-size: 13px;
`;
export const StyledRole = styled.p`
    color: ${themeGet("colors.text3")};
    margin-bottom: 10px;
    font-size: 12px;
`;

export const StyledDiv = styled.div`
    font-size: 12px;
    justify-content: space-between;
    display: flex;
`;

export const StyledDivLeft = styled.span`
    color: ${themeGet("colors.text3")};
    text-transform: capitalize;
`;

export const StyledDivRight = styled.span`
    font-weight: 500;
`;
