import { render, screen } from "@testing-library/react";
import { Intro } from "@/components/Intro";

describe('<Intro />', () => {
    render(<Intro />);

    it('Should have a "Hire me" button in intro', () => {
        let text = screen.getByText('Hire me');
        expect(text).toBeInTheDocument();
    });
})