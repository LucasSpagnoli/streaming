import {JSX} from "react";
import { PlanCardProps } from '../types/cards.type';
import { CTAButton } from "@/components";


const PlanCard = ({plan, text, price, monthly}: PlanCardProps): JSX.Element => {
    return (
        <div className={"lg:w-70 w-50 h-68 border-lightGray bg-customGray py-3 px-5 flex flex-col"}>
            <h3 className={"text-[1rem] mt-3 font-bold text-white leading-tight flex items-center"}>{plan}</h3>
            <p className={"text-gray-400 mt-3 text-[0.7rem]"}>{text}</p>
            <div className={"flex sm:mt-10 my-5"}>
                <h1 className={"text-[2rem] font-bold text-white leading-tight flex items-center"}>${price}</h1>
                <p className={"text-gray-400 text-[0.7rem] self-end"}>{monthly ? "/month" : "/year"}</p>
            </div>
            <CTAButton play={false} text={"Choose plan"} url="/subscription"/>
        </div>
    )
}

export default PlanCard