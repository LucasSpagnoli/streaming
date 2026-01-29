import {JSX} from "react";
import {CircleUser} from 'lucide-react'

type OpinionCardProps = {
    name: string;
    text: string;
};

const OpinionCard = ({name, text}: OpinionCardProps): JSX.Element => {
    return (
        // TODO: sombras
        <div className={"w-68 h-80 border-lightGray bg-customGray ml-20 p-3 px-5"}>
            <h3 className={"text-[1.1rem] mt-5 font-bold text-white leading-tight flex items-center gap-2"}><CircleUser/>{name}</h3>
            <p className={"text-gray-400 mt-5 text-[0.8rem] text-center italic"}>{text}</p>
        </div>
    )
}

export default OpinionCard