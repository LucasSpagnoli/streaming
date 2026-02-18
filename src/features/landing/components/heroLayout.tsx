'use client'

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion'
import { MoviesProps } from '@/types/movie.type';
import useCarrouselController from '../utils/carrousel-controller';
import { ShadowBatman, BatSignalBatman, BusEnterMeanGirls, CrownMeanGirls, Spiderman } from '@/features/landing/components'

const HeroLayout = ({ movies }: MoviesProps) => {

    const { index, prev, next } = useCarrouselController();

    return (

        <section
            suppressHydrationWarning
            className="relative w-full min-h-screen flex items-center overflow-hidden">

            {/* Background da esquerda e da direita */}
            <div className="absolute inset-0 flex -z-10">
                <div className={`w-3/5 h-full bg-${index} theme-transition`} />
                <div className="w-2/5 h-full bg-dark" />
            </div>

            {/* Pontos guia para navegação carrossel, logo abaixo do header, no meio da tela */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 flex gap-2 z-30 theme-transition">
                <span style={{ order: index }}
                    className="w-2.5 h-2.5 rounded-full bg-black theme-transition" />
                <span style={{ order: index === 2 ? 0 : index + 1 }}
                    className="w-2 h-2 rounded-full mt-px bg-white theme-transition" />
                <span style={{ order: index === 0 ? 2 : index - 1 }}
                    className="w-2 h-2 rounded-full mt-px bg-white theme-transition" />
            </div>

            {/* Setas do carrossel */}
            <div className="absolute top-23 right-20 flex gap-4 z-30">
                <button
                    className={`bg-dark text-white hover:text-gray-600 hover:scale-90 transition hover:cursor-pointer`}
                    onClick={prev}>
                    <ChevronLeft size={20} />
                </button>
                <button
                    className={`bg-dark text-white hover:text-gray-600 hover:scale-90 transition hover:cursor-pointer`}
                    onClick={next}>
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Design principal */}
            <div className="flex items-center w-full relative">

                {/* Título e descrição */}
                <div className="w-[30%] ml-15 p-10 h-108 mt-10 flex flex-col justify-start bg-black/80 backdrop-blur-md shrink-0 absolute">

                    <AnimatePresence mode={'wait'}>
                        <motion.div key={index}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}>
                            <h1 className="text-4xl font-bold text-white leading-tight lg:mb-3 -z-1">
                                {movies[index].name}
                            </h1>
                            <p className="text-gray-400 text-lg line-clamp-5 -z-1">
                                {movies[index].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <Link href={'/login'} className={`w-[70%] self-center py-4 bg-${index} ease-in-out duration-300 text-white font-bold mt-auto text-center inline-block theme-transition 
                    hover:-translate-y-0.5 hover:shadow-xl transition-all hover:scale-105 z-20`}>
                        <p>Watch Now</p>
                    </Link>
                </div>

                {/* Imagens */}
                <div className="flex gap-15 flex-nowrap items-end">

                    <motion.div
                        key={index - 1}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: 0.6,
                            filter: "grayscale(100%)"
                        }}
                        transition={{ type: "spring", duration: 0.8, stiffness: 300, damping: 30 }}
                        className="relative shrink-0 w-[50%] -ml-100 -z-5">
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
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "grayscale(0%)"
                        }}
                        transition={{ type: "spring", duration: 0.8, stiffness: 300, damping: 30 }}
                        className="relative shrink-0 w-[60%] mx-10 mt-30 shadow-2xl -z-5">
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
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: 0.6,
                            filter: "grayscale(100%)"
                        }}
                        transition={{ type: "spring", duration: 0.8, stiffness: 300, damping: 30 }}
                        className="relative shrink-0 w-[50%]">
                        <Image
                            src={`https://image.tmdb.org/t/p/original${movies[index === 2 ? 0 : index + 1].image}`}
                            alt="Next movie logo"
                            width={1220}
                            height={610}
                            className="object-cover rounded-sm"
                            key={index}
                        />
                    </motion.div>

                </div>

            </div>

            {/* Detalhes */}
            <article>
                {index === 0 &&
                    <>
                        {/* Sombra inferior */}
                        <ShadowBatman />

                        {/* Bat sinal */}
                        <BatSignalBatman />
                    </>
                }

                {index === 1 &&
                    <>
                        {/* Ônibus entra da esquerda e para na posição */}
                        <BusEnterMeanGirls />

                        {/* Coroa na frente da descrição */}
                        <CrownMeanGirls />
                    </>
                }

                {index === 2 &&
                    <>
                        <Spiderman />
                    </>
                }
            </article>

        </section>
    );
};

export default HeroLayout;