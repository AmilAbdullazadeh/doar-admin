import { FC } from "react";
import classnames from "classnames";
import {
    SpaceProps,
    PositionProps,
    LayoutProps,
    TypographyProps,
    BorderProps,
    ColorProps,
} from "@doar/shared/styled";
import {
    StyledCard,
    StyledCardImage,
    StyledCardBody,
    StyledCardHeading,
    StyledCardText,
    StyledCardSubtitle,
    StyledCardLink,
    StyledCardHeader,
    StyledCardFooter,
    StyledCardImgOverlay,
    StyledCardGroup,
    StyledCardDeck,
    StyledCardColumns,
} from "./style";

interface ICardCommonProps {
    className?: string;
}

/**
 * Card Component
 */

interface ICardProps extends LayoutProps, SpaceProps {
    className?: string;
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
}

export const Card: FC<ICardProps> = ({
    children,
    className,
    color,
    ...restProps
}) => {
    return (
        <StyledCard
            className={classnames(className, "card")}
            {...restProps}
            $color={color}
        >
            {children}
        </StyledCard>
    );
};

interface ICardImageProps {
    src: string;
    alt?: string;
    className?: string;
    isTop?: boolean;
    isBottom?: boolean;
}

/**
 * Card Image Component
 */

export const CardImage: FC<ICardImageProps> = ({
    src,
    alt,
    className,
    isTop,
    isBottom,
    ...restProps
}) => {
    const topClass = isTop ? "card-img-top" : "";
    const bottomClass = isBottom ? "card-img-bottom" : "";
    return (
        <StyledCardImage
            src={src}
            alt={alt}
            className={classnames(
                className,
                "card-image",
                topClass,
                bottomClass
            )}
            $isTop={isTop}
            $isBottom={isBottom}
            {...restProps}
        />
    );
};

/**
 * Card Body Component
 */

interface ICardBodyProps
    extends ICardCommonProps,
        SpaceProps,
        PositionProps,
        TypographyProps {}

export const CardBody: FC<ICardBodyProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardBody
            className={classnames(className, "card-body")}
            {...restProps}
        >
            {children}
        </StyledCardBody>
    );
};

/**
 * Card Title Component
 */

interface ICardTitleProps {
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const CardTitle: FC<ICardTitleProps> = ({
    children,
    className,
    as,
    ...restProps
}) => {
    return (
        <StyledCardHeading
            as={as}
            className={classnames(className, "card-title")}
            {...restProps}
        >
            {children}
        </StyledCardHeading>
    );
};

/**
 * Card Text Component
 */

export const CardText: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardText
            className={classnames(className, "card-text")}
            {...restProps}
        >
            {children}
        </StyledCardText>
    );
};

/**
 * Card Subtitle Component
 */

export const CardSubtitle: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardSubtitle
            className={classnames(className, "card-subtitle")}
            {...restProps}
        >
            {children}
        </StyledCardSubtitle>
    );
};

/**
 * Card Link Component
 */

interface ICardLinkProps {
    className?: string;
    path: string;
}

export const CardLink: FC<ICardLinkProps> = ({
    children,
    className,
    path,
    ...restProps
}) => {
    return (
        <StyledCardLink
            path={path}
            className={classnames(className, "card-link")}
            {...restProps}
        >
            {children}
        </StyledCardLink>
    );
};

/**
 * Card Header Component
 */

interface ICardHeaderProps
    extends ICardCommonProps,
        SpaceProps,
        ColorProps,
        TypographyProps {
    variant?: "flexbcenter";
}

export const CardHeader: FC<ICardHeaderProps> = ({
    children,
    className,
    variant,
    ...restProps
}) => {
    return (
        <StyledCardHeader
            className={classnames(className, "card-header")}
            $variant={variant}
            {...restProps}
        >
            {children}
        </StyledCardHeader>
    );
};

/**
 * Card Footer Component
 */

interface ICardFooterProps extends ICardCommonProps, SpaceProps, BorderProps {}

export const CardFooter: FC<ICardFooterProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardFooter
            className={classnames(className, "card-footer")}
            {...restProps}
        >
            {children}
        </StyledCardFooter>
    );
};

/**
 * Card Image Overlay Component
 */

export const CardImageOverlay: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardImgOverlay
            className={classnames(className, "card-img-overlay")}
            {...restProps}
        >
            {children}
        </StyledCardImgOverlay>
    );
};

/**
 * Card Group Component
 */

export const CardGroup: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardGroup
            className={classnames(className, "card-group")}
            {...restProps}
        >
            {children}
        </StyledCardGroup>
    );
};

/**
 * Card Deck Component
 */

export const CardDeck: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardDeck
            className={classnames(className, "card-deck")}
            {...restProps}
        >
            {children}
        </StyledCardDeck>
    );
};

export const CardColumns: FC<ICardCommonProps> = ({
    children,
    className,
    ...restProps
}) => {
    return (
        <StyledCardColumns
            className={classnames(className, "card-columns")}
            {...restProps}
        >
            {children}
        </StyledCardColumns>
    );
};
