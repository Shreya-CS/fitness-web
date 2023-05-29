import SectionHead from "./SectionHead"
import { ImQuotesLeft } from 'react-icons/im'
import Card from "../UI/Card"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { testimonials } from "../data"
import { useState } from "react"

const Testimonials = () => {
    const [index, setIndex] = useState(2)
    const { name, quote, job, avatar } = testimonials[index];

    return (
        <section className="testimonials">
            <div className="container testimonials__container">
                <SectionHead icon={<ImQuotesLeft />} title="Testimonial" className="testimonials__head" />
                <Card className="testimonial">
                    <div className="testimonial__avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <p className="testimonial__quotes">{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small className="testimonial__title">{job}</small>
                </Card>
                <div className="testimonials_btn-container">
                    <button className="testimonials__btn"><IoIosArrowDropleftCircle /></button>
                    <button className="testimonials__btn"><IoIosArrowDroprightCircle /></button>
                </div>
            </div>
        </section >
    )
}

export default Testimonials
