import { ButtonProps } from '@/../types/components/utils/Button';
import styled from 'styled-components';

export const Button = styled.a<ButtonProps >`
    display: inline-block;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 56px;
    padding: 0 32px;
    color: ${props => props.primary ? 'var(--color-white)': 'var(--color-primary)'};
    border-radius: 5px;
    background: ${props => props.primary ? 'var(--color-purple)' : 'var(--color-white)'}
`;