import styled, { device, themeGet, css } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    ${device.large} {
        padding-right: 25px;
        width: 260px;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            li,
            nav {
                a {
                    color: ${themeGet("colors.gray500")};
                }
                a:hover,
                a:focus {
                    color: ${themeGet("colors.primary")};
                }
            }
        `}
`;
