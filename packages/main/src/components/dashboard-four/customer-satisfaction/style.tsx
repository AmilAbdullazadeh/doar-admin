/* eslint-disable @typescript-eslint/restrict-template-expressions */
import styled, {
    color as colorStyle,
    ColorProps,
    typography,
    TypographyProps,
    border,
    BorderProps,
    themeGet,
    css,
} from "@doar/shared/styled";
import { CardHeader, Table } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    padding-bottom: 0px;
    border-bottom: 0;
    padding-top: 20px;
`;

export const StyledDiv = styled.div`
    font-family: "Rubik", sans-serif;
    align-items: baseline;
    display: flex;
`;

export const StyledNumb = styled.h1`
    font-size: 40px;
    line-height: 1.1;
    letter-spacing: -1px;
    font-weight: 400;
    margin-bottom: 5px;
    margin-right: 5px;
`;

export const StyledRate = styled.p`
    font-size: 11px;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
    span {
        font-weight: 500;
    }
    i {
        font-size: 9px;
    }
`;

export const StyledTitle = styled.h6`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: ${themeGet("colors.text2")};
    margin-bottom: 15px;
`;

export const StyledProgress = styled.div`
    opacity: 0.7;
    margin-bottom: 15px;
    height: 10px;
    background-color: transparent;
    display: flex;
    border-radius: 0.25rem;
    overflow: hidden;
    font-size: 0.65625rem;
`;

interface IProgress extends ColorProps {
    $width: number;
}

export const StyledProgressBar = styled(({ ...rest }) => (
    <div {...rest} />
))<IProgress>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    transition: width 0.6s ease;
    width: ${({ $width }) => `${$width}%`};
    &:not(:first-of-type) {
        border-left: 1px solid #fff;
    }
    ${colorStyle};
`;

export const StyledTable = styled(({ ...rest }) => <Table {...rest} />)`
    font-size: 13px;
    tbody {
        tr:first-of-type {
            td {
                border-top: 0;
            }
        }
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            border-top-color: rgba(255, 255, 255, 0.06);
        `}
`;

interface ITD extends ColorProps, TypographyProps {}

export const StyledTD = styled(
    ({ fontWeight, fontFamily, textAlign, color, ...rest }) => <td {...rest} />
)<ITD>`
    line-height: 1 !important;
    padding: 8px 0 !important;
    &:first-of-type {
        padding-left: 0 !important;
    }
    ${typography};
    ${colorStyle};
`;

export const StyledBullet = styled.div<BorderProps>`
    opacity: 0.7;
    height: 12px;
    width: 12px;
    border-width: 3px;
    border-style: solid;
    border-radius: 50%;
    ${border}
`;
