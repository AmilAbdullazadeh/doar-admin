import styled, {
    space,
    SpaceProps,
    css,
    themeGet,
    border as borderStyles,
    BorderProps,
} from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";

type TColor =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";

export const StyledTableResponsive = styled.div`
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
`;

interface ITableProps extends SpaceProps, BorderProps {
    $theadColor?: TColor;
    $striped?: boolean;
    $bordered?: boolean;
    $hover?: boolean;
    $compact?: boolean;
    $color?: TColor;
    $borderless?: boolean;
}

export const StyledTable = styled(
    ({
        border,
        borderBottomWidth,
        m,
        ml,
        mr,
        mt,
        mb,
        p,
        pl,
        pr,
        pt,
        pb,
        ...props
    }) => <table {...props} />
)<ITableProps>`
    width: 100%;
    margin-bottom: 1rem;
    color: ${themeGet("colors.text")};
    ${({ borderBottomWidth }) =>
        Boolean(borderBottomWidth) &&
        css`
            border-bottom-style: solid;
            border-bottom-color: ${themeGet("colors.border")};
        `}
    ${space};
    ${borderStyles};

    th,
    td {
        white-space: nowrap;
        padding: 8px 10px;
        line-height: 1.5;
        border-top: 1px solid ${themeGet("colors.border")};
        vertical-align: top;
    }
    thead th {
        border-bottom-width: 0;
        vertical-align: bottom;
    }
    thead th,
    tbody th {
        font-weight: 500;
    }
    thead {
        ${(props) =>
            props.$theadColor === "primary" &&
            css`
                background-color: ${themeGet("colors.primary")};
                th {
                    border-top-width: 0px;
                    color: #fff;
                }
            `}

        ${(props) =>
            props.$theadColor === "secondary" &&
            css`
                background-color: ${themeGet("colors.gray600")};
                th {
                    border-top-width: 0px;
                    color: #fff;
                }
            `}

        ${(props) =>
            props.$theadColor === "success" &&
            css`
                background-color: ${themeGet("colors.success")};
                th {
                    border-top-width: 0px;
                    color: #fff;
                }
            `}

        ${(props) =>
            props.$theadColor === "danger" &&
            css`
                background-color: ${themeGet("colors.danger")};
                th {
                    border-top-width: 0px;
                    color: #fff;
                }
            `}
        ${(props) =>
            props.$theadColor === "warning" &&
            css`
                background-color: ${themeGet("colors.warning")};
                th {
                    border-top-width: 0px;
                    color: #fff;
                }
            `}
        ${(props) =>
            props.$theadColor === "info" &&
            css`
                background-color: ${themeGet("colors.info")};
                th {
                    border-top-width: 0px;
                    color: #fff;
                }
            `}
        ${(props) =>
            props.$theadColor === "light" &&
            css`
                background-color: ${themeGet("colors.border")};
                th {
                    color: ${themeGet("colors.gray700")};
                    border-top-color: ${themeGet("colors.border")};
                }
            `}
        ${(props) =>
            props.$theadColor === "dark" &&
            css`
                background-color: ${themeGet("colors.dark")};
                th {
                    color: #fff;
                    border-top-color: ${themeGet("colors.bayoux")};
                }
            `}
    }

    ${(props) =>
        props.$striped === true &&
        css`
            tbody {
                tr:nth-of-type(2n + 1) {
                    background-color: ${themeGet("colors.athens3")};
                }
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        props.$striped === true &&
        css`
            tbody {
                tr:nth-of-type(2n + 1) {
                    background-color: ${themeGet("colors.darklighten5")};
                }
                th,
                td {
                    border-top: 0;
                }
            }
        `}

    ${(props) =>
        props.$bordered === true &&
        css`
            th,
            td {
                border: 1px solid ${themeGet("colors.border")};
            }
        `}
    ${(props) =>
        props.$hover === true &&
        css`
            tbody tr {
                &:hover {
                    background-color: ${themeGet("colors.athens")};
                    color: ${themeGet("colors.text")};
                }
            }
        `}
    ${(props) =>
        props.$compact === true &&
        css`
            th,
            td {
                padding: 5px 10px;
            }
        `}

    ${(props) =>
        props.$color === "primary" &&
        css`
            thead {
                color: #fff;
                background-color: ${themeGet("colors.primary")};
                th {
                    border-top-width: 0;
                }
            }
            tbody {
                tr {
                    background-color: ${tinycolor2(
                        themeGet("colors.primary")(props)
                    )
                        .lighten(48)
                        .toString()};
                }
                tr:first-child {
                    td,
                    th {
                        border-top-width: 0;
                    }
                }
                tr {
                    th,
                    td {
                        border-top-color: rgba(255, 255, 255, 0.45);
                    }
                }
            }
        `}
    ${(props) =>
        props.$color === "primary" &&
        props.$striped === true &&
        css`
            tbody {
                tr {
                    &:nth-of-type(2n + 1) {
                        background-color: ${tinycolor2(
                            themeGet("colors.primary")(props)
                        )
                            .lighten(48)
                            .darken(3)
                            .toString()};
                    }
                }
            }
        `}
    ${(props) =>
        props.$color === "primary" &&
        props.$hover === true &&
        css`
            tbody {
                tr {
                    &:hover {
                        background-color: ${tinycolor2(
                            themeGet("colors.primary")(props)
                        )
                            .lighten(48)
                            .darken(6)
                            .toString()};
                    }
                }
            }
        `}


    ${({ $color }) =>
        $color === "secondary" &&
        css`
            thead {
                color: #fff;
                background-color: ${themeGet("colors.gray600")};
                th {
                    border-top-width: 0;
                }
            }
            tbody {
                tr {
                    background-color: ${themeGet("colors.gray200")};
                }
                tr:first-child {
                    td,
                    th {
                        border-top-width: 0;
                    }
                }
                tr {
                    th,
                    td {
                        border-top-color: rgba(255, 255, 255, 0.45);
                    }
                }
            }
            ${(props) =>
                props.theme.name === "dark" &&
                css`
                    tbody {
                        tr {
                            background-color: ${themeGet("colors.gray900")};
                        }
                    }
                `}
        `}
    ${(props) =>
        props.$color === "secondary" &&
        props.$striped === true &&
        css`
            tbody {
                tr {
                    &:nth-of-type(2n + 1) {
                        background-color: ${tinycolor2(
                            themeGet("colors.gray200")(props)
                        )
                            .darken(3)
                            .toString()};
                    }
                }
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        props.$color === "secondary" &&
        props.$striped === true &&
        css`
            tbody {
                tr {
                    &:nth-of-type(2n + 1) {
                        background-color: ${themeGet("colors.gray700")};
                    }
                }
            }
        `}
    ${(props) =>
        props.$color === "secondary" &&
        props.$hover === true &&
        css`
            tbody {
                tr {
                    &:hover {
                        background-color: ${tinycolor2(
                            themeGet("colors.gray200")(props)
                        )
                            .darken(6)
                            .toString()};
                        th,
                        td {
                            color: #fff;
                        }
                    }
                }
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        props.$color === "secondary" &&
        props.$hover === true &&
        css`
            tbody {
                tr {
                    &:hover {
                        background-color: ${themeGet("colors.darklighten8")};
                    }
                }
            }
        `}

    ${(props) =>
        props.$color === "success" &&
        css`
            thead {
                color: #fff;
                background-color: ${themeGet("colors.success")};
                th {
                    border-top-width: 0;
                }
            }
            tbody {
                tr {
                    background-color: ${tinycolor2(
                        themeGet("colors.success")(props)
                    )
                        .lighten(56)
                        .toString()};
                }
                tr:first-child {
                    td,
                    th {
                        border-top-width: 0;
                    }
                }
                tr {
                    th,
                    td {
                        border-top-color: rgba(255, 255, 255, 0.45);
                    }
                }
            }
        `}

    ${(props) =>
        props.$color === "success" &&
        props.$striped === true &&
        css`
            tbody {
                tr {
                    &:nth-of-type(2n + 1) {
                        background-color: ${tinycolor2(
                            themeGet("colors.success")(props)
                        )
                            .lighten(56)
                            .darken(3)
                            .toString()};
                    }
                }
            }
        `}
            ${(props) =>
        props.$color === "success" &&
        props.$hover === true &&
        css`
            tbody {
                tr {
                    &:hover {
                        background-color: ${tinycolor2(
                            themeGet("colors.success")(props)
                        )
                            .lighten(56)
                            .darken(6)
                            .toString()};
                    }
                }
            }
        `}



    ${(props) =>
        props.$color === "danger" &&
        css`
            thead {
                color: #fff;
                background-color: ${themeGet("colors.danger")};
                th {
                    border-top-width: 0;
                }
            }
            tbody {
                tr {
                    background-color: ${tinycolor2(
                        themeGet("colors.danger")(props)
                    )
                        .lighten(45)
                        .toString()};
                }
                tr:first-child {
                    td,
                    th {
                        border-top-width: 0;
                    }
                }
                tr {
                    th,
                    td {
                        border-top-color: rgba(255, 255, 255, 0.45);
                    }
                }
            }
        `}
    
    ${(props) =>
        props.$color === "danger" &&
        props.$striped === true &&
        css`
            tbody {
                tr {
                    &:nth-of-type(2n + 1) {
                        background-color: ${tinycolor2(
                            themeGet("colors.danger")(props)
                        )
                            .lighten(45)
                            .darken(3)
                            .toString()};
                    }
                }
            }
        `}
    ${(props) =>
        props.$color === "danger" &&
        props.$hover === true &&
        css`
            tbody {
                tr {
                    &:hover {
                        background-color: ${tinycolor2(
                            themeGet("colors.danger")(props)
                        )
                            .lighten(45)
                            .darken(6)
                            .toString()};
                    }
                }
            }
        `}


    ${(props) =>
        props.$color === "warning" &&
        css`
            thead {
                color: #fff;
                background-color: ${themeGet("colors.warning")};
                th {
                    border-top-width: 0;
                }
            }
            tbody {
                tr {
                    background-color: ${tinycolor2(
                        themeGet("colors.orange")(props)
                    )
                        .lighten(45)
                        .toString()};
                }
                tr:first-child {
                    td,
                    th {
                        border-top-width: 0;
                    }
                }
                tr {
                    th,
                    td {
                        border-top-color: rgba(255, 255, 255, 0.45);
                    }
                }
            }
        `}
        
    ${(props) =>
        props.$color === "warning" &&
        props.$striped === true &&
        css`
            tbody {
                tr {
                    &:nth-of-type(2n + 1) {
                        background-color: ${tinycolor2(
                            themeGet("colors.orange")(props)
                        )
                            .lighten(45)
                            .darken(3)
                            .toString()};
                    }
                }
            }
        `}
    ${(props) =>
        props.$color === "warning" &&
        props.$hover === true &&
        css`
            tbody {
                tr {
                    &:hover {
                        background-color: ${tinycolor2(
                            themeGet("colors.orange")(props)
                        )
                            .lighten(45)
                            .darken(6)
                            .toString()};
                    }
                }
            }
        `}




    ${(props) =>
        props.$color === "info" &&
        css`
            thead {
                color: #fff;
                background-color: ${themeGet("colors.cyan")};
                th {
                    border-top-width: 0;
                }
            }
            tbody {
                tr {
                    background-color: ${tinycolor2(
                        themeGet("colors.cyan")(props)
                    )
                        .lighten(55)
                        .toString()};
                }
                tr:first-child {
                    td,
                    th {
                        border-top-width: 0;
                    }
                }
                tr {
                    th,
                    td {
                        border-top-color: rgba(255, 255, 255, 0.45);
                    }
                }
            }
        `}
            
    ${(props) =>
        props.$color === "info" &&
        props.$striped === true &&
        css`
            tbody {
                tr {
                    &:nth-of-type(2n + 1) {
                        background-color: ${tinycolor2(
                            themeGet("colors.cyan")(props)
                        )
                            .lighten(55)
                            .darken(3)
                            .toString()};
                    }
                }
            }
        `}
    ${(props) =>
        props.$color === "info" &&
        props.$hover === true &&
        css`
            tbody {
                tr {
                    &:hover {
                        background-color: ${tinycolor2(
                            themeGet("colors.cyan")(props)
                        )
                            .lighten(55)
                            .darken(6)
                            .toString()};
                    }
                }
            }
        `}




    ${(props) =>
        props.$color === "light" &&
        css`
            thead {
                color: ${themeGet("colors.text")};
                background-color: ${themeGet("colors.gray200")};
                th {
                    border-top-width: 0;
                }
            }
            tbody {
                tr {
                    background-color: ${tinycolor2(
                        themeGet("colors.gray200")(props)
                    )
                        .lighten(7)
                        .toString()};
                }
                tr:first-child {
                    td,
                    th {
                        border-top-width: 0;
                    }
                }
                tr {
                    th,
                    td {
                        border-top-color: rgba(255, 255, 255, 0.45);
                    }
                }
            }
        `}
                
    ${(props) =>
        props.$color === "light" &&
        props.$striped === true &&
        css`
            tbody {
                tr {
                    &:nth-of-type(2n + 1) {
                        background-color: ${tinycolor2(
                            themeGet("colors.gray200")(props)
                        )
                            .lighten(7)
                            .darken(3)
                            .toString()};
                    }
                }
            }
        `}
    ${(props) =>
        props.$color === "light" &&
        props.$hover === true &&
        css`
            tbody {
                tr {
                    &:hover {
                        background-color: ${tinycolor2(
                            themeGet("colors.gray200")(props)
                        )
                            .lighten(7)
                            .darken(6)
                            .toString()};
                    }
                }
            }
        `}


    ${(props) =>
        props.$color === "dark" &&
        css`
            thead {
                color: #fff;
                background-color: ${themeGet("colors.gray800")};
                th {
                    border-top-width: 0;
                }
            }
            tbody {
                tr {
                    background-color: ${themeGet("colors.gray200")};
                }
                tr:first-child {
                    td,
                    th {
                        border-top-width: 0;
                    }
                }
                tr {
                    th,
                    td {
                        border-top-color: rgba(255, 255, 255, 0.45);
                    }
                }
            }
        `}
                    
    ${(props) =>
        props.$color === "dark" &&
        props.$striped === true &&
        css`
            tbody {
                tr {
                    &:nth-of-type(2n + 1) {
                        background-color: ${tinycolor2(
                            themeGet("colors.gray200")(props)
                        )
                            .darken(3)
                            .toString()};
                    }
                }
            }
        `}
    ${(props) =>
        props.$color === "dark" &&
        props.$hover === true &&
        css`
            tbody {
                tr {
                    &:hover {
                        background-color: ${tinycolor2(
                            themeGet("colors.gray200")(props)
                        )
                            .darken(6)
                            .toString()};
                    }
                }
            }
        `}

    ${(props) =>
        props.$borderless === true &&
        css`
            th,
            td,
            thead th,
            tbody + tbody {
                border: 0;
            }
        `}
    
    tr th, tr td {
        ${(props) =>
            props.theme.name === "cool" &&
            css`
                border-color: ${tinycolor2(themeGet("colors.skinUi01")(props))
                    .lighten(46)
                    .toString()};
            `}
    }
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            color: inherit;
        `}
`;
