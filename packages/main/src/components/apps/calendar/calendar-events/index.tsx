import { FC } from "react";
import { IEvent } from "@doar/shared/types";
import Label from "../label";
import { StyledWrap, StyledNav, StyledItem, StyledBullet } from "./style";
import { useAppSelector } from "../../../../redux/hooks";

const CalendarEvents: FC = () => {
    const events: IEvent[] = useAppSelector(
        (state) => state?.events.eventSources
    );

    return (
        <StyledWrap>
            <Label mb="10px" pl="10px">
                My Calendar
            </Label>
            <StyledNav>
                {events.map((ev) => (
                    <StyledItem
                        key={ev.category}
                        $color={ev.borderColor}
                        $type="calendar"
                        $show
                    >
                        <StyledBullet /> {ev.category} Events
                    </StyledItem>
                ))}
            </StyledNav>
        </StyledWrap>
    );
};

export default CalendarEvents;
