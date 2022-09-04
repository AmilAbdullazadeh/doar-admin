import { FC } from "react";
import ReactCalendar from "react-calendar";
import { StyledWrap } from "./style";

interface IProps {
    className?: string;
    value?: Date | Date[] | null | undefined;
    onChange?: (date: Date | Date[]) => void;
}

const Calendar: FC<IProps> = ({ className, value, onChange }) => {
    const formatShortWeekday = (locale: string, date: Date): string => {
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const d = new Date(date);
        const dayName = days[d.getDay()].substring(0, 2);
        return dayName;
    };
    const formatDay = (locale: string, date: Date): string => {
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, "0");
        return day;
    };
    const classes = className ? `${className} calendar` : "calendar";
    return (
        <StyledWrap className={classes}>
            <ReactCalendar
                value={value}
                onChange={onChange}
                calendarType="US"
                prevLabel={<i className="fa fa-chevron-left" />}
                nextLabel={<i className="fa fa-chevron-right" />}
                formatShortWeekday={formatShortWeekday}
                formatDay={formatDay}
            />
        </StyledWrap>
    );
};

export default Calendar;
