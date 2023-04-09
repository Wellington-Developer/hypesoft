import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: grid;
    align-items: center;
    gap: 88px;
    padding-top: 103px;
    padding-bottom: 153px;
    grid-template-columns: repeat(2, 1fr);



    .left-side {
        width: 100%;
        max-width: 560px;
        border-radius: 10px;
        box-shadow: 32px 32px white;
    }
    
    .right-side {
        width: 100%;

        h1 {
            font-size: 4.8rem;
            line-height: 117%;
            font-weight: 500;
            color: var(--color-white);
            padding-bottom: 20px;
        }

        p {
            font-size: 1.8rem;
            line-height: 156%;
            color: var(--color-gray-500);
            padding-bottom: 32px;
        }

        .container-experience {
            display: flex;
            gap: 20px;
            margin-bottom: 32px;
            flex-wrap: wrap;
        }
    }

    @media screen and (max-width: 1400px) {
        grid-template-columns: 400px 1fr;
        gap: 60px;

        .left-side {
            max-width: 400px;
            border-radius: 10px;
            box-shadow: 16px 16px white;
        }

        .right-side {
            width: 100%;
            h1 {
                font-size: 3.6rem;
                line-height: 117%;
                font-weight: 500;
                color: var(--color-white);
                padding-bottom: 16px;
            }

            p {
                font-size: 1.6rem;
                line-height: 156%;
                color: var(--color-gray-500);
                padding-bottom: 20px;
            }
        }
    }

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
        padding: 150px 0px;

        .left-side {
            max-width: 300px;
        }
    }
`