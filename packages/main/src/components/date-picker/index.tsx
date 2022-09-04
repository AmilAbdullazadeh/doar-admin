import { FC, useState, useEffect } from "react";
import moment from "moment";
import { Input } from "@doar/components";
import { StyledDatePicker } from "./style";
import Calendar from "../calendar";

moment.suppressDeprecationWarnings = true;

interface IProps {
    name: string;
    id: string;
    placeholder?: string;
    getDate: (name: string, date: string) => void;
    currentDate?: Date;
}

const DatePicker: FC<IProps> = ({
    name,
    id,
    placeholder,
    getDate,
    currentDate,
}) => {
    const [value, setValue] = useState<Date | Date[]>(new Date());
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!currentDate) return;
        setValue(currentDate);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const dateChangeHandler = (date: Date | Date[]) => {
        setValue(date);
        getDate(name, moment(date.toString()).format("ll"));
    };

    const inputChangeHandler = () => {
        setValue(value);
    };

    const inputClickHandler = () => {
        setShow(true);
    };
    const inputBlurHandler = () => {
        setShow(false);
    };

    return (
        <StyledDatePicker $show={show}>
            <Input
                name={name}
                id={id}
                placeholder={placeholder}
                value={moment(value.toString()).format("ll")}
                onChange={inputChangeHandler}
                onClick={inputClickHandler}
                onBlur={inputBlurHandler}
            />
            <Calendar value={value} onChange={dateChangeHandler} />
        </StyledDatePicker>
    );
};

export default DatePicker;
