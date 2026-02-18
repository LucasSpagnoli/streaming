import Image from 'next/image';
import { motion } from 'framer-motion';

const crownMeanGirls = () => {
    return (
        <motion.div className={'z-20'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
            <Image src={'/coroa.png'} alt={'crown'} width={200} height={80}
                className={'absolute top-5 left-89 z-20 rotate-24'} />
        </motion.div>
    )
}

export default crownMeanGirls;