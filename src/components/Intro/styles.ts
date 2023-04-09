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
    }
    
    .right-side {
        grid-row: 1;
        grid-column: 2 / 5;
        width: 100%;
        max-width: 870px;
        justify-self: end;
    }
`;