import { Children, FC, ReactChild, ReactText, FunctionComponent } from "react";
import classnames from "classnames";
import {
    LayoutProps,
    ColorProps,
    TypographyProps,
    SpaceProps,
} from "@doar/shared/styled";

import { StyledAvatar, StyledInitialText } from "./style";

interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
}

interface IAvatar extends LayoutProps, SpaceProps, IProps {
    /**
     * Default size is `38x38`
     */
    size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    /**
     * Default size is `square`
     */
    shape?: "circle" | "rounded" | "square";
    /**
     * An avatar can have a status indicator to indicate users availability.
     */
    status?: "online" | "offline";
}

type IChild = Exclude<ReactChild, ReactText>;

export const Avatar: FC<IAvatar> = ({
    size,
    shape,
    status,
    className,
    children,
    ...restProps
}) => {
    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "AvatarInitial") {
                return (
                    <child.type size={size} shape={shape} {...child.props} />
                );
            }
            return <child.type {...child.props} />;
        }
        return null;
    });
    return (
        <StyledAvatar
            $size={size}
            $shape={shape}
            $status={status}
            className={classnames(className, "avatar")}
            {...restProps}
        >
            {RenderChild}
        </StyledAvatar>
    );
};

Avatar.defaultProps = {
    size: "default",
    shape: "circle",
};

interface IAvatarText extends IProps, ColorProps, TypographyProps {
    size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    shape?: "circle" | "rounded" | "square";
}

export const AvatarInitial: FC<IAvatarText> = ({
    children,
    size,
    shape,
    className,
    ...restProps
}) => {
    return (
        <StyledInitialText
            $size={size}
            $shape={shape}
            className={classnames(className, "avatar-initial")}
            {...restProps}
        >
            {children}
        </StyledInitialText>
    );
};
