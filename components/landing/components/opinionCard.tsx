import {JSX} from "react";
import {CircleUser} from 'lucide-react'

type OpinionCardProps = {
    name: string;
    text: string;
};

const OpinionCard = ({name, text}: OpinionCardProps): JSX.Element => {
    return (
        <div className={"lg:w-68 sm:w-50 sm:h-80 h-40 w-30 sm:mx-5 mx-2 border-lightGray bg-customGray py-3 self-center shadow-xl"}>
            <h3 className={"sm:text-[1.1rem] text-[0.7rem] sm:mt-5 mt-2 font-bold text-white leading-tight flex items-center gap-2 sm:ml-4 ml-2 lg:ml-0"}><CircleUser className={"hidden sm:block lg:ml-5"}/>{name}</h3>
            <p className={"text-gray-400 sm:mt-5 mt-1 sm:text-[0.8rem] text-[0.6rem] text-center italic"}>{text}</p>
        </div>
    )
}

export default OpinionCard