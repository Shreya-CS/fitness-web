import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import { Trainers } from '../../data'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import Trainer from '../../components/Trainer'


import './trainers.css'

const trainers = () => {
    return (
        <>
            <Header title="Our Trainers" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste nobis beatae quisquam rem aliquid.
            </Header>
            <section className="trainers">
                <div className="container trainers__container">
                    {
                        Trainers.map(({ id, image, name, job, socials }) => {
                            return < Trainer key={id} image={image} name={name} job={job} socials={
                                [
                                    { icon: <BsInstagram />, link: socials[0] },
                                    { icon: <AiOutlineTwitter />, link: socials[1] },
                                    { icon: <FaFacebookF />, link: socials[2] },
                                    { icon: <FaLinkedinIn />, link: socials[3] }
                                ]
                            } />
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default trainers
