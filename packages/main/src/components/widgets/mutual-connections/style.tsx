import styled from "@doar/shared/styled";
import { ImageGroup } from "@doar/components";

export const StyledImgGroup = styled(({ ...rest }) => <ImageGroup {...rest} />)`
    margin-bottom: 20px;
    justify-content: flex-start;
    img {
        width: 40px;
        height: 40px;
        &:not(:first-of-type) {
            margin-left: -16px;
        }
    }
`;
