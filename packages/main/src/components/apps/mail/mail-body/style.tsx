import styled, { device, css, themeGet } from "@doar/shared/styled";

export const StyledWrap = styled.div`
    padding: 20px;
    ${device.large} {
        padding: 25px;
    }
    ${device.large} {
        padding: 30px;
    }
`;

export const StyledContent = styled.div`
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            p {
                color: ${themeGet("colors.gray500")};
            }
        `}
`;
