import { FC, useState } from "react";
import { Search, Plus } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Button } from "@doar/components";
import ReactTooltip from "react-tooltip";
import { StyledWrap, StyledHeader, StyledBody } from "./style";
import SearchForm from "../../../../components/apps/calendar/search";
import InlineCalendar from "../../../../components/apps/calendar/inline-calendar";
import CalendarEvents from "../../../../components/apps/calendar/calendar-events";
import UpcomingEvents from "../../../../components/apps/calendar/upcoming-events";
import CreateEvent from "../../../../components/apps/calendar/create-event";
import { useAppSelector } from "../../../../redux/hooks";

const Sidebar: FC = () => {
    const { sidebar } = useAppSelector((state) => state.ui);
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal((prev) => !prev);
    };
    return (
        <>
            <StyledWrap $show={sidebar}>
                <StyledHeader>
                    <Search className="search" />
                    <SearchForm />
                    <Button
                        size="sm"
                        iconButton
                        onClick={handleModal}
                        data-tip="Create new event"
                    >
                        <div>
                            <Plus className="plus" />
                        </div>
                    </Button>
                    <ReactTooltip place="bottom" effect="solid" />
                </StyledHeader>
                <PerfectScrollbar>
                    <StyledBody>
                        <InlineCalendar />
                        <CalendarEvents />
                        <UpcomingEvents />
                    </StyledBody>
                </PerfectScrollbar>
            </StyledWrap>
            <CreateEvent
                show={showModal}
                onClose={handleModal}
                currentDate={{ start: new Date(), end: new Date() }}
            />
        </>
    );
};

export default Sidebar;
