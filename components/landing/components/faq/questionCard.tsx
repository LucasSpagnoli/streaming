"use client"

import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion'

type questionCardProps = {
    question: string;
    answer: string;
}

const QuestionCard = ({question, answer}: questionCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <li className="border-b border-gray-700">
            <button className="w-full md:py-4 py-1 text-left flex justify-between items-center text-white font-medium"
                    onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <motion.span animate={{rotate: isOpen ? 405 : 0}} transition={{duration: 0.6, ease: "easeInOut"}} className="text-red-600 ml-4">
                    +
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen &&
                    (<motion.div initial={{height: 0, opacity: 0}} animate={{height: "auto", opacity: 1}}
                                 exit={{height: 0, opacity: 0}}
                                 transition={{duration: 0.3, ease: "easeInOut"}}
                                 className={"overflow-hidden"}>
                        <p className="pb-4 text-gray-400 text-sm leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>)
                }
            </AnimatePresence>
        </li>

    );
};

export default QuestionCard;