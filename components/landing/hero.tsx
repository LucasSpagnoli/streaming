import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";

const Hero = () => {
    return (
        // TODO: Precisa fazer todo o design com a api do TMDB
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 flex -z-10">
                <div className="w-3/5 h-full bg-hill"/>
                <div className="w-2/5 h-full bg-dark"/>
            </div>

            {/*// TODO: Mudar cores*/}
            <div className="absolute top-20 left-[50%] -translate-x-1/2 flex gap-2 z-30">
                <span className="w-2.5 h-2.5 rounded-full bg-dark"/>
                <span className="w-2 h-2 rounded-full bg-dark mt-px"/>
                <span className="w-2 h-2 rounded-full bg-dark mt-px"/>
            </div>


            <div className="absolute top-23 right-20 flex gap-4 z-30">
                <button className="bg-dark text-white hover:text-gray-600 hover:scale-90 transition">
                    <ChevronLeft size={20}/>
                </button>
                <button className="bg-dark text-white transition hover:text-gray-600 hover:scale-90 shadow-lg">
                    <ChevronRight size={20}/>
                </button>
            </div>

            <div className="flex items-center w-full relative">
                <div className="w-[30%] ml-15 p-10 h-108 mt-10 flex flex-col justify-start bg-black/80 backdrop-blur-md shrink-0 z-20 absolute">
                    <h1 className="text-5xl font-bold text-white leading-tight">
                        Title
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Description
                    </p>

                    {/*//TODO: Alterar design e atribuir função*/}
                    <button className="w-[70%] self-center py-4 bg-hill text-white font-bold rounded-[3px] mt-auto">
                        Watch Now
                    </button>
                </div>
                <div className="flex gap-15 flex-nowrap items-end">
                    <div className="relative shrink-0 w-[50%] -ml-100 opacity-60 grayscale hover:grayscale-0 transition-all">
                        <Image
                            src="/wandinhaLogo2.jpg"
                            alt="Previous movie logo"
                            width={1220}
                            height={610}
                            className="object-cover rounded-sm"
                        />
                    </div>

                    <div className="relative shrink-0 w-[60%] mx-10 mt-30 shadow-2xl">
                        <Image
                            src="/residenciaHillLogo2.jpg"
                            alt="Main movie logo"
                            className="object-cover rounded-sm"
                            priority
                            width={1220}
                            height={610}
                        />
                    </div>

                    <div className="relative shrink-0 w-[50%] opacity-30">
                        <Image
                            src="/sherlockHolmesLogo2.jpg"
                            alt="Next movie logo"
                            width={1220}
                            height={610}
                            sizes="500px"
                            className="object-cover rounded-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;