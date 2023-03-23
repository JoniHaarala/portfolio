import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

//template_2bss6rh template id
//service_netuh2g service id

//r2QXsf0it89yZkZRy public key

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    msj: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_netuh2g',
      'template_2bss6rh',
      {
        from_name: form.name,
        to_name: 'Jonatan Haarala',
        from_email: form.email,
        to_email: '',
        message: form.msj
      },
      'r2QXsf0it89yZkZRy'
    )
      .then(() => {
        setLoading(false);
        alert('Thanks! You have sent this email successfully')
        setForm({
          name: '',
          email: '',
          msj: ''
        })
      }, err => {
        setLoading(false);
        console.error(err);
        alert('Something went wrong')
      })
  };

  return (
    <section className="xl:mt-12 xl:flex-row flex gap-10 overflow-hidden flex-col-reverse">
      <motion.div
        variants={slideIn('left', 'tween', 0.3, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 text-white"
        >
          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your name</span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Whats your name?"
              className="py-4 px-6 bg-tertiary placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your email</span>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Whats your email?"
              className="py-4 px-6 bg-tertiary placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your message</span>
            <textarea
              rows={8}
              name='msj'
              value={form.msj}
              onChange={handleChange}
              placeholder="Whats do you want to say?"
              className="py-4 px-6 bg-tertiary placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type='submit'
            className="bg-tertiary shadow-primary shadow-md font-bold rounded-xl py-3 px-8 outline-none border-none w-fit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.3, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </section>
  )
}

export default SectionWrapper(Contact, "contact")