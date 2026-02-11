import {Play} from "lucide-react";
import Link from "next/link";

type CTAButtonProps = {
    play: boolean;
    text: string;
}

const CTAButton = ({play, text}: CTAButtonProps) => {
    return (
        <Link
            className={"group bg-red-600 hover:bg-red-500 rounded text-white hover:shadow-lg hover:shadow-black hover:scale-105 active:scale-100 transition-all duration-300 lg:w-52 max-w-xs flex md:p-2 p-4 justify-center self-center"}
            href={"/login"}>
            {play && <Play fill={"white"} width={15}/>}
            <p className={"indent-1.5"}>{text}</p>
        </Link>
    )
}

export default CTAButton;