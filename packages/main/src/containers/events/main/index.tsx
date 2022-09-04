import { FC } from "react";
import { Row, Col } from "@doar/components";
import image1 from "@doar/shared/images/img27.jpg";
import image2 from "@doar/shared/images/img26.jpg";
import image3 from "@doar/shared/images/img28.jpg";
import image4 from "@doar/shared/images/img29.jpg";
import image5 from "@doar/shared/images/img31.jpg";
import EventCard from "../../../components/event-card";

const MainContent: FC = () => {
    return (
        <Col lg={8} xl={9}>
            <Row gutters={20}>
                <Col md={6}>
                    <EventCard
                        image={image1}
                        title="Moto Rally Championship"
                        date="Mar 22 - Mar 24"
                        place="World Trade Center Metro"
                        path="#!"
                        location="Manila, Philippines"
                        people="6,187"
                    />
                </Col>
                <Col md={6} mt={["20px", null, 0]}>
                    <EventCard
                        image={image2}
                        title="Reggae Music Showdown"
                        date="Mar 30 - Mar 31"
                        place="Cebu Business Park"
                        path="#!"
                        location="Cebu City, Cebu, Philippines"
                        people="5,092"
                    />
                </Col>
                <Col md={6} mt="20px">
                    <EventCard
                        image={image3}
                        title="Acoustic Workshop"
                        date="Apr 10 - Apr 12"
                        place="Cebu IT Park"
                        path="#!"
                        location="Cebu City, Cebu, Philippines"
                        people="5,001"
                    />
                </Col>
                <Col md={6} mt="20px">
                    <EventCard
                        image={image4}
                        title="Photoshop Effects Workshop"
                        date="Apr 12 - Apr 13"
                        place="2nd Fl. Westfield Building"
                        path="#!"
                        location="Bay Area, San Francisco, CA"
                        people="4,343"
                    />
                </Col>
                <Col md={6} mt="20px">
                    <EventCard
                        image={image5}
                        title="Annual Dog Showdown"
                        date="Apr 15, 8:00am - 05:00pm"
                        place="Fishermans Wharf"
                        path="#!"
                        location="Bay Area, San Francisco, CA"
                        people="4,343"
                    />
                </Col>
            </Row>
        </Col>
    );
};

export default MainContent;
