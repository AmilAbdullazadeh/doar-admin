import { FC } from "react";
import UpdateOption from "../../../components/profile-view/update-option";
import LatestActivity from "../../../components/profile-view/latest-activity";
import WorkExperience from "../../../components/profile-view/work-experience";
import Education from "../../../components/profile-view/education";
import Interests from "../../../components/profile-view/interests";

const Main: FC = () => {
    return (
        <>
            <UpdateOption />
            <LatestActivity />
            <WorkExperience />
            <Education />
            <Interests />
        </>
    );
};

export default Main;
