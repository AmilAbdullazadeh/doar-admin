import { FC } from "react";
import classnames from "classnames";
import { Tab, TabPanel, TabList } from "react-tabs";
import { StyledTabs, StyledTabContent } from "./style";

interface IProps {
    className?: string;
}

interface ITab extends IProps {
    justified?: boolean;
    vertical?: boolean;
    variation?: "line";
}

export const TabWrap: FC<ITab> = ({
    className,
    children,
    justified,
    vertical,
    variation,
}) => {
    return (
        <StyledTabs
            className={classnames(className, "react-tabs")}
            $justified={justified}
            $vertical={vertical}
            $variation={variation}
        >
            {children}
        </StyledTabs>
    );
};

export const TabContent: FC<IProps> = ({ className, children }) => {
    return (
        <StyledTabContent
            className={classnames(className, "react-tabs__content")}
        >
            {children}
        </StyledTabContent>
    );
};

export { Tab, TabPanel, TabList };
