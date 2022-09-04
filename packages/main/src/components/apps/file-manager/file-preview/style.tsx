import styled, {
    device,
    color as colorStyles,
    ColorProps,
    themeGet,
    css,
} from "@doar/shared/styled";
import { Card, CardBody, CardFooter } from "@doar/components";

export const StyledCard = styled(({ ...rest }) => <Card {...rest} />)`
    padding: 10px;
    position: relative;
    border-color: ${themeGet("colors.border")};
    transition: all 0.2s ease-in-out;
    &:hover,
    &:focus {
        border-color: ${themeGet("colors.text4")};
    }
    span {
        font-size: 12px;
        color: ${themeGet("colors.text3")};
    }
    p {
        margin-bottom: 0;
        color: ${themeGet("colors.river")};
    }
`;

export const StyledThumb = styled(({ color, ...rest }) => (
    <div {...rest} />
))<ColorProps>`
    background-color: ${themeGet("colors.whisper")};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    ${device.small} {
        height: 100px;
        font-size: 40px;
    }
    ${device.large} {
        height: 120px;
        font-size: 48px;
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: ${themeGet("colors.darkdarken2")};
        `}
    ${colorStyles};
`;

export const StyledBody = styled(({ ...rest }) => <CardBody {...rest} />)`
    padding: 15px 0 0;
`;

export const StyledFooter = styled(({ ...rest }) => <CardFooter {...rest} />)`
    font-size: 11px;
    color: ${themeGet("colors.text4")};
    padding: 10px 0 0;
    border-top-width: 0;
    background-color: transparent;
`;

export const StyledMarker = styled.div`
    left: -1px;
    top: -1px;
    position: absolute;
    color: #fff;
    overflow: hidden;
    display: flex;
    width: 45px;
    height: 45px;
    svg {
        width: 16px;
        height: 16px;
        margin-top: calc(30% - 8px);
        margin-left: calc(30% - 8px);
        position: relative;
        z-index: 1;
    }
    &:before {
        content: "";
        position: absolute;
        top: -70%;
        left: -70%;
        width: 140%;
        height: 140%;
        background-color: ${themeGet("colors.warning")};
        transform: rotate(45deg);
    }
`;
