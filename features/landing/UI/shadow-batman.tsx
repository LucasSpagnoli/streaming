import { motion } from "framer-motion"

const ShadowBatman = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-8"
        />
    )
}

export default ShadowBatman;