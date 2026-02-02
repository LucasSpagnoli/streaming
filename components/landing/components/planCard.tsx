import {JSX} from "react";
import CTAButton from "@/components/landing/components/ctaButton";

type OpinionCardProps = {
    plan: string;
    text: string;
    price: number;
    monthly: boolean;
};

const PlanCard = ({plan, text, price, monthly}: OpinionCardProps): JSX.Element => {
    return (
        // TODO: sombras
        <div className={"w-88 h-68 border-lightGray bg-customGray p-3 px-5 flex flex-col"}>
            <h3 className={"text-[1rem] mt-3 font-bold text-white leading-tight flex items-center"}>{plan}</h3>
            <p className={"text-gray-400 mt-3 text-[0.7rem]"}>{text}</p>
            <div className={"flex my-10"}>
                <h1 className={"text-[2rem] font-bold text-white leading-tight flex items-center"}>${price}</h1>
                <p className={"text-gray-400 text-[0.7rem] self-end"}>{monthly ? "/month" : "/year"}</p>
            </div>
            <CTAButton play={false} text={"Choose plan"}/>
        </div>
    )
}

export default PlanCard