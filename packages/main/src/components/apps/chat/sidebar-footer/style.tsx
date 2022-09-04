import styled, { css, themeGet } from "@doar/shared/styled";
import { Anchor } from "@doar/components";

export const StyledWrap = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledLinks = styled.div`
    align-items: center;
    display: flex;
`;

export const StyledLink = styled(({ ...rest }) => <Anchor {...rest} />)`
    padding: 3px 6px;
    color: ${themeGet("colors.text3")};
    border-radius: 0.25rem;
    line-height: 1;
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: ${themeGet("colors.gray500")};
            &:hover,
            &:focus {
                color: #fff;
            }
        `}
`;
