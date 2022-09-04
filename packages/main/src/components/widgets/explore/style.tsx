/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { themeGet, tinycolor } from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledNav = styled.nav`
    font-size: 13px;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex-direction: column;
    svg {
        color: ${themeGet("colors.shuttle2")};
        fill: ${(props) =>
            tinycolor(themeGet("colors.text2")(props))
                .setAlpha(0.06)
                .toRgbString()};
        margin-right: 15px;
    }
`;

export const StyledLink = styled(({ ...rest }) => <Anchor {...rest} />)`
    color: ${themeGet("colors.text2")};
    padding: 0;
    display: flex;
    align-items: center;
    &:not(:first-of-type) {
        margin-top: 10px;
    }
`;

export const StyledSpan = styled.span`
    display: block;
    transform: translateY(1px);
`;
