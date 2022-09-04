import styled, { device, themeGet } from "@doar/shared/styled";
import { Card, CardBody, CardFooter } from "@doar/components";

export const StyledCard = styled(({ ...rest }) => <Card {...rest} />)`
    border-width: 0;
    .card-img-top {
        height: 150px;
        object-fit: cover;
    }
`;

export const StyledCardBody = styled(({ ...rest }) => <CardBody {...rest} />)`
    font-size: 13px;
    padding: 15px;
    border: 1px solid ${themeGet("colors.border")};
    ${device.large} {
        padding: 20px;
    }
`;

export const StyledCardFooter = styled(({ ...rest }) => (
    <CardFooter {...rest} />
))`
    border: 1px solid ${themeGet("colors.border")};
    border-top-width: 0;
    border-bottom-right-radius: ${themeGet("radii.rounded")};
    border-bottom-left-radius: ${themeGet("radii.rounded")};
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
`;

export const StyledName = styled.h5`
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 0;
    ${device.large} {
        font-size: 15px;
    }
`;
