import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 flex -z-10">
                <div className="w-3/5 h-full bg-hill"/>
                <div className="w-2/5 h-full bg-dark"/>
            </div>

            {/*// TODO: Mudar cores e posição*/}
            <div className="absolute top-10 left-[60%] -translate-x-1/2 flex gap-2 z-30">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8A37E]"/>
                <span className="w-2 h-2 rounded-full bg-[#1F1F1F] mt-[1px]"/>
                <span className="w-2 h-2 rounded-full bg-[#1F1F1F] mt-[1px]"/>
            </div>


            {/*// TODO: Mudar cores*/}
            <div className="absolute top-8 right-12 flex gap-4 z-30">
                <button className="p-2 rounded-full bg-[#1F1F1F] text-white hover:bg-gray-700 transition">
                    <ChevronLeft size={20}/>
                </button>
                <button className="p-2 rounded-full bg-[#E8A37E] text-white hover:scale-105 transition shadow-lg">
                    <ChevronRight size={20}/>
                </button>
            </div>

            <div className="flex items-center w-full relative">
                <div className="w-[30rem] mb-20 ml-20 p-14 bg-black/80 backdrop-blur-md flex-shrink-0 z-20 absolute">
                    <h1 className="text-5xl font-bold text-white leading-tight mb-6">
                        Title
                    </h1>
                    <p className="text-gray-400 text-lg mb-10">
                        Description
                    </p>

                    {/*//TODO: Alterar design*/}
                    <button
                        className="w-full py-4 bg-hill text-white font-bold rounded-[3px] hover:brightness-110 transition">
                        Watch Now
                    </button>

                </div>

                <div className="flex gap-20 flex-nowrap items-end ">

                    <div
                        className="relative flex-shrink-0 w-[50%] -ml-110 opacity-60 grayscale hover:grayscale-0 transition-all">
                        <Image
                            src="/wandinhaLogo2.jpg"
                            alt="Previous movie logo"
                            width={1220}
                            height={610}
                            className="object-cover rounded-sm"
                        />
                    </div>

                    <div className="relative flex-shrink-0 w-[60%] ml-30 mt-30 shadow-2xl">
                        <Image
                            src="/residenciaHillLogo2.jpg"
                            alt="Main movie logo"
                            className="object-cover rounded-sm"
                            priority
                            width={1220}
                            height={610}
                        />
                    </div>

                    <div className="relative flex-shrink-0 w-[50%] opacity-30">
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