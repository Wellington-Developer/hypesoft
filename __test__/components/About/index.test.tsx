import { render, screen } from "@testing-library/react";
import { About } from "@/components/About";

describe('<About />', () => {
    render(<About />);
    
    it('should have if class left-side has been added', () => {
        const { container } = render(<About />);

        const elementLeft = container.getElementsByClassName('left-side').length

        expect(elementLeft).toBeGreaterThan(0)
    })

    it('Should have a "Say hi" button in the section', () => {
        render(<About />);
        
        let button = screen.getByText('Say hi');
        expect(button).toBeInTheDocument();
    });
})