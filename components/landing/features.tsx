import {Play} from "lucide-react";
import OpinionCard from "@/components/landing/components/opinionCard";
import FaqFeature from "@/components/landing/components/faq/faqFeature";

const Features = () => {
    return (
        <section className={"bg-dark"}>
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
                <button className={"bg-red-600 mt-10 rounded text-white w-52 flex p-2 justify-center"}><Play
                    fill={"white"} width={15}/> <p className={"indent-1.5"}>Start Watching now</p></button>
            </article>

            <article>
                <h2 className={"text-2xl m-10 font-bold text-white leading-tight"}>What they say about us</h2>
                <div className={"flex justify-center -ml-20"}>
                    <OpinionCard name={"LeBron James"} text={"Yoooo"}/>
                    <OpinionCard name={"LeBron James"} text={"Yoooo"}/>
                    <OpinionCard name={"LeBron James"} text={"Yoooo"}/>
                </div>
            </article>

            <FaqFeature/>

        </section>
    )
}

export default Features