import { ExperienceData } from "../utils/Experience/styles"
import Image from "next/image";

// Styles
import { Button } from "../utils/Button/styles";
import { AboutContainer } from "./styles"

// Assets
import aboutImg from '../../../public/assets/images/about.png';
import arrowRightImg from '../../../public/assets/icons/arrowRightBlack.svg';
import { BsArrowRight } from 'react-icons/bs'

export const About = () => {
    return (
        <AboutContainer className="container-default" id="about">
            <div className="left-side">
                <Image src={ aboutImg } alt="about image" />
            </div>
            <div className="right-side">
                <h1>Software Engineer and Infrastructure specialist based in Brazil.</h1>
                <p>Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat enim, in maximus urna enim ac tortor. Nunc in volutpat ipsum, molestie commodo odio. Quisque auctor nisi mi. Aenean venenatis sapien et interdum interdum.</p>
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
                    <path d="M33 10.025H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.95 4.00012L34 10.0241L27.95 16.0491" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Button>
            </div>
        </AboutContainer>
    )
}