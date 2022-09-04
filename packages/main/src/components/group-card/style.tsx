import styled, { device, themeGet } from "@doar/shared/styled";
import { Card, CardBody } from "@doar/components";

export const StyledCard = styled(({ ...rest }) => <Card {...rest} />)`
    border-width: 0;
    .card-img-top {
        height: 100px;
        object-fit: cover;
    }
`;

export const StyledCardBody = styled(({ ...rest }) => <CardBody {...rest} />)`
    font-size: 13px;
    padding: 15px;
    border: 1px solid ${themeGet("colors.border")};
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    ${device.large} {
        padding: 20px;
    }
`;

export const StyledInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: -55px;
`;

export const StyledName = styled.h5`
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 0;
    ${device.large} {
        font-size: 15px;
    }
`;

export const StyledConnections = styled.p`
    font-size: 12px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 25px;
`;
