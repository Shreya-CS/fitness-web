import SectionHead from './SectionHead'
import { FaQuestion } from 'react-icons/fa'
import { faqs } from '../data'
import FAQs from './FAQs'

const FAQ = () => {
    return (
        <div>
            <section className="faqs">
                <div className="container faqs__container">
                    <SectionHead icon={<FaQuestion />} title='FAQs' />
                    <div className="faqs__wrapper">
                        {
                            faqs.map(({ id, question, answer }) => {
                                return <FAQs key={id} question={question} answer={answer} />
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FAQ
