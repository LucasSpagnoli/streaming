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

            <div className="flex items-center w-full pl-20 relative">
                <div className="w-[480px] p-14 bg-dark backdrop-blur-md flex-shrink-0 z-20 mt-10">
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

                {/* Container do Carrossel - Resolvendo o problema de empilhamento e tamanho */}
                <div className="flex gap-6 ml-[-40px] flex-nowrap items-end overflow-visible">
                    {/* Imagem Principal - Redimensionada para não "estourar" o layout */}
                    <div className="relative flex-shrink-0 w-[800px] h-[400px] shadow-2xl">
                        <Image
                            src="/strangerThingsLogo2.jpg"
                            alt="Hero 1"
                            fill
                            sizes="800px"
                            className="object-cover rounded-sm"
                            priority
                        />
                        {/* Tag flutuante Bohauss */}
                        <div
                            className="absolute bottom-6 right-6 bg-[#0F0F0F]/90 p-5 min-w-[240px] border border-[#1F1F1F]">
                            <h3 className="font-bold text-white text-lg uppercase tracking-tight">Bohauss</h3>
                            <p className="text-xs text-gray-500 mb-2 font-mono">Luxury big sofa 2-seat</p>
                            <div className="flex justify-between items-center mt-3 border-t border-[#1F1F1F] pt-3">
                                <span className="font-bold text-white">Rp 17.000.000</span>
                                <ChevronRight size={18} className="text-white"/>
                            </div>
                        </div>
                    </div>

                    {/* Imagem 2 - Secundária */}
                    <div
                        className="relative flex-shrink-0 w-[500px] h-[320px] opacity-60 grayscale hover:grayscale-0 transition-all">
                        <Image
                            src="/wandinhaLogo2.jpg"
                            alt="Hero 2"
                            fill
                            sizes="500px"
                            className="object-cover rounded-sm"
                        />
                    </div>

                    {/* Imagem 3 */}
                    <div className="relative flex-shrink-0 w-[500px] h-[320px] opacity-30">
                        <Image
                            src="/sherlockHolmesLogo2.jpg"
                            alt="Hero 3"
                            fill
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