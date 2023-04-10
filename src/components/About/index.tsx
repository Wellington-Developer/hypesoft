import { ExperienceData } from "../utils/Experience/styles"
import { AboutContainer } from "./styles"
import Image from "next/image";

// Assets
import aboutImg from '../../../public/assets/images/about.png';
import { Button } from "../utils/Button/styles";

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
                <Button primary>Say hi</Button>
            </div>
        </AboutContainer>
    )
}