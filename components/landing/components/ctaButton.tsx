import {Play} from "lucide-react";
import Link from "next/dist/client/link";

type CTAButtonProps = {
    play: boolean;
    text: string;
}

const CTAButton = ({play, text}: CTAButtonProps) => {
    return (
        <Link className={"bg-red-600 rounded text-white md:w-52 max-w-xs flex md:p-2 p-4 justify-center self-center mt-5"} href={"/login"}>
            {play && <Play fill={"white"} width={15}/>}
            <p className={"indent-1.5"}>{text}</p>
        </Link>
    )
}

export default CTAButton;