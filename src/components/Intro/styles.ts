import styled from 'styled-components';

export const IntroContainer = styled.div`
    max-width: 1555px;
    margin: 0 auto;
    margin-top: 10px;
    height: 100vh;

    display: grid;
    grid-template-columns: 110px 1fr 1fr 1fr;
    
    .left-side {
        grid-row: 1;
        grid-column: 2 / 5;
        align-self: end;
        z-index: 2;
        max-width: 760px;

        h1 {
            font-size: 8.0rem;
            line-height: 122%;
            color: var(--color-white);
            font-weight: 400;
            padding-bottom: 32px;

        
            span {
                color: var(--color-purple);
            }
        }

        p {
            color: var(--color-gray-500);
            font-size: 2.0rem;
            line-height: 160%;
            padding-bottom: 32px;
            max-width: 673px;
        }

        .buttons {
            display: flex;
            gap: 16px;
            padding-bottom: 202px;
        }

        .social-container {
            p {
                padding-bottom: 12px;
                color: var(--color-white);
                font-size: 1.6rem;
                line-height: 24px;
                font-weight: normal;
            }
        }

        .social {
            display: flex;
            gap: 12px;
            padding-bottom: 51px;
        }
    }
    
    .right-side {
        grid-row: 1;
        grid-column: 2 / 5;
        width: 100%;
        max-width: 870px;
        justify-self: end;
    }

    @media screen and (max-width: 1555px) {
        .left-side {
            grid-column: 1 / 5
        }
    }

    @media screen and (max-width: 1400px) {
        .left-side {
            .buttons {
                padding-bottom: 100px;
            }
        }
        .right-side {
            max-width: 700px;
            height: 100vh;

            img {
                height: 100%;
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .left-side {
            max-width: 600px;
            h1 {
                font-size: 6.0rem;
                padding-bottom: 24px;
            }

            p {
                font-size: 1.8rem;
                padding-bottom: 24px;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .right-side {
            max-width: 500px;
        }
    }

    @media screen and (max-width: 800px) {
        .left-side {
            grid-row: 2;
        }

        .right-side {
            grid-column: 1 / 4;
            max-width: 170px;
            height: 170px;
            justify-self: start;
            border-radius: 20px;

            img {
                border-radius: 20px;
            }
        }
    }

    @media screen and (max-width: 640px) {
        .left-side {
            max-width: 600px;
            h1 {
                font-size: 4.0rem;
                padding-bottom: 24px;
            }

            p {
                font-size: 1.6rem;
                padding-bottom: 24px;
            }
        }
    }
`;