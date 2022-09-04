import styled, { themeGet } from "@doar/shared/styled";
import { Button } from "@doar/components";

export const StyledNumber = styled.h4`
    font-size: 40px;
    letter-spacing: -0.5px;
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-bottom: 0px;
`;

export const StyledSubtitle = styled.p`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: ${themeGet("colors.text2")};
`;

export const StyledDesc = styled.p`
    font-size: 12px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
`;

export const StyledButton = styled(({ ...rest }) => <Button {...rest} />)`
    font-size: 11px;
    line-height: 1.773;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-weight: 600;
`;
