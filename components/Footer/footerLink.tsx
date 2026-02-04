import {JSX} from "react";
import Link from "next/dist/client/link";

type FooterLinkProps = {
    text: string;
}

const FooterLink = ({text}: FooterLinkProps): JSX.Element => {
    return (
        <li className={"text-gray-400 text-md"}><Link href={"/"}>{text}</Link></li>
    )
}

export default FooterLink;