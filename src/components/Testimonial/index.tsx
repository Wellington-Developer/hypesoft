import { TitleCenter } from "../utils/TitleCenter/styles"
import { TestimonialContainer } from "./styles"

export const Testimonial = () => {
    return (
        <TestimonialContainer className="container-default">
            <TitleCenter>
                <h1>Testimonial</h1>
            </TitleCenter>
            <div className="testimonials-container">
                <div className="persons">
                    <div className="person">
                        <div className="profile"></div>
                        <div className="info">
                            <h1>Sundar Pichai</h1>
                            <p>CEO & Founder of <span>Google</span></p>
                        </div>
                    </div>

                    <div className="person">
                        <div className="profile"></div>
                        <div className="info">
                            <h1>Sundar Pichai</h1>
                            <p>CEO & Founder of <span>Google</span></p>
                        </div>
                    </div>

                    <div className="person">
                        <div className="profile"></div>
                        <div className="info">
                            <h1>Sundar Pichai</h1>
                            <p>CEO & Founder of <span>Google</span></p>
                        </div>
                    </div>

                    <div className="person">
                        <div className="profile"></div>
                        <div className="info">
                            <h1>Sundar Pichai</h1>
                            <p>CEO & Founder of <span>Google</span></p>
                        </div>
                    </div>
                </div>

                <div className="testimonial">
                    <h4 id="#rating">5.0 Star Rating</h4>
                    <h3>“If you're looking for someone who will challenge your UX/UI thinking and really cut to the core of what's important for users, then Jesse is your man. On top of that, he brings a level of enthusiasm to the craft that's energizing for everyone who works with him.”</h3>
                </div>
            </div>
        </TestimonialContainer>
    )
}