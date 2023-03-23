import { BallCanvas } from './canvas'
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FormattedMessage } from 'react-intl';
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8">
      {
        technologies.map(tech => (
          <div
            key={tech.name}
            className="w-28 h-28"
          >
            <BallCanvas
              icon = {tech.icon}
            />
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, "");