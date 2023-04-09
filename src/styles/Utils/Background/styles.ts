import styled from 'styled-components';

export const BgContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    grid-template-columns: 1fr 896px 425px 1fr;
    transition: all 3s ease-in-out;
    
    .box {
        grid-row: 1;
        grid-column: 3 / 5;
        background: var(--color-bg-header);
    }
    
    
    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(10, 1fr);

        .box {
            grid-column: 7 / 11;
        }
    }

    @media screen and (max-width: 1200px) {

        .box {
            grid-column: 6 / 13;
        }
    }

    @media screen and (max-width: 800px) {
        .box {
            background: var(--color-bg);
        }
    }
`