'use client'
import QuestionCard from "@/components/landing/components/faq/questionCard";
import {faqArray} from './faqs'

const FaqFeature = () => {
    const left = faqArray.filter((_, i) => i % 2 === 0)
    const right = faqArray.filter((_, i) => i % 2 !== 0)
    return (
        <article className={"w-full"}>
            <h2 className={"sm:text-2xl text-xl sm:m-15 font-bold m-5 text-white leading-tight"}>Frequently Asked Questions</h2>
            <div className={"flex gap-6 md:w-[80%] w-[90%] mx-auto mb-10 justify-center"}>
                <ul className="flex flex-col">
                    {left.map((faq, index) => (
                        <QuestionCard
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </ul>
                <ul className="flex flex-col">
                    {right.map((faq, index) => (
                        <QuestionCard
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default FaqFeature;