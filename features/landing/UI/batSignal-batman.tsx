import { motion } from "framer-motion"
import Image from "next/image"

const BatSignalBatman = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: [0.5, 0.65, 0.5],
                scale: 1,
            }}
            transition={{
                opacity: { duration: 15, repeat: Infinity, ease: "linear" },
            }}
            className="absolute top-17 left-16 z-8 pointer-events-none flex items-center justify-center -z-20"
        >
            <div className="w-50 h-48 bg-white/20 rounded-full blur-[60px] absolute" />
            <div className="w-34 h-32 bg-white/30 rounded-full blur-[40px] absolute" />

            <Image src={"/bat.png"} alt={'morcego'} width={60} height={72} className="relative -translate-y-1 drop-shadow-white/50" />
        </motion.div>
    )
}

export default BatSignalBatman;