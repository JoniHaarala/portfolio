import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

import { FormattedMessage } from 'react-intl';
import { LngContext } from '../context/LangContext'
import es from '../assets/es.png';
import en from '../assets/en.png';
import fi from '../assets/fi.png';

const Navbar = () => {

  const idioma = useContext(LngContext);

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 top-0 fixed z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Jonatan &nbsp;
            <span className='sm:block hidden'> | JH</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-col sm:items-end md:items-center md:flex-row md:gap-5 lg:gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <div className="">
            <button onClick={() => idioma.establecerLenguaje('es-ES')}><img src={es} alt="es" /></button>
            <button onClick={() => idioma.establecerLenguaje('en-US')}><img src={en} alt="en" /></button>
            <button onClick={() => idioma.establecerLenguaje('fi-FI')}><img src={fi} alt="fi" /></button>
          </div>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <div className="">
                <button onClick={() => idioma.establecerLenguaje('en-US')}><img src={en} alt="en" /></button>
                <button onClick={() => idioma.establecerLenguaje('es-ES')}><img src={es} alt="es" /></button>
                <button onClick={() => idioma.establecerLenguaje('fi-FI')}><img src={fi} alt="fi" /></button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
