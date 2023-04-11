import { render, screen } from "@testing-library/react";
import { Intro } from "@/components/Intro";

describe('<Intro />', () => {
    render(<Intro />);

    it('Should have a "Hire me" button in intro', () => {
        let text = screen.getByText('Hire me');
        expect(text).toBeInTheDocument();
    });

    it('Should have a social-container class in the section', () => {
        const { container } = render(<Intro />);
        const elementLeft = container.getElementsByClassName('social-container').length

        expect(elementLeft).toBeGreaterThan(0)
    });
})