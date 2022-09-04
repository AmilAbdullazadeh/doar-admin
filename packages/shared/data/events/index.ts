import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { IEvent } from "../../types";

const curYear: string = moment().format("YYYY");
const curMonth: string = moment().format("MM");

export const calendarEvents: IEvent = {
    category: "calendar",
    backgroundColor: "#d9e8ff",
    borderColor: "#0168fa",
    events: [
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-08T08:30:00`,
            end: `${curYear}-${curMonth}-08T13:00:00`,
            title: "ThemeForest Meetup",
            description:
                "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...",
        },
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-10T09:00:00`,
            end: `${curYear}-${curMonth}-10T17:00:00`,
            title: "Design Review",
            description:
                "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...",
        },
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-13T12:00:00`,
            end: `${curYear}-${curMonth}-13T18:00:00`,
            title: "Lifestyle Conference",
            description:
                "Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi...",
        },
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-15T07:30:00`,
            end: `${curYear}-${curMonth}-15T15:30:00`,
            title: "Team Weekly Brownbag",
            description:
                "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...",
        },
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-17T10:00:00`,
            end: `${curYear}-${curMonth}-19T15:00:00`,
            title: "Music Festival",
            description:
                "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...",
        },
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-08T13:00:00`,
            end: `${curYear}-${curMonth}-08T18:30:00`,
            title: "Attend Lea's Wedding",
            description:
                "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...",
        },
    ],
};

export const birthdayEvents: IEvent = {
    category: "birthday",
    backgroundColor: "#c3edd5",
    borderColor: "#10b759",
    events: [
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-01T18:00:00`,
            end: `${curYear}-${curMonth}-01T23:30:00`,
            title: "Socrates Birthday",
            description:
                "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...",
        },
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-21T15:00:00`,
            end: `${curYear}-${curMonth}-21T21:00:00`,
            title: "Reynante's Birthday",
            description:
                "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...",
        },
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-23T15:00:00`,
            end: `${curYear}-${curMonth}-23T21:00:00`,
            title: "Pauline's Birthday",
            description:
                "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...",
        },
    ],
};

export const holidayEvents: IEvent = {
    category: "holiday",
    backgroundColor: "#fcbfdc",
    borderColor: "#f10075",
    events: [
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-04`,
            end: `${curYear}-${curMonth}-06`,
            title: "Feast Day",
        },
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-26`,
            end: `${curYear}-${curMonth}-27`,
            title: "Memorial Day",
        },
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-28`,
            end: `${curYear}-${curMonth}-29`,
            title: "Veteran's Day",
        },
    ],
};

export const discoveredEvents: IEvent = {
    category: "discover",
    backgroundColor: "#bff2f2",
    borderColor: "#00cccc",
    events: [
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-17T08:00:00`,
            end: `${curYear}-${curMonth}-18T11:00:00`,
            title: "Web Design Workshop Seminar",
        },
    ],
};

export const meetupEvents: IEvent = {
    category: "meetup",
    backgroundColor: "#dedafe",
    borderColor: "#5b47fb",
    events: [
        {
            id: "14",
            start: `${curYear}-${curMonth}-03`,
            end: `${curYear}-${curMonth}-05`,
            title: "UI/UX Meetup Conference",
        },
        {
            id: "15",
            start: `${curYear}-${curMonth}-18`,
            end: `${curYear}-${curMonth}-20`,
            title: "Angular Conference Meetup",
        },
    ],
};

export const otherEvents: IEvent = {
    category: "other",
    backgroundColor: "#ffdec4",
    borderColor: "#fd7e14",
    events: [
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-06`,
            end: `${curYear}-${curMonth}-08`,
            title: "My Rest Day",
        },
        {
            id: uuidv4(),
            start: `${curYear}-${curMonth}-29`,
            end: `${curYear}-${curMonth}-31`,
            title: "My Rest Day",
        },
    ],
};
