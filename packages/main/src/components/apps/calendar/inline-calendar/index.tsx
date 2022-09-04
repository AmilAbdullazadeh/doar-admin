import { FC, useState } from "react";
import Calendar from "../../../calendar";
import { StyledWrap } from "./style";

const InlineCalendar: FC = () => {
    const [value, setValue] = useState(new Date());
    const changeHandler = () => {
        setValue(new Date());
    };
    return (
        <StyledWrap>
            <Calendar onChange={changeHandler} value={value} />
        </StyledWrap>
    );
};

export default InlineCalendar;
