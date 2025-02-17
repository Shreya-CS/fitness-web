import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import './gallery.css'

const gallery = () => {
    const galleryLength = 15;
    const images = []
    for (let i = 1; i <= galleryLength; i++) {
        images.push(require(`../../images/gallery${i}.jpg`))
    }
    return (
        <>
            <Header title='Our Gallery' image={HeaderImage}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In cumque aut facere? Ea consequatur ipsam perferendis reprehenderit ad laborum repellendus.
            </Header>
            <section className="gallery">
                <div className="container gallery__container">
                    {
                        images.map((image, index) => {
                            return <article>
                                <img src={image} alt="" />
                            </article>
                        })
                    }
                </div>
            </section>
        </>

    )
}

export default gallery
