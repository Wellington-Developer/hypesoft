import { useEffect, useState } from "react"
import { TitleCenter } from "../utils/TitleCenter/styles"
import { TestimonialContainer } from "./styles"
import { EventType } from "@testing-library/react"
import { TestimonialsProps } from "@/../types/components/data/testimonials"

export const Testimonial = () => {
    const [ testimonials, setTestimonials ] = useState<TestimonialsProps[]>([])

    const fetchTestimonials = async () => {
        const res = await fetch('/api/testimonials')
        const testimonials = await res.json()

        setTestimonials(testimonials)
        console.log(testimonials)
    }


    useEffect(() => {
        fetchTestimonials()
    }, [])
    
    return (
        <TestimonialContainer className="container-default">
            <TitleCenter>
                <h1>Testimonial</h1>
            </TitleCenter>
            <div className="testimonials-container">
                <div className="persons">
                    {
                        testimonials.map((testimonial, index) => {
                            return (
                                <div className="person" key={index}>
                                    <div className="profile"></div>
                                    <div className="info">
                                        <h1>{testimonial.name}</h1>
                                        <p>{testimonial.work}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="testimonial">
                    <h4 id="#rating">5.0</h4>
                    <h3>Comentário</h3>
                </div>

            </div>
        </TestimonialContainer>
    )
}