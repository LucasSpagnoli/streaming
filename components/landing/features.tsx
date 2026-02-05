import OpinionCard from "@/components/landing/components/opinionCard";
import FaqFeature from "@/components/landing/components/faq/faqFeature";
import PlanCard from "@/components/landing/components/planCard";
import CTAButton from "@/components/landing/components/ctaButton";

const Features = () => {
    // TODO: Fazer versão pra celular (responsividade)
    return (
        <section className={"w-full overflow-hidden"}>
            {/*CTA*/}
            <article className="flex flex-col items-center justify-center w-full px-6 text-center">
                <h2 className="lg:text-4xl text-2xl mt-15 font-bold text-white leading-tight max-w-md">
                    Your Favorite Streaming Experience
                </h2>

                <p className="text-gray-400 my-5 text-sm md:text-md max-w-xs md:max-w-md lg:max-w-4xl">
                    Favorite is the best streaming experience for watching your favorite movies and shows on demand,
                    anytime, anywhere. With Favorite, you can enjoy a wide variety of content, including the latest
                    blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlist, so
                    you can easily find the content you want to watch.
                </p>

                <CTAButton play={true} text={"Start Watching Now"}/>
            </article>

            {/*Opinions*/}
            <article>
                <h2 className={"sm:text-2xl text-xl md:m-10 my-10 mx-2 font-bold text-white leading-tight"}>What they say about
                    us</h2>
                <div className={"flex justify-center flex-row"}>
                    <OpinionCard name={"LeBron James"} text={"Yoooo"}/>
                    <OpinionCard name={"LeBron James"} text={"Yoooo"}/>
                    <OpinionCard name={"LeBron James"} text={"Yoooo"}/>
                </div>
            </article>

            {/*FAQ*/}
            <FaqFeature/>

            {/*Buy plans*/}
            <article className={"flex flex-col"}>
                <h2 className={"sm:text-2xl text-xl lg:m-10 sm:m-5 m-4 font-bold text-white leading-tight"}>
                    Choose the best plan for you
                </h2>

                <section className={"flex justify-center"}>
                    <p className={"text-gray-400 text-md lg:ml-15 ml-8 mt-10 sm:mt-0 hidden sm:block"}>
                        Join Favorite and select from our flexible
                        subscription options tailored to suit your viewing preferences. Get ready for non-stop
                        entertainment!
                    </p>
                    {/*TODO: pôr função de mudar os planos*/}
                    <div className={"bg-dark border-darkGray sm:mr-4 sm:ml-8 mt-2 sm:mt-0 h-12"}>
                        <ul className={"flex p-1.5"}>
                            <li className={`block list-none text-white text-sm px-4 py-1.5 link-hover`}>
                                <button className={"link-hover"}>Monthly</button>
                            </li>
                            <li className={`block list-none text-white text-sm px-4 py-1.5 link-hover`}>
                                <button className={"link-hover"}>Yearly</button>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className={"flex justify-center mt-10 lg:gap-20 gap-10 sm:flex-row flex-col mx-auto sm:mx-0"}>
                    <PlanCard plan={"Basic Plan"}
                              text={"Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."}
                              price={9.99} monthly={true}/>
                    <PlanCard plan={"Standard Plan"}
                              text={"Access to a wider selection of movies and shows, including most new releases and exclusive content."}
                              price={12.99} monthly={true}/>
                    <PlanCard plan={"Premium Plan"}
                              text={"Access to a widest selection of movies and shows, including all new releases and Offline Viewing"}
                              price={14.99} monthly={true}/>
                </div>
            </article>

            {/*Free trial CTA*/}
            <article className={"flex flex-col items-center w-full mt-20"}>
                <div
                    className={"w-[70%] h-48 -bg-linear-300 from-red-700 to-black flex flex-col sm:flex-row items-center justify-around border-darkGray"}>
                    <h1 className={"sm:text-4xl text-2xl text-center font-bold text-white leading-tight"}>
                        Start your free trial today!
                    </h1>
                    <CTAButton play={true} text={"Start a free trial"}/>
                </div>

            </article>
        </section>
)
}

export default Features