import { motion } from 'framer-motion'
import { Element } from 'react-scroll'

import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => function HOC() {
  return (
    <Element name={idName}>
      <motion.section variants={staggerContainer()}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className={`${styles.padding} max-w-7xl mx-auto relative z-0`} >
        <Component />
      </motion.section>
    </Element>
  )
}

export default SectionWrapper