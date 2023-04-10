import Image from "next/image"
import { IntroContainer } from "./styles"

// Styles
import { Button } from "../utils/Button/styles";
import { SocialMedia } from "../utils/SocialMedia/styles";

// Assets
import imgPerson from '../../../public/assets/images/me.png';
import { AiFillGithub, AiFillLinkedin, AiOutlineDribbble, AiOutlineBehance } from 'react-icons/ai'

export const Intro = () => {
    return (
        <IntroContainer>
            <div className="left-side">
                <h1>Hello, I’m John, a <span>Software Engineer.</span></h1>
                <p>Product Designer, UI/UX Designer, and developer based in Brazil. Over the past 17 years, as an art director and designer, I’ve worked with big companies and up-and-coming startups.</p>
                <div className="buttons">
                    <Button href="#contact" primary>Hire me</Button>
                    <Button href="#works">View work</Button>
                </div>

                <div className="social-container">
                    <p>Follow me on</p>
                    <div className="social">
                        <SocialMedia href="https://dribbble.com/">
                            <AiOutlineDribbble size={ 48 } color="#242424" />
                        </SocialMedia>
                        <SocialMedia href="https://www.behance.net/">
                            <AiOutlineBehance size={ 48 } color="#242424" />
                        </SocialMedia>
                        <SocialMedia href="https://github.com/Wellington-Developer">
                            <AiFillGithub size={ 48 } color="#242424" className="icon"/>
                        </SocialMedia>
                        <SocialMedia href="https://www.linkedin.com/in/wellington-santos-6a2670214/">
                            <AiFillLinkedin size={ 48 } color="#242424" />
                        </SocialMedia>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <Image src={imgPerson} alt="person" priority/>
            </div>
        </IntroContainer>
    )   
}