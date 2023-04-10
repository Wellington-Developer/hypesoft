import { useEffect, useState } from "react"
import { TitleCenter } from "../utils/TitleCenter/styles"
import { TestimonialContainer } from "./styles"
import { TestimonialsProps } from "@/../types/components/data/testimonials"

// Assets
import { AiFillStar } from 'react-icons/ai'

export const Testimonial = () => {
    const [ testimonials, setTestimonials ] = useState<TestimonialsProps[]>([])
    const [ filteredTestimonial, setFilteredTestimonial ] = useState<TestimonialsProps>()
    
    const fetchTestimonials = async () => {
        const res = await fetch('/api/testimonials')
        const testimonials = await res.json()

        setTestimonials(testimonials)
        console.log(testimonials)
    }

    const getStateId = (id: number) => {
        console.log(id)
        setFilteredTestimonial(testimonials[id])
    }

    console.log(filteredTestimonial)


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
                                <div className="person" key={index} onMouseEnter={ () => getStateId(index) }>
                                    <div className="profile">
                                        <img src={testimonial.image} alt="profile image" />
                                    </div>
                                    <div className="info">
                                        <h1>{testimonial.name}</h1>
                                        <p>{testimonial.work}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    filteredTestimonial ? (
                        <div className="testimonial">
                            <h4 id="#rating">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3011 1.48313C11.668 0.739965 12.7277 0.739966 13.0945 1.48313L16.0854 7.54226C16.2309 7.83711 16.5121 8.04157 16.8375 8.08912L23.5274 9.06696C24.3473 9.1868 24.6741 10.1946 24.0805 10.7728L19.2413 15.4862C19.0054 15.7159 18.8978 16.0471 18.9534 16.3716L20.0953 23.0291C20.2354 23.8461 19.3778 24.4691 18.6442 24.0833L12.6633 20.938C12.3719 20.7847 12.0238 20.7847 11.7324 20.938L5.75147 24.0833C5.01784 24.4691 4.16029 23.8461 4.30041 23.0291L5.44226 16.3716C5.49792 16.0471 5.39025 15.7159 5.15438 15.4862L0.315181 10.7728C-0.278413 10.1946 0.0483706 9.1868 0.868285 9.06696L7.5582 8.08912C7.88356 8.04157 8.16474 7.83711 8.31028 7.54226L11.3011 1.48313Z" fill="#FF8718"/>
                            </svg>
                                {filteredTestimonial.rate} Star Rating</h4>
                            <h3>{filteredTestimonial.comment}</h3>
                        </div>
                    ) : (
                        <div className="testimonial">
                            <h4 id="#rating">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3011 1.48313C11.668 0.739965 12.7277 0.739966 13.0945 1.48313L16.0854 7.54226C16.2309 7.83711 16.5121 8.04157 16.8375 8.08912L23.5274 9.06696C24.3473 9.1868 24.6741 10.1946 24.0805 10.7728L19.2413 15.4862C19.0054 15.7159 18.8978 16.0471 18.9534 16.3716L20.0953 23.0291C20.2354 23.8461 19.3778 24.4691 18.6442 24.0833L12.6633 20.938C12.3719 20.7847 12.0238 20.7847 11.7324 20.938L5.75147 24.0833C5.01784 24.4691 4.16029 23.8461 4.30041 23.0291L5.44226 16.3716C5.49792 16.0471 5.39025 15.7159 5.15438 15.4862L0.315181 10.7728C-0.278413 10.1946 0.0483706 9.1868 0.868285 9.06696L7.5582 8.08912C7.88356 8.04157 8.16474 7.83711 8.31028 7.54226L11.3011 1.48313Z" fill="#FF8718"/>
                            </svg>
                            5 Star Rating</h4>
                            <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is</h3>
                        </div>
                    )
                }

            </div>
        </TestimonialContainer>
    )
}