import styled, { device, themeGet } from "@doar/shared/styled";
import { CardBody, Button } from "@doar/components";

export const StyledBody = styled(({ ...rest }) => <CardBody {...rest} />)`
    ${device.small} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const StyledAvatar = styled.div`
    font-size: 40px;
    line-height: 0;
    color: ${themeGet("colors.orange")};
    ${device.large} {
        font-size: 60px;
    }
`;

export const StyledTitle = styled.h6`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    margin-bottom: 5px;
    ${device.large} {
        font-size: 14px;
    }
    span {
        font-weight: 400;
        color: ${themeGet("colors.text3")};
    }
`;

export const StyledMediaBottom = styled.div`
    display: flex;
    align-items: baseline;
`;

export const StyledBTCNumber = styled.h2`
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -1px;
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-bottom: 0px;
    ${device.large} {
        font-size: 28px;
    }
`;

export const StyledBTCRate = styled.h6`
    font-size: 11px;
    line-height: 1.2;
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    color: ${themeGet("colors.danger")};
    margin-left: 5px;
    margin-bottom: 0px;
`;

export const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    ${device.small} {
        flex-direction: row;
    }
    ${device.medium} {
        margin-top: 0px;
    }
`;

export const StyledButton = styled(({ ...rest }) => <Button {...rest} />)`
    font-size: 11px;
    line-height: 1.773;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;
