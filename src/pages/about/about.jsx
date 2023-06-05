import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about3.jpg'
import MissionImage from '../../images/about2.jpg'
import './about.css'
const about = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus in vel illum consequatur neque dignissimos fuga, recusandae reprehenderit
            </Header>
            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, qui quaerat. Ullam libero quasi sed obcaecati, commodi modi omnis magni, reiciendis possimus perspiciatis iure ea, sapiente excepturi iste neque itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, qui quaerat. Ullam libero quasi sed obcaecati, commodi modi omnis magni, reiciendis possimus perspiciatis iure ea, sapiente excepturi iste neque itaque!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, in.Ullam libero quasi sed obcaecati, commodi modi omnis magni, reiciendis possimus perspiciatis iure ea, sapiente excepturi iste neque itaque!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rerum similique vel sed sint numquam!Possimus, in.Ullam libero quasi sed obcaecati</p>
                    </div>
                </div>
            </section>

            <section className="about__vision">
                <div className="container about__vision-container">
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, qui quaerat. Ullam libero quasi sed obcaecati, commodi modi omnis magni, reiciendis possimus perspiciatis iure ea, sapiente excepturi iste neque itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, qui quaerat. Ullam libero quasi sed obcaecati, commodi modi omnis magni, reiciendis possimus perspiciatis iure ea, sapiente excepturi iste neque itaque!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, in.Ullam libero quasi sed obcaecati, commodi modi omnis magni, reiciendis possimus perspiciatis iure ea, sapiente excepturi iste neque itaque!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rerum similique vel sed sint numquam!Possimus, in.Ullam libero quasi sed obcaecati</p>
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="" />
                    </div>
                </div>
            </section>

            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, qui quaerat. Ullam libero quasi sed obcaecati, commodi modi omnis magni, reiciendis possimus perspiciatis iure ea, sapiente excepturi iste neque itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, qui quaerat. Ullam libero quasi sed obcaecati, commodi modi omnis magni, reiciendis possimus perspiciatis iure ea, sapiente excepturi iste neque itaque!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, in.Ullam libero quasi sed obcaecati, commodi modi omnis magni, reiciendis possimus perspiciatis iure ea, sapiente excepturi iste neque itaque!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rerum similique vel sed sint numquam!Possimus, in.Ullam libero quasi sed obcaecati</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default about
