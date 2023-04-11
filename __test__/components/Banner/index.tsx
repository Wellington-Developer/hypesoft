import { render, screen } from "@testing-library/react";
import { Banner } from "@/components/Banner";

describe('<About />', () => {
    
    it('should have if class left-side greater than 0', () => {
        const { container } = render(<Banner />);
        const elementLeft = container.getElementsByClassName('left-side').length

        expect(elementLeft).toBeGreaterThan(0)
    })
})