'use client'

import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useState} from "react";
import Link from "next/link";
import {AnimatePresence, motion} from 'framer-motion'
import {GiBat, GiBatMask} from "react-icons/gi";
import {black} from "next/dist/lib/picocolors";

type MovieProps = {
    name: string,
    description: string,
    image: string
}

type MoviesProps = {
    movies: MovieProps[]
}

const HeroClient = ({movies}: MoviesProps) => {

    const [index, setIndex] = useState(0);

    const prev = () => {
        const i = index === 0 ? 2 : index - 1;
        setIndex(i)
    }
    const next = () => {
        const i = index === 2 ? 0 : index + 1;
        setIndex(i)
    }

    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">

            {/* Background da esquerda e da direita */}
            <div className="absolute inset-0 flex -z-10">
                <div className={`w-3/5 h-full bg-${index} theme-transition`}/>
                <div className="w-2/5 h-full bg-dark"/>
            </div>

            {/* Pontos guia para navegação carrossel, logo abaixo do header, no meio da tela */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 flex gap-2 z-30 theme-transition">
                <span style={{order: index}}
                      className="w-2.5 h-2.5 rounded-full bg-black theme-transition"/>
                <span style={{order: index === 2 ? 0 : index + 1}}
                      className="w-2 h-2 rounded-full mt-px bg-white theme-transition"/>
                <span style={{order: index === 0 ? 2 : index - 1}}
                      className="w-2 h-2 rounded-full mt-px bg-white theme-transition"/>
            </div>

            {/* Setas do carrossel */}
            <div className="absolute top-23 right-20 flex gap-4 z-30">
                <button
                    className={`bg-dark text-white hover:text-gray-600 hover:scale-90 transition`}
                    onClick={prev}>
                    <ChevronLeft size={20}/>
                </button>
                <button
                    className={`bg-dark text-white hover:text-gray-600 hover:scale-90 transition`}
                    onClick={next}>
                    <ChevronRight size={20}/>
                </button>
            </div>

            {/* Design principal */}
            <div className="flex items-center w-full relative">

                {/* Título e descrição */}
                <div className="w-[30%] ml-15 p-10 h-108 mt-10 flex flex-col justify-start bg-black/80 backdrop-blur-md shrink-0 z-20 absolute">

                    <AnimatePresence mode={'wait'}>
                        <motion.div key={index}
                                    initial={{opacity: 0, y: -20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: 10}}
                                    transition={{duration: 0.3}}>
                            <h1 className="text-4xl font-bold text-white leading-tight lg:mb-3">
                                {movies[index].name}
                            </h1>
                            <p className="text-gray-400 text-lg line-clamp-5">
                                {movies[index].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <Link href={'/login'} className={`w-[70%] self-center py-4 bg-${index} ease-in-out duration-300 text-white font-bold mt-auto text-center inline-block theme-transition 
                    hover:-translate-y-0.5 hover:shadow-xl transition-all hover:scale-105`}>
                        <p>Watch Now</p>
                    </Link>
                </div>

                {/* Imagens */}
                <div className="flex gap-15 flex-nowrap items-end">

                    <motion.div
                        key={index - 1}
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{
                            opacity: 0.6,
                            filter: "grayscale(100%)"
                        }}
                        transition={{type: "spring", duration: 0.8, stiffness: 300, damping: 30}}
                        className="relative shrink-0 w-[50%] -ml-100">
                        <Image
                            src={`https://image.tmdb.org/t/p/original${movies[index === 0 ? 2 : index - 1].image}`}
                            alt="Previous movie logo"
                            width={1220}
                            height={610}
                            className="object-cover rounded-sm"
                        />
                    </motion.div>

                    <motion.div
                        key={index}
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "grayscale(0%)"
                        }}
                        transition={{type: "spring", duration: 0.8, stiffness: 300, damping: 30}}
                        className="relative shrink-0 w-[60%] mx-10 mt-30 shadow-2xl">
                        <Image
                            src={`https://image.tmdb.org/t/p/original${movies[index].image}`}
                            alt="Main movie logo"
                            className="object-cover rounded-sm"
                            priority
                            width={1220}
                            height={610}
                        />
                    </motion.div>

                    <motion.div
                        key={index + 1}
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{
                            opacity: 0.6,
                            filter: "grayscale(100%)"
                        }}
                        transition={{type: "spring", duration: 0.8, stiffness: 300, damping: 30}}
                        className="relative shrink-0 w-[50%]">
                        <Image
                            src={`https://image.tmdb.org/t/p/original${movies[index === 2 ? 0 : index + 1].image}`}
                            alt="Next movie logo"
                            width={1220}
                            height={610}
                            sizes="500px"
                            className="object-cover rounded-sm"
                            key={index}
                        />
                    </motion.div>

                </div>

            </div>

            {/* Detalhes */}
            {index === 0 &&
                <>
                    {/* Sombra inferior */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 0.5}}
                        className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10"
                    />

                    {/* Bat sinal */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{
                            opacity: [0.5, 0.65, 0.5],
                            scale: 1,
                        }}
                        transition={{
                            opacity: {duration: 15, repeat: Infinity, ease: "linear"},
                        }}
                        className="absolute top-17 left-16 z-10 pointer-events-none flex items-center justify-center"
                    >
                        <div className="w-60 h-48 bg-white/20 rounded-full blur-[60px] absolute"/>
                        <div className="w-44 h-32 bg-white/30 rounded-full blur-[30px] absolute"/>

                        <Image src={"/bat.png"} alt={'morcego'} width={60} height={72} className="relative -translate-y-1 drop-shadow-white/50"/>
                    </motion.div>
                </>
            }

            {index === 1 &&
            <>
                {/* Ônibus entra da esquerda e para na posição */}
                <motion.div initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ duration: 2, ease: "easeOut" }} className="absolute -bottom-7 -right-50"
                >
                    <Image src="/bus2.png" alt="onibus" width={100} height={72} />
                </motion.div>

                <motion.div initial={{ y: 0, opacity: 1 }} animate={{ scale: 0, opacity: 0, rotate: 720 }} transition={{ delay: 0.3, duration: 0.6, ease: "easeIn" }} className="absolute bottom-0 left-50"
                >
                    <Image src="/woman.png" alt="garota" width={40} height={40} />
                </motion.div>

                <motion.div className={'z-20'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                    <Image src={'/coroa3.png'} alt={'coroa'} width={200} height={80}
                                   className={'absolute top-5 left-89 z-20 rotate-24'}/>
                </motion.div>
            </>
            }

            {index === 2 &&
            <>
            </>
            }
        </section>
    );
};

export default HeroClient;