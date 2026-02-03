import {JSX} from "react";

type FooterLinkProps = {
    text: string;
}

const FooterLink = ({text}: FooterLinkProps): JSX.Element => {
    return (
        <li className={"text-gray-400 text-md"}>{text}</li>
    )
}

export default FooterLink;