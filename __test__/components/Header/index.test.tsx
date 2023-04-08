import { render, screen } from "@testing-library/react";
import { Header } from "@/components/Header";

describe('<Header />', () => {
    render(<Header />);

    it('Should have a "Contact" link in header', () => {
        let text = screen.getByText('Contact');
        expect(text).toBeInTheDocument();
    });
})