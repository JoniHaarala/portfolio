import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { FormattedMessage } from 'react-intl';
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon, index }) => {
  return <Tilt className="w-full xs:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-px rounded-3xl shadow-card"
    >
      <div className="bg-tertiary rounded-3xl py-5 px-12 min-h-[280px] flex justify-evenly flex-col ">
        <img src={icon} alt="icon" className="w-16 h-16 object-contain self-center" />
        <h3 className="text-white text-xl text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText}`}>
          <FormattedMessage
            id="intro"
            defaultMessage='Introduction'
          />
        </p>
        <p className={`${styles.sectionHeadText}`}>
          <FormattedMessage
            id="overview"
            defaultMessage='overviews'
          />
        </p>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <span>
          <FormattedMessage
            id="description"
            defaultMessage='overviews'
          />
        </span>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")