import { ChangeEvent, FC } from "react";
import { Select } from "@doar/components";

interface IProps {
    id: string;
    name: string;
    value?: string;
    onChange?: (
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => void;
}

const TimePicker: FC<IProps> = ({ id, name, value, onChange }) => {
    return (
        <Select id={id} name={name} value={value} onChange={onChange}>
            <option value="">Select Time</option>
            <option value="00:00">12:00AM</option>
            <option value="00:15">12:15AM</option>
            <option value="00:30">12:30AM</option>
            <option value="00:45">12:45AM</option>
            <option value="01:00">01:00AM</option>
            <option value="01:15">01:15AM</option>
            <option value="01:30">01:30AM</option>
            <option value="01:45">01:45AM</option>
            <option value="02:00">02:00AM</option>
            <option value="02:15">02:15AM</option>
            <option value="02:30">02:30AM</option>
            <option value="02:45">02:45AM</option>
            <option value="03:00">03:00AM</option>
            <option value="03:15">03:15AM</option>
            <option value="03:30">03:30AM</option>
            <option value="03:45">03:45AM</option>
            <option value="04:00">04:00AM</option>
            <option value="04:15">04:15AM</option>
            <option value="04:30">04:30AM</option>
            <option value="04:45">04:45AM</option>
            <option value="05:00">05:00AM</option>
            <option value="05:15">05:15AM</option>
            <option value="05:30">05:30AM</option>
            <option value="05:45">05:45AM</option>
            <option value="06:00">06:00AM</option>
            <option value="06:15">06:15AM</option>
            <option value="06:30">06:30AM</option>
            <option value="06:45">06:45AM</option>
            <option value="07:00">07:00AM</option>
            <option value="07:15">07:15AM</option>
            <option value="07:30">07:30AM</option>
            <option value="07:45">07:45AM</option>
            <option value="08:00">08:00AM</option>
            <option value="08:15">08:15AM</option>
            <option value="08:30">08:30AM</option>
            <option value="08:45">08:45AM</option>
            <option value="09:00">09:00AM</option>
            <option value="09:15">09:15AM</option>
            <option value="09:30">09:30AM</option>
            <option value="09:45">09:45AM</option>
            <option value="10:00">10:00AM</option>
            <option value="10:15">10:15AM</option>
            <option value="10:30">10:30AM</option>
            <option value="10:45">10:45AM</option>
            <option value="11:00">11:00AM</option>
            <option value="11:15">11:15AM</option>
            <option value="11:30">11:30AM</option>
            <option value="11:45">11:45AM</option>
            <option value="12:00">12:00PM</option>
            <option value="12:15">12:15PM</option>
            <option value="12:30">12:30PM</option>
            <option value="12:45">12:45PM</option>
            <option value="13:00">01:00PM</option>
            <option value="13:15">01:15PM</option>
            <option value="13:30">01:30PM</option>
            <option value="13:45">01:45PM</option>
            <option value="14:00">02:00PM</option>
            <option value="14:15">02:15PM</option>
            <option value="14:30">02:30PM</option>
            <option value="14:45">02:45PM</option>
            <option value="15:00">03:00PM</option>
            <option value="15:15">03:15PM</option>
            <option value="15:30">03:30PM</option>
            <option value="15:45">03:45PM</option>
            <option value="16:00">04:00PM</option>
            <option value="16:15">04:15PM</option>
            <option value="16:30">04:30PM</option>
            <option value="16:45">04:45PM</option>
            <option value="17:00">05:00PM</option>
            <option value="17:15">05:15PM</option>
            <option value="17:30">05:30PM</option>
            <option value="17:45">05:45PM</option>
            <option value="18:00">06:00PM</option>
            <option value="18:15">06:15PM</option>
            <option value="18:30">06:30PM</option>
            <option value="18:45">06:45PM</option>
            <option value="19:00">07:00PM</option>
            <option value="19:15">07:15PM</option>
            <option value="19:30">07:30PM</option>
            <option value="19:45">07:45PM</option>
            <option value="20:00">08:00PM</option>
            <option value="20:15">08:15PM</option>
            <option value="20:30">08:30PM</option>
            <option value="20:45">08:45PM</option>
            <option value="21:00">09:00PM</option>
            <option value="21:15">09:15PM</option>
            <option value="21:30">09:30PM</option>
            <option value="21:45">09:45PM</option>
            <option value="22:00">10:00PM</option>
            <option value="22:15">10:15PM</option>
            <option value="22:30">10:30PM</option>
            <option value="22:45">10:45PM</option>
            <option value="23:00">11:00PM</option>
            <option value="23:15">11:15PM</option>
            <option value="23:30">11:30PM</option>
            <option value="23:45">11:45PM</option>
        </Select>
    );
};

export default TimePicker;
