import { FC } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { StyledWrapper } from "./style";

const Wrapper: FC = ({ children }) => {
    const { sidebar, isBody } = useAppSelector((state) => state.ui);
    return (
        <StyledWrapper
            $showSidebar={sidebar}
            $showBody={isBody}
            className="main-wrapper"
        >
            {children}
        </StyledWrapper>
    );
};

export default Wrapper;
