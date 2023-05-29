import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react"

const FAQs = ({ question, answer }) => {

    const [isAnswerShowing, setIsAnswerShowing] = useState(true);

    return (
        <article className="faq">
            <div>
                <h4>{question}</h4>
                <button className="faq__icon">
                    {
                        isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }
                </button>
            </div>
            {isAnswerShowing && <p>
                {answer}
            </p>}
        </article>
    )
}

export default FAQs
