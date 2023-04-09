import Image from "next/image"
import { IntroContainer } from "./styles"

// Assets
import imgPerson from '../../../public/assets/images/me.png';
import { Button } from "../utils/Button/styles";

export const Intro = () => {
    return (
        <IntroContainer>
            <div className="left-side">
                <h1>Hello, I’m John, a <span>Software Engineer.</span></h1>
                <p>Product Designer, UI/UX Designer, and developer based in Brazil. Over the past 17 years, as an art director and designer, I’ve worked with big companies and up-and-coming startups.</p>
                <div className="buttons">
                    <Button href="#contact" primary>Hire me</Button>
                    <Button href="#work">View work</Button>
                </div>
            </div>
            <div className="right-side">
                <Image src={imgPerson} alt="person" priority/>
            </div>
        </IntroContainer>
    )   
}