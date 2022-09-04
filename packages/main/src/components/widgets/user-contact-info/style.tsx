/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { themeGet, tinycolor } from "@doar/shared/styled";

export const StyledItem = styled.li`
    display: flex;
    align-items: center;
    &:not(:first-of-type) {
        margin-top: 10px;
    }
    svg {
        color: ${themeGet("colors.shuttle2")};
        fill: ${(props) =>
            tinycolor(themeGet("colors.text2")(props))
                .setAlpha(0.06)
                .toRgbString()};
        margin-right: 15px;
    }
`;

export const StyledSpan = styled.span`
    color: ${themeGet("colors.text3")};
`;
