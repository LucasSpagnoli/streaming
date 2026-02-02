import {Play} from "lucide-react";
import OpinionCard from "@/components/landing/components/opinionCard";
import FaqFeature from "@/components/landing/components/faq/faqFeature";
import NavLink from "@/components/navLink";
import PlanCard from "@/components/landing/components/planCard";
import CTAButton from "@/components/landing/components/ctaButton";

const Features = () => {
    // TODO: Fazer versão pra celular (responsividade)
    return (
        <section className={"bg-dark"}>
            {/*CTA*/}
            <article className={"flex flex-col items-center justify-center"}>
                <h2 className={"text-4xl mt-15 font-bold text-white leading-tight"}>Your Favorite Streaming
                    Experience</h2>
                <p className={"text-gray-400 w-240 mt-5 text-md text-center"}>Favorite is the best streaming
                    experience
                    for watching your favorite movies and shows on demand, anytime, anywhere. With Favorite, you can
                    enjoy a
                    wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and
                    more.
                    You can also create your own watchlist, so you can easily find the content you want to watch.</p>

                {/*TODO: Mudar design e atribuir função*/}
                <CTAButton play={true} text={"Start Watching Now"}/>
            </article>

            {/*Opinions*/}
            <article>
                <h2 className={"text-2xl m-10 font-bold text-white leading-tight"}>What they say about us</h2>
                <div className={"flex justify-center -ml-20"}>
                    <OpinionCard name={"LeBron James"} text={"Yoooo"}/>
                    <OpinionCard name={"LeBron James"} text={"Yoooo"}/>
                    <OpinionCard name={"LeBron James"} text={"Yoooo"}/>
                </div>
            </article>

            {/*FAQ*/}
            <FaqFeature/>

            {/**/}
            <article className={"flex flex-col"}>
                <h2 className={"text-2xl m-15 font-bold text-white leading-tight"}>
                    Choose the best plan for you
                </h2>

                <section className={"flex"}>
                    <p className={"text-gray-400 text-md ml-15 -mt-10"}>Join Favorite and select from our flexible
                        subscription options tailored to suit your viewing preferences. Get ready for non-stop
                        entertainment!</p>
                    {/*TODO: fazer clickable e pôr função de mudar os planos*/}
                    <div className={"bg-dark border-darkGray -mt-13 ml-8"}>
                        <ul className={"flex p-1.5"}>
                            <li className={`block list-none text-white text-sm px-4 py-1.5 link-hover`}>Monthly</li>
                            <li className={`block list-none text-white text-sm px-4 py-1.5 link-hover`}>Yearly</li>
                        </ul>
                    </div>
                </section>

                <div className={"flex justify-center mt-10 gap-20"}>
                    <PlanCard plan={"Basic Plan"} text={"Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."} price={9.99} monthly={true}/>
                    <PlanCard plan={"Standard Plan"} text={"Access to a wider selection of movies and shows, including most new releases and exclusive content."} price={12.99} monthly={true}/>
                    <PlanCard plan={"Premium Plan"} text={"Access to a widest selection of movies and shows, including all new releases and Offline Viewing"} price={14.99} monthly={true}/>
                </div>
            </article>

        </section>
    )
}

export default Features