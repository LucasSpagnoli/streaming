import {JSX} from "react";

type FooterTitleProps = {
    text: string;
}

const FooterTitle = ({text}: FooterTitleProps): JSX.Element => {
    return (
        <li>
            <h1 className={"font-bold text-lg text-white mb-2"}>{text}</h1>
        </li>
    )
}

export default FooterTitle;