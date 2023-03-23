import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { testimonials } from '../constants';
import { FormattedMessage } from 'react-intl';

const FeebackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div variants={fadeIn('', 'spring', 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full text-white"
  >
    <p className="font-black text-5xl">"</p>
    <div className="mt-1">
      <p className="tracking-wider text-lg">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col text-sm">
          <p className="blue-text-gradient"><span>@ </span>{name}</p>
          <p className="mt-1 text-secondary text-xs">{designation} of {company}</p>
        </div>
        <img src={image} alt={`feeback by ${name}`} className="w-10 h-10 object-cover rounded-full"/>
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <main className="mt-12 bg-black-100 rounded-[20px]">
      <section className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div
          variants={textVariant()}
        >
          <p className={`${styles.sectionSubText}`}>
            <FormattedMessage
              id='feddback'
              defaultMessage="some feedback"
            />
          </p>
          <h2 className={`${styles.sectionHeadText}`}>
            <FormattedMessage
              id='feddback-testimonials'
              defaultMessage="some feedback"
            />
          </h2>
        </motion.div>
      </section>
      <section className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {
          testimonials.map((testi, index) => (
            <FeebackCard key={testimonials.name} index={index} {...testi}>

            </FeebackCard>
          ))
        }
      </section>
    </main>
  )
}

export default SectionWrapper(Feedbacks, '')