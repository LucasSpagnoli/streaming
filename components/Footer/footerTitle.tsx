import {JSX} from "react";

type FooterTitleProps = {
    text: string;
}

const FooterTitle = ({text}: FooterTitleProps): JSX.Element => {
    return (
        <h1 className={"font-bold text-lg text-white mb-2"}>{text}</h1>
    )
}

export default FooterTitle;