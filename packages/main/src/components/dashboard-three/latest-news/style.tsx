import styled, { device, themeGet } from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledList = styled.div``;

export const StyleHr = styled.hr`
    margin: 0px;
`;

export const StyledItem = styled.div`
    padding: 20px;
    ${device.medium} {
        display: flex;
    }
`;

export const StyledThumb = styled.figure`
    width: 100%;
    height: auto;
    ${device.medium} {
        width: 50px;
        height: 60px;
    }
    ${device.large} {
        width: 100px;
        height: 60px;
    }
    a {
        display: block;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const StyledBody = styled.div`
    flex: 1;
    margin-top: 20px;
    ${device.medium} {
        margin-top: 0px;
        margin-left: 20px;
    }
`;

export const StyledCategory = styled.a`
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 5px;
    display: block;
`;

export const StyledTitle = styled.h6`
    a {
        color: ${themeGet("colors.text")};
    }
`;

export const StyledExcerpt = styled.p`
    font-size: 13px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
`;
