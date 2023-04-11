import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(300px, 760px) 1fr;
    gap: 24px;
    padding-bottom: 108px;
    background: linear-gradient(0deg, #242424, #242424), #DFE3EB;

    .left-side, .right-side {
        padding: 48px;
        background: var(--color-white);
        border-radius: 8px;

        h1 {
            font-size: 3.2rem;
            line-height: 40px;
            font-weight: 500;
            padding-bottom: 24px;
        }
    }

    .left-side {
        form {
            input {
                padding: 14px 20px;
                margin-bottom: 16px;
                width: 100%;
                ::placeholder {
                    font-size: 16px;
                    color: var(--color-gray-500);
                }

                border: 1px solid var(--color-gray-100);
            }

            #message {
                height: 150px;
            }
        }

        .info-person {
            display: flex;
            gap: 16px;
        }

        .button {
            margin-top: 32px;
        }
    }

    .right-side {
        ul {
            display: flex;
            padding-bottom: 20px;
            align-items: center;
            
            li {
                height: 20px;
                font-size: 1.8rem;
                line-height: 28px;
                font-weight: 400;
                color: var(--color-bg);
                display: flex;
                gap: 10px;
            }
        }

        .social-media {
            display: flex;
            gap: 12px;

            .box {
                border-radius: 100%;
                padding: 20px;
                background: var(--color-white);
                border: 1px solid var(--color-gray-100);
                transition: all 0.3s ease-in-out;
                cursor: pointer;

                :hover {
                    background: var(--color-purple);
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 600px) {
        .right-side {
        ul {
            display: flex;
            padding-bottom: 10px;
            align-items: center;
            
            li {
                height: 20px;
                font-size: 1.4rem;
                line-height: 28px;
                font-weight: 400;
                color: var(--color-bg);
                display: flex;
                gap: 5px;
            }
        }

        .social-media {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;

            .box {
                border-radius: 100%;
                padding: 20px;
                background: var(--color-white);
                border: 1px solid var(--color-gray-100);
                transition: all 0.3s ease-in-out;
                cursor: pointer;

                :hover {
                    background: var(--color-purple);
                }
            }
        }
    }
`