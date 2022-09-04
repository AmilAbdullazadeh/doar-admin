import styled from "@doar/shared/styled";
import { CardBody, CardFooter } from "@doar/components";

export const StyledBody = styled(({ ...rest }) => <CardBody {...rest} />)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 13px;
`;

export const StyledIcon = styled.div`
    font-size: 50px;
    line-height: 0;
    margin-bottom: 25px;
`;

export const StyledFooter = styled(({ ...rest }) => <CardFooter {...rest} />)`
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
