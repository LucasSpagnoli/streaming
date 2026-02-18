import { motion } from "framer-motion"
import Image from "next/image"

const BusEnterMeanGirls = () => {
    return (
        <>
            <motion.div initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ duration: 2, ease: "easeOut" }} className="absolute -bottom-7 -right-50 -z-10">
                <Image src="/bus.png" alt="onibus" width={100} height={72} />
            </motion.div>

            <motion.div initial={{ y: 0, opacity: 1 }} animate={{ scale: 0, opacity: 0, rotate: 720 }} transition={{ delay: 0.3, duration: 0.6, ease: "easeIn" }} className="absolute bottom-0 left-50"
            >
                <Image src="/woman.png" alt="garota" width={40} height={40} />
            </motion.div>
        </>
    )
}

export default BusEnterMeanGirls;