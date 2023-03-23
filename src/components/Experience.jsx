import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FormattedMessage } from 'react-intl';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


const ExperienceCard = ({ experiences }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#1d1836',
      color: '#fff'
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experiences.date}
    iconStyle={{ background: experiences.iconBg }}
    icon={
      <div className="flex justify-center items-center h-full">
        <img
          src={experiences.icon}
          alt={experiences.company_name}
          className="object-contain w-3/5 h-3/5"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-2xl font-bold">
        {experiences.title}
      </h3>
      <p className="text-secondary text-2xl">
        {experiences.company_name}
      </p>
    </div>
    <ul className="mt-5 ml-5 list-disc space-y-2">
      {
        experiences.points.map((point, indx) => (
          <li key={`point-${indx}`} className="text-white-100 text-sm pl-1 tracking-wider">
            {point}
          </li>
        ))
      }
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText}`}>
          <FormattedMessage
            id="experience-title"
            defaultMessage='Introduction'
          />
        </p>
        <p className={`${styles.sectionHeadText}`}>
          <FormattedMessage
            id="experience"
            defaultMessage='overviews'
          />
        </p>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {
            experiences.map((exp, index) => (
              <ExperienceCard index={index} experiences={exp} />
            ))
          }
        </VerticalTimeline>
      </div>
    </>
  )
}


export default SectionWrapper(Experience, "work");