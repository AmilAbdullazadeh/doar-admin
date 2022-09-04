import styled, { themeGet, device, css } from "@doar/shared/styled";

export const StyledHeader = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 55px;
    border-bottom: 1px solid ${themeGet("colors.border")};
    display: flex;
    align-items: center;
    padding: 0 15px;
    width: calc(100% - 54px);
    z-index: 99;
    ${device.large} {
        width: calc(100% - 60px);
    }
    .search {
        color: ${themeGet("colors.text3")};
        align-self: center;
        width: 18px;
        stroke-width: 2.8px;
        margin-right: 10px;
        margin-top: -2px;
    }
    .btn {
        padding-bottom: 7px;
        padding-top: 7px;
    }

    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darkdarken3")};
        `}
`;
