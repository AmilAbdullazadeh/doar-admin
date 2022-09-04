import { FC } from "react";
import classNames from "classnames";
import { SpaceProps, BorderProps, TypographyProps } from "@doar/shared/styled";
import { StyledContainer, StyledRow, StyledCol } from "./style";
import { ColProps, RowProps } from "./types";

interface IProps extends SpaceProps {
    className?: string;
}

export const Container: FC<IProps> = ({ className, ...props }) => {
    return <StyledContainer className={className} {...props} />;
};

interface IRowProps extends IProps, RowProps {
    gutters?: number;
    noGutter?: boolean;
}

export const Row: FC<IRowProps> = ({
    className,
    gutters,
    noGutter,
    ...props
}) => {
    return (
        <StyledRow
            $gutters={gutters}
            $noGutter={noGutter}
            className={className}
            {...props}
        />
    );
};

interface IColProps extends IProps, ColProps, BorderProps, TypographyProps {}

export const Col: FC<IColProps> = ({ className, ...props }) => {
    const { smOrder, mdOrder, lgOrder, xlOrder } = props;
    const restProps = props;
    let orderSm;
    let orderMd;
    let orderlg;
    let orderXl;

    if (smOrder === 0 || mdOrder === 0 || lgOrder === 0 || xlOrder === 0) {
        if (smOrder === 0) {
            orderSm = `order-sm-${smOrder}`;
            delete restProps.smOrder;
        }
        if (mdOrder === 0) {
            orderMd = `order-md-${mdOrder}`;
            delete restProps.mdOrder;
        }
        if (lgOrder === 0) {
            orderlg = `order-lg-${lgOrder}`;
            delete restProps.lgOrder;
        }
        if (xlOrder === 0) {
            orderXl = `order-xl-${xlOrder}`;
            delete restProps.xlOrder;
        }
    }

    return (
        <StyledCol
            className={classNames(
                className,
                orderSm,
                orderMd,
                orderlg,
                orderXl
            )}
            {...restProps}
        />
    );
};
