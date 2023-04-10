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
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" rx="40" fill="#684FFF" fill-opacity="0.1"/>
                <path d="M52 37.3335C52 46.6668 40 54.6668 40 54.6668C40 54.6668 28 46.6668 28 37.3335C28 34.1509 29.2643 31.0987 31.5147 28.8482C33.7652 26.5978 36.8174 25.3335 40 25.3335C43.1826 25.3335 46.2348 26.5978 48.4853 28.8482C50.7357 31.0987 52 34.1509 52 37.3335Z" stroke="#ED1CA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M40 41.3335C42.2091 41.3335 44 39.5426 44 37.3335C44 35.1244 42.2091 33.3335 40 33.3335C37.7909 33.3335 36 35.1244 36 37.3335C36 39.5426 37.7909 41.3335 40 41.3335Z" stroke="#ED1CA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                    <div className="text">
                        <li>House #5, Street Number #98</li>
                        <li>brasilia - 700000-000, Brasil</li>
                    </div>
                </ul>
                <ul>
                <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.333496" width="80" height="80" rx="40" fill="#684FFF" fill-opacity="0.1"/>
                <path d="M29.3334 29.667H50.6667C52.1334 29.667 53.3334 30.867 53.3334 32.3337V48.3337C53.3334 49.8003 52.1334 51.0003 50.6667 51.0003H29.3334C27.8667 51.0003 26.6667 49.8003 26.6667 48.3337V32.3337C26.6667 30.867 27.8667 29.667 29.3334 29.667Z" stroke="#ED1CA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M53.3334 32.3335L40.0001 41.6668L26.6667 32.3335" stroke="#ED1CA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>


                    <div className="text">
                        <li>House #5, Street Number #98</li>
                        <li>brasilia - 700000-000, Brasil</li>
                    </div>
                </ul>
                <ul>
                <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.666504" width="80" height="80" rx="40" fill="#684FFF" fill-opacity="0.1"/>
                <path d="M32.6561 27.6665C32.1331 27.6665 31.6171 27.8545 31.1871 28.1975L31.1251 28.2285L31.0941 28.2605L27.9691 31.4795L28.0001 31.5095C27.5416 31.9259 27.2167 32.4687 27.0665 33.0696C26.9163 33.6705 26.9474 34.3024 27.1561 34.8855C27.1601 34.8935 27.1521 34.9085 27.1561 34.9165C28.0041 37.3425 30.1721 42.0265 34.4061 46.2605C38.6561 50.5105 43.4021 52.5925 45.7501 53.5105H45.7811C46.3695 53.705 46.9983 53.7439 47.6062 53.6233C48.2141 53.5027 48.7804 53.2269 49.2501 52.8225L52.4061 49.6665C53.2341 48.8385 53.2341 47.4005 52.4061 46.5725L48.3441 42.5105L48.3121 42.4475C47.4841 41.6195 46.0161 41.6195 45.1871 42.4475L43.1871 44.4475C41.6862 43.7264 40.3056 42.7779 39.0941 41.6355C37.4571 40.0725 36.6211 38.2755 36.3131 37.5725L38.3131 35.5725C39.1531 34.7325 39.1681 33.3345 38.2811 32.5105L38.3121 32.4785L38.2191 32.3855L34.2191 28.2605L34.1881 28.2295L34.1251 28.1975C33.7101 27.8586 33.1919 27.6713 32.6561 27.6665ZM32.6561 29.6665C32.7378 29.6713 32.8153 29.7045 32.8751 29.7605L36.8751 33.8535L36.9691 33.9475C36.9611 33.9395 37.0271 34.0455 36.9061 34.1665L34.4061 36.6665L33.9371 37.1045L34.1571 37.7285C34.1571 37.7285 35.3051 40.8035 37.7191 43.1045L37.9381 43.2915C40.2611 45.4125 43.0001 46.5725 43.0001 46.5725L43.6251 46.8545L46.5941 43.8845C46.7661 43.7135 46.7341 43.7135 46.9061 43.8845L51.0001 47.9805C51.1721 48.1515 51.1721 48.0895 51.0001 48.2605L47.9371 51.3235C47.4771 51.7185 46.9881 51.8005 46.4071 51.6055C44.1411 50.7145 39.7381 48.7805 35.8121 44.8555C31.8551 40.8975 29.7891 36.4095 29.0321 34.2305C28.8791 33.8235 28.9881 33.2225 29.3441 32.9175L29.4061 32.8545L32.4381 29.7615C32.4972 29.7056 32.5739 29.672 32.6551 29.6665H32.6561Z" fill="#ED1CA6"/>
                </svg>


                    <div className="text">
                        <li>House #5, Street Number #98</li>
                        <li>brasilia - 700000-000, Brasil</li>
                    </div>
                </ul>
            </div>
        </ContactContainer>
    )
}