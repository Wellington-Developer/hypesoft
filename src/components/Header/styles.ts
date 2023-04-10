import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: end;
    padding: 28px 0;
    margin-bottom: 10px;
    
    @keyframes linkHover {
        0% { width: 0% }
        25% { width: 100% }
        50% { width: 75% }
        100% { width: 100% }
    }

    ul {
        display: flex;
        gap: 40px;

        li {
            font-size: 1.4rem;
            text-transform: uppercase;
            font-weight: 700;
            line-height: 4.0rem;
            letter-spacing: 0.04em;
            transition: all 0.3s ease-in-out;
            position: relative;
            

            :hover::after {
                content: '';
                display: block;
                position: absolute;
                height: 3px;
                bottom: -1px;
                left: 0;
                background: var(--color-white);
                animation-name: linkHover;
                animation-duration: 1s;
            }
            
            a {
                color: var(--color-white);
                cursor: pointer;
                
                :hover {
                    opacity: 0.8;
                }
            }
        }
    }
`