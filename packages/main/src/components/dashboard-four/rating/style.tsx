import styled, { themeGet, css } from "@doar/shared/styled";
import { CardHeader, ListGroupItem } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    padding-top: 20px;
    padding-bottom: 0px;
    border-bottom: 0;
`;

export const StyledTotalWrap = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    padding-top: 10px;
    align-items: baseline;
    display: flex;
`;

export const StyledTotal = styled.h1`
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-right: 5px;
    margin-bottom: 0px;
`;

export const StyledTotalStars = styled.div`
    font-size: 14px;
`;

interface IState {
    $status: "full" | "empty";
}

export const StyledStar = styled.i<IState>`
    line-height: 0;
    &:not(:first-of-type) {
        margin-left: 3px;
    }
    ${({ $status }) =>
        $status === "full" &&
        css`
            color: ${themeGet("colors.orange")};
        `}
    ${({ $status }) =>
        $status === "empty" &&
        css`
            color: ${themeGet("colors.gray300")};
        `}
`;

export const StyledListItem = styled(({ ...rest }) => (
    <ListGroupItem {...rest} />
))`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 6px;
    padding-bottom: 6px;
    align-items: center;
    display: flex;
`;

StyledListItem.displayName = "ListGroupItem";

export const StyledRateText = styled.strong`
    font-size: 12px;
    font-family: ${themeGet("fonts.rubik")};
`;

export const StyledStars = styled.div`
    margin-left: 10px;
    font-size: 12px;
`;

export const StyledRateCount = styled.div`
    margin-left: auto;
    color: ${themeGet("colors.text2")};
    font-family: ${themeGet("fonts.rubik")};
`;

export const StyledRatePer = styled.div`
    font-family: ${themeGet("fonts.rubik")};
    width: 10%;
    color: ${themeGet("colors.text3")};
    margin-left: 20px;
    text-align: right;
`;
