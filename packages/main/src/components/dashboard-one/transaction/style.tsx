/* eslint-disable jsx-a11y/anchor-has-content */
import styled, {
    themeGet,
    space,
    SpaceProps,
    device,
    css,
} from "@doar/shared/styled";
import { CardHeader, CardFooter } from "@doar/components";

export const StyledHeader = styled(({ ...props }) => <CardHeader {...props} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledHeaderRight = styled.div`
    font-size: 18px;
    display: flex;
`;

export const StyledIcon = styled(({ m, ml, mr, mt, mb, ...rest }) => (
    <a {...rest} />
))<SpaceProps>`
    color: ${themeGet("colors.text3")};
    line-height: 0;
    ${space};
`;

export const StyledListMiddle = styled.div`
    ${device.small} {
        padding-left: 10px;
    }
`;

export const StyledListTitle = styled.p`
    font-weight: 500;
    margin-bottom: 0px;
    font-size: 13px;
`;

export const StyledListText = styled.small`
    color: ${themeGet("colors.text3")};
    font-size: 12px;
    margin-bottom: 0px;
`;

export const StyledListEnd = styled.div`
    margin-left: auto;
    text-align: right;
`;

export const StyledListTrans = styled.p`
    font-weight: 500;
    margin-bottom: 0px;
    font-size: 13px;
`;

interface ITransStatus {
    $status: "success" | "declined" | "pending";
}

export const StyledListStatus = styled.small<ITransStatus>`
    font-size: 12px;
    ${({ $status }) =>
        $status === "success" &&
        css`
            color: ${themeGet("colors.success")};
        `}
    ${({ $status }) =>
        $status === "pending" &&
        css`
            color: ${themeGet("colors.info")};
        `}
    ${({ $status }) =>
        $status === "declined" &&
        css`
            color: ${themeGet("colors.danger")};
        `}
`;

export const StyledFooter = styled(({ ...props }) => <CardFooter {...props} />)`
    text-align: center;
    font-size: 13px;
`;

export const StyledFooterLink = styled.a`
    color: ${themeGet("colors.text3")};
    i {
        margin-left: 5px;
    }
`;
