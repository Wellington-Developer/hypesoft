import { Button } from "../utils/Button/styles"
import { ContactContainer } from "./styles"

export const Contact = () => {
    return (
        <ContactContainer className="container-default" id="contact">
            <div className="left-side">
                <h1>Let me know here.</h1>
                <form action="">
                    <div className="info-person">
                    <input id="name" type="text" placeholder="Full name" />
                    <input id="email" type="email" placeholder="Email address" />
                    </div>
                    <input id="subjects"type="text" placeholder="Subjects" />
                    <input id="message" type="text" placeholder="Message" />
                </form>
                <Button primary>Send Message</Button>
            </div>

            <div className="right-side">
                <h1>Get in Touck</h1>

                <ul>
                    <li>House #5, Street Number #98</li>
                    <li>brasilia - 700000-000, Brasil</li>
                </ul>
                <ul>
                    <li>albert.design@gmail.com</li>
                    <li>albert.flore@gmail.com</li>
                </ul>
                <ul>
                    <li>+55 955 258 2699</li>
                    <li>+55 955 100 9449</li>
                </ul>
            </div>
        </ContactContainer>
    )
}