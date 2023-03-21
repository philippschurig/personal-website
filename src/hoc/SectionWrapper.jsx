import { motion } from 'framer-motion'

import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName, bgColor = 'bg-gray-900') =>
  function HOC() {
    return (
      <motion.section id={idName}
                      variants={staggerContainer()}
                      initial="hidden"
                      whileInView="show"
                      viewport={{once: true, amount: 0.2}}
                      className={`${bgColor} px-4 py-16 relative z-0`}>
          <Component />
      </motion.section>

    )
}

export default SectionWrapper