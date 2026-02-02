import {Play} from "lucide-react";

type CTAButtonProps = {
    play: boolean;
    text: string;
}

const CTAButton = ({play, text}: CTAButtonProps) => {
    return (
        <button className={"bg-red-600 rounded text-white w-52 flex p-2 justify-center self-center"}>
            {play && <Play fill={"white"} width={15}/>}
            <p className={"indent-1.5"}>{text}</p>
        </button>
    )
}

export default CTAButton;