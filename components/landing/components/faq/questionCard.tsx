import React, {useState} from 'react';

type questionCardProps = {
    question: string;
    answer: string;
}

const QuestionCard = ({question, answer}: questionCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <li className="border-b border-gray-700">
            <button className="w-full py-4 text-left flex justify-between items-center text-white font-medium"
                    onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span className="text-red-600">{isOpen ? '-' : '+'}</span>
            </button>

            {isOpen && (
                <p className="pb-4 text-gray-400 text-sm leading-relaxed">
                    {answer}
                </p>
            )}
        </li>

    );
};

export default QuestionCard;