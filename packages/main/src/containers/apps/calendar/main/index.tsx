/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import { FC, useEffect, useRef, useState } from "react";
import FullCalendar, { ViewContentArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import moment from "moment";
import { IEvent } from "@doar/shared/types";
import { useAppSelector } from "../../../../redux/hooks";
import CreateEvent from "../../../../components/apps/calendar/create-event";
import EventDetails, {
    IEventDetails,
} from "../../../../components/apps/calendar/event-details";
import { StyledWrap } from "./style";

const Main: FC = () => {
    const events: IEvent[] = useAppSelector(
        (state) => state.events.eventSources
    );
    const { sidebar } = useAppSelector((state) => state.ui);

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [eventDetails, setEventDetails] = useState({} as IEventDetails);
    const [selectDate, setSelectDate] = useState<{ start: Date; end: Date }>({
        start: new Date(),
        end: new Date(),
    });

    const calendarRef = useRef({} as any);
    useEffect(() => {
        // change view to week when in tablet
        if (window.matchMedia("(min-width: 320px)").matches) {
            calendarRef?.current?.getApi().changeView("listMonth");
        }

        // change view to month when in desktop
        if (window.matchMedia("(min-width: 992px)").matches) {
            calendarRef?.current?.getApi().changeView("dayGridMonth");
        }
    }, []);

    const eventRender = (info: any) => {
        const { el, event, view, borderColor } = info;
        const mainEl = el.querySelector(".fc-event-main-frame");
        const desc: string | undefined = event._def.extendedProps.description;
        if (desc && mainEl) {
            mainEl.insertAdjacentHTML(
                "beforeend",
                `<span class="fc-event-desc">${desc}</span>`
            );
        }
        if (view.type === "listMonth" || view.type === "listWeek") {
            const dates = document.querySelectorAll(".fc-list-day-text");
            const title = el.querySelector(".fc-list-event-title");
            if (desc && title) {
                title.insertAdjacentHTML(
                    "beforeend",
                    `<span class="fc-list-event-desc">${desc}</span>`
                );
            }

            el.querySelector(".fc-list-event-time").style.color = borderColor;
            el.querySelector(
                ".fc-list-event-time"
            ).style.borderColor = borderColor;
            el.querySelector(
                ".fc-list-event-title"
            ).style.borderColor = borderColor;
            el.style.borderColor = borderColor;
            dates.forEach((date) => {
                const item = date;
                const text = date.textContent?.split(" ");
                if (!text) return;
                const now = moment().format("DD");
                if (text.length > 1) {
                    item.innerHTML = `${text[1]}<span>${text[0]}</span>`;
                    if (now === text[0]) {
                        item.classList.add("now");
                    }
                }
            });
        }
    };

    const dayHeaderFormat = (info: any) => {
        const {
            el,
            date,
            view: { type },
        } = info;
        if (type === "timeGridWeek") {
            const day: string = moment(date).format("DDD");
            const dayDate: string = moment(date).format("DD");
            const mainEl = el.querySelector(".fc-col-header-cell-cushion");
            mainEl.innerHTML = `<span>${day}</span><span>${dayDate}</span>`;
        }
    };

    const handleSize = (event: ViewContentArg): void => {
        const contentAPi = event.view.calendar;
        const { type } = event.view;
        if (type === "listWeek") {
            if (window.matchMedia("(min-width: 992px)").matches) {
                contentAPi.changeView("dayGridMonth");
            } else {
                contentAPi.changeView("listWeek");
            }
        }
    };

    const handleCreateModal = () => {
        setShowCreateModal((prev) => !prev);
    };

    const handleDetailsModal = () => {
        setShowDetailsModal((prev) => !prev);
    };

    const handleEventClick = (info: any): void => {
        const { id } = info.event;
        const {
            category,
        } = info.event.source.internalEventSource.extendedProps;
        const bg = info.event.source.internalEventSource.ui.borderColor;
        const { meta } = info.event.source.internalEventSource;
        const selectedEvent = meta.find(
            (item: { id: string }) => item.id === id
        );

        setEventDetails({
            category,
            bg,
            event: selectedEvent,
        });
        handleDetailsModal();
    };

    const handleDateSelect = (info: any): void => {
        setSelectDate({ start: info.start, end: info.end });
        handleCreateModal();
    };

    return (
        <>
            <StyledWrap $showSidebar={sidebar}>
                <FullCalendar
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin,
                    ]}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                    }}
                    initialView="dayGridMonth"
                    navLinks
                    selectable
                    selectLongPressDelay={100}
                    editable
                    nowIndicator
                    views={{
                        timeGridWeek: {
                            dayHeaderDidMount: dayHeaderFormat,
                        },
                        timeGridDay: {
                            dayHeaders: false,
                        },
                        listWeek: {
                            listDaySideFormat: false,
                            listDayFormat: {
                                day: "2-digit",
                                weekday: "short",
                            },
                        },
                        listMonth: {
                            listDaySideFormat: false,
                            listDayFormat: {
                                day: "2-digit",
                                weekday: "short",
                            },
                        },
                    }}
                    eventDisplay="block"
                    eventSources={events}
                    eventDidMount={eventRender}
                    ref={calendarRef}
                    windowResize={handleSize}
                    eventClick={handleEventClick}
                    select={handleDateSelect}
                />
            </StyledWrap>
            <CreateEvent
                show={showCreateModal}
                onClose={handleCreateModal}
                currentDate={selectDate}
            />
            <EventDetails
                show={showDetailsModal}
                onClose={handleDetailsModal}
                details={eventDetails}
            />
        </>
    );
};

export default Main;
