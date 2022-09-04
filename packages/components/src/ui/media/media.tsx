import React from "react";
import classnames from "classnames";
import { SpaceProps, FlexboxProps, LayoutProps } from "@doar/shared/styled";
import { StyledMedia, StyledMediaBody, StyledMediaLeft } from "./style";

interface IMediaProps extends SpaceProps, FlexboxProps, LayoutProps {
    as?: React.ElementType;
    className?: string;
}

export const Media: React.FC<IMediaProps> = ({
    children,
    as,
    className,
    ...restProps
}) => {
    return (
        <StyledMedia
            className={classnames(className, "media")}
            as={as}
            $el={as}
            {...restProps}
        >
            {children}
        </StyledMedia>
    );
};

interface IImgProps {
    alignMent?: "top" | "middle" | "end";
}

export const MediaLeft: React.FC<IImgProps> = ({
    children,
    alignMent,
    ...restProps
}) => {
    return (
        <StyledMediaLeft $alignMent={alignMent} {...restProps}>
            {children}
        </StyledMediaLeft>
    );
};

interface IMediaBodyProps extends SpaceProps {
    className?: string;
}

export const MediaBody: React.FC<IMediaBodyProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledMediaBody
            className={classnames(className, "media-body")}
            {...restProps}
        >
            {children}
        </StyledMediaBody>
    );
};
