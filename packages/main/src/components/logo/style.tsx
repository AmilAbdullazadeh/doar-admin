import styled, { device, themeGet, css } from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledLogo = styled(({ ...rest }) => <Anchor {...rest} />)`
    font-weight: 700;
    font-size: 22px;
    letter-spacing: -1px;
    color: inherit;
    display: flex;
    align-items: center;
    position: relative;
    color: ${themeGet("colors.gulf")};
    margin-top: -4px;
    span {
        display: inline-block;
        font-weight: 400;
        color: ${themeGet("colors.primary")};
    }
    ${device.small} {
        font-size: 22px;
    }
    ${device.large} {
        font-size: 24px;
    }
    ${({ theme }) =>
        theme.name === "dark" &&
        css`
            color: ${themeGet("colors.white")};
        `}
`;
