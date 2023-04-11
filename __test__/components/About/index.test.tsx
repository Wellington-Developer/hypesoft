import { render, screen } from "@testing-library/react";
import { About } from "@/components/About";

describe('<About />', () => {
    const { container } = render(<About />);

    it('should have if class left-side greater than 0', () => {
        const elementLeft = container.getElementsByClassName('left-side').length

        expect(elementLeft).toBeGreaterThan(0)
    })
})