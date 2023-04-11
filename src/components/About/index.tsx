import { ExperienceData } from "../utils/Experience/styles"
import Image from "next/image";

// Styles
import { Button } from "../utils/Button/styles";
import { AboutContainer } from "./styles"

// Assets
import aboutImg from '../../../public/assets/images/about.png';

export const About = () => {
    return (
        <AboutContainer className="container-default" id="about">
            <div className="left-side">
                <Image src={ aboutImg } alt="about image" />
            </div>
            <div className="right-side">
                <h1>Software Engineer and Infrastructure specialist based in Brazil.</h1>
                <p>My name is Wellington Santos and I'm from the North Coast of SP. My journey as a Front-End Developer started in 2017, when I started a technical course in Internet Systems at IFSP, which is where I got my start in the world of creating interfaces, which soon became a passion!</p>
                <div className="container-experience">
                    <ExperienceData>
                        <h2>17+</h2>
                        <h3>Year of experience</h3>
                    </ExperienceData>

                    <ExperienceData>
                        <h2>325+</h2>
                        <h3>Completed projects</h3>
                    </ExperienceData>
                </div>
                <Button primary href="#contact">Say hi
                    <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33 10.025H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M27.95 4.00012L34 10.0241L27.95 16.0491" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Button>
            </div>
        </AboutContainer>
    )
}