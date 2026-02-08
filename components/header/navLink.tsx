import Link from "next/link";

type navLinkProps = {
    link: string,
    text: string,
}

function NavLink({link, text}: navLinkProps) {
    return (
        <li>
            <Link className={`block list-none text-white text-sm px-4 py-1.5 link-hover`} href={link}>{text}</Link>
        </li>
    )
}

export default NavLink