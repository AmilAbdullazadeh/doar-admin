import { FC } from "react";
import { SpaceProps } from "@doar/shared/styled";
import { StyledList, StyledItem } from "./style";

const List: FC<SpaceProps> = ({ children, ...rest }) => {
    return <StyledList {...rest}>{children}</StyledList>;
};

export default List;

export const ListItem: FC = ({ children }) => {
    return <StyledItem>{children}</StyledItem>;
};
