import styled from 'styled-components';

export const SocialMedia = styled.a`
    padding: 14px;
    background: var(--color-white);
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
    width: 100%;
    max-width: 48px;
    height: 48px;
    cursor: pointer;

    :hover {
        background: var(--color-purple);
    }
`