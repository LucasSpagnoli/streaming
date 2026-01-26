import {Manrope} from "next/font/google";
import Link from "next/link";

const manrope = Manrope({subsets: ["latin"]})

type navLinkProps = {
    link: string,
    text: string,
}

function NavLink({link, text}: navLinkProps) {
    return (
        <li>
            <Link className={`block list-none text-white ${manrope.className} text-sm px-4 py-1.5 link-hover`} href={link}>{text}</Link>
        </li>
    )
}

export default NavLink