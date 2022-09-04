import { ICustomer } from "../../types";
import img1 from "../../images/img23.jpg";
import img2 from "../../images/img16.jpg";

export const customers: ICustomer[] = [
    {
        id: "#00222",
        name: "Socrates Itumay",
        bg: "gray600",
        chat_link: "/apps/chat",
        profile_link: "/profile-view",
    },
    {
        id: "#00221",
        name: "Reynante Labares",
        image: img1,
        chat_link: "/apps/chat",
        profile_link: "/profile-view",
    },
    {
        id: "#00220",
        name: "Marianne Audrey",
        image: img2,
        chat_link: "/apps/chat",
        profile_link: "/profile-view",
    },
    {
        id: "#00219",
        name: "Owen Bongcaras",
        bg: "indigo",
        chat_link: "/apps/chat",
        profile_link: "/profile-view",
    },
    {
        id: "#00218",
        name: "Kirby Avendula",
        bg: "primary",
        chat_link: "/apps/chat",
        profile_link: "/profile-view",
    },
];
