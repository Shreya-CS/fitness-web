import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'
const contact = () => {
    return (
        <>
            <Header title='Get in Touch' image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cum iusto eos expedita repudiandae vero?
            </Header>
            <section className="contact">
                <div className="container contact__container">
                    <div className="contact__wrapper">
                        <a href="mailto:shreyashanmugasundaram@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
                        <a href="https://whatsap.com" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default contact
