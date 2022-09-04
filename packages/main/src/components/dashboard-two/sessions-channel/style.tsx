import styled, {
    themeGet,
    device,
    color,
    ColorProps,
} from "@doar/shared/styled";

export const StyledChart = styled.div`
    height: 180px;
    margin-bottom: -33px;
    ${device.large} {
        height: 205px;
    }
    ${device.xlarge} {
        height: 220px;
    }
`;

export const StyledFooterText = styled.p`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: ${themeGet("colors.text3")};
    margin-bottom: 5px;
`;

export const StyledFooterDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledFooterBullet = styled(({ bg, ...rest }) => (
    <div {...rest} />
))<ColorProps>`
    width: 10px;
    margin-right: 5px;
    height: 10px;
    border-radius: 50%;
    ${color};
`;

export const StyledFooterTitle = styled.h5`
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-bottom: 0px;
    small {
        color: ${themeGet("colors.text4")};
    }
`;
