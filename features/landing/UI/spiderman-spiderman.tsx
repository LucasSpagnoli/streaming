import { motion } from 'framer-motion';
import Image from 'next/image';

const Spiderman = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
                y: [0, -3, 0],
                opacity: 1
            }}
            transition={{ 
                opacity: { duration: 0.4 },
                y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            className='absolute top-15 -left-2 pointer-events-none z-20'
            >
            <Image src={'/spiderman.png'} alt={'spiderman'} width={80} height={300} />
        </motion.div>
    )
}

export default Spiderman;