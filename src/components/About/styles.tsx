import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 88px;
    padding-top: 103px;
    padding-bottom: 153px;



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
        }
    }
`