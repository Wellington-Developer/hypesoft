import { CompaniesContainer } from "./styles"
import ytImg from '../../../public/assets/icons/youtube.svg';
import googleImg from '../../../public/assets/icons/google.svg';
import adobeImg from '../../../public/assets/icons/adobe.svg';
import sketchImg from '../../../public/assets/icons/sketch.svg';
import Image from "next/image";


export const Companies = () => {
    return (
        <CompaniesContainer className="container-default">
            <div className="left-side">
                <h1>
                    I worked with <span>289+</span> Companies all over the World.
                </h1>
            </div>
            
            <div className="box">
                <a href="https://www.youtube.com">
                    <Image src={ ytImg } alt="image companie" />
                </a>
            </div>
            <div className="box">
                <a href="https://www.google.com">
                    <Image src={ googleImg } alt="image companie" />
                </a>
            </div>
            <div className="box">
                <a href="https://www.adobe.com">
                    <Image src={ adobeImg } alt="image companie" />
                </a>
            </div>
            <div className="box">
                <a href="https://www.sketch.com">
                    <Image src={ sketchImg } alt="image companie" />
                </a>
            </div>
            <div className="box">
                <a href="#works">
                    <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.3332 10.0249H2.6665" stroke="#7D00FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M24.8442 4L30.222 10.024L24.8442 16.049" stroke="#7D00FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
        </CompaniesContainer>
    )
}