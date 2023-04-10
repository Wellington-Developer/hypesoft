import styled from 'styled-components';

export const TestimonialContainer = styled.div `
    padding-top: 220px;
    padding-bottom: 200px;
    .testimonials-container {
        display: grid;
        grid-template-columns: 312px 1fr;
        gap: 44px;

        .persons {
            max-width: 312px;
            width: 100%;
            gap: 3.6px;
            display: flex;
            flex-direction: column;
            
            .person {
                background-color: var(--color-white);
                border-radius: 4px;
                height: 100px;
                display: flex;
                align-items: center;
                padding: 24px;

                :hover {
                    cursor: pointer;
                }

                .profile {
                    width: 52px;
                    height: 52px;
                    border-radius: 100%;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 100%;
                    }
                }

                .info {
                    padding-left: 16px;
                    h1 {
                        font-size: 1.8rem;
                        line-height: 156%;
                        color: var(--color-bg);
                        font-weight: 400;
                    }

                    p {
                        font-size: 1.4rem;
                        line-height: 143%;
                        color: var(--color-gray-500);

                        span {
                            color: var(--color-pink);
                            font-weight: 500;
                        }
                    }
                }
            }
        }

        .testimonial {
            padding: 0 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            h3 {
                font-size: 3.2rem;
                line-height: 160%;
                font-weight: 400;
            }

            h4 {
                font-size: 1.8rem;
                line-height: 28px;
                color: var(--color-bg);
                padding-bottom: 26px;
                font-weight: 400;
                display: flex;
                align-items: center;

                svg {
                    margin-right: 10px;
                }
            }

            background: var(--color-white);
        }
    }
`