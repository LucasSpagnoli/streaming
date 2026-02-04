import FooterLink from "@/components/Footer/footerLink";
import {Facebook, Linkedin, Twitter} from "lucide-react";
import FooterTitle from "@/components/Footer/footerTitle";

const Footer = () => {
    return (
        <article className={"bg-black mt-20 py-10"}>
            <section className={"flex justify-around"}>
                <ul>

                    <FooterTitle text={"Home"} />
                    <FooterLink text={"Categories"}/>
                    <FooterLink text={"Devices"}/>
                    <FooterLink text={"Pricing"}/>
                    <FooterLink text={"FAQ"}/>
                </ul>
                <ul>
                    <FooterTitle text={"Movies"} />
                    <FooterLink text={"Genres"}/>
                    <FooterLink text={"Trending"}/>
                    <FooterLink text={"New Release"}/>
                    <FooterLink text={"Popular"}/>
                </ul>
                <ul>
                    <FooterTitle text={"Shows"} />
                    <FooterLink text={"Genres"}/>
                    <FooterLink text={"Trending"}/>
                    <FooterLink text={"New Release"}/>
                    <FooterLink text={"Popular"}/>
                </ul>
                <ul>
                    <FooterTitle text={"Support"} />
                    <FooterLink text={"Contact Us"}/>
                </ul>
                <ul>
                    <FooterTitle text={"Subscription"} />
                    <FooterLink text={"Plans"}/>
                    <FooterLink text={"Features"}/>
                </ul>
                <ul>
                    <FooterTitle text={"Connect With Us"} />
                    <div className={"flex justify-between mt-5"}>
                        <Facebook size={36} fill={"white"} className={"link-hover p-1"}/>
                        <Twitter size={36} fill={"white"} className={"link-hover p-1"}/>
                        <Linkedin size={36} fill={"white"} className={"link-hover p-1"}/>
                    </div>
                </ul>
            </section>
        </article>
    )
}

export default Footer