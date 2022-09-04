import { FC } from "react";
import { Heading, Text } from "@doar/components";
import { StyledWrap, StyledContent } from "./style";

const MailBody: FC = () => {
    return (
        <StyledWrap>
            <Heading as="h5" mb="30px">
                30 Seconds Survey to Your Next Job
            </Heading>
            <Heading mb="0px" fontWeight={600}>
                Ms. Katherine Lumaad
            </Heading>
            <Text as="span" color="text3">
                CompanyName, Inc.
            </Text>
            <Text color="text3">San Francisco, CA, United States</Text>
            <StyledContent>
                <p>Greetings!</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                </p>
                <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                    enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                    lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    Phasellus viverra nulla ut metus varius laoreet. Quisque
                    rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                    Curabitur ullamcorper ultricies nisi. Nam eget dui.
                </p>
                <p>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero, sit amet adipiscing sem.
                </p>
                <p>
                    <span>Sincerely yours,</span>
                    <br />
                    <strong>Envato Design Team</strong>
                </p>
            </StyledContent>
        </StyledWrap>
    );
};

export default MailBody;
