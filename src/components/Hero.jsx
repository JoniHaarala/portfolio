import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from 'react-intl'
import { LngContext } from '../context/LangContext'
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  const lang = useContext(LngContext)


  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "Backend Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <div
      className="relative w-full h-screen mx-auto"
    >
      <section className={`${styles.paddingX} absolute inset-0 top-[120px] flex flex-row max-w-7xl mx-auto items-start gap-5`}>
        <section
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </section>

        <section className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <FormattedMessage
              id="name"
              defaultMessage="Hi! I'm"
            />
             <span className="text-[#916fff]"> Jonatan</span>
          </h1>
          <p className={`${styles.heroSubText} italic mt-8 text-gray-300`}>
            {
              //el data-rotate es opcional
            }
            <span className="txt-rotate" dataperiod="1000" data-rotate='["Web Developer", "Web Designer", "Backend Developer"]'>
              <span className="wrap">{text}
              </span>
            </span>
          </p>
          
        </section>
      </section>

      <ComputersCanvas />

      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <a href="#about">
          <div className="w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            >

            </motion.div>
          </div>
        </a>
      </div>

    </div>
  )
}

export default Hero