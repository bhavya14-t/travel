import React, { useState } from "react";
import './FaqSection.css';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
    {
        question: 'How do I access the Guide and map?',
        answer: 'You can sign in using your email address, Facebook, or Google account. The guide page, including the map, is accessible through your mobile or computer browser. Additionally, offline access is available via the Rexby app!',
    },
    {
        question: 'Do I need Internet Connection?',
        answer: 'When you download the Rexby app and purchase my guide, you can access it offline. If you’re using a web browser, an internet connection is required.',
    },
    {
        question: 'How long will I have access?',
        answer: 'Once you buy access, it is forever.',
    },
    {
        question: 'Can I share it with my travel buddy?',
        answer: 'Yes, you can invite one travel buddy.',
    },
];
const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-sec">
            <div className="faq-container">
                <div className="faq-left">
                    <h4>Your questions, <br />answered</h4>
                </div>

                <div className="faq-right"> {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-questions" onClick={() => toggle(index)}>
                            <h2>{item.question}</h2>
                            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {openIndex === index && (
                            <p className="faq-answer">{item.answer}</p>
                        )}
                        <hr />
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;