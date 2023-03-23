import React, { useState } from 'react'
import en from '../lang/en.json';
import es from '../lang/es.json';
import fi from '../lang/fi.json';
import { IntlProvider } from 'react-intl';

const LngContext = React.createContext();

const LangProvider = ({ children }) => {
    let localePorDefecto;
    let mensajesPorDefecto;
    const lang = localStorage.getItem('lang');

    if (lang) {
        localePorDefecto = lang

        if (lang === 'es-ES') {
            mensajesPorDefecto = es;
        } else if (lang === 'en-US') {
            mensajesPorDefecto = en
        } else if (lang === 'fi-FI') {
            mensajesPorDefecto = fi
        } else {
            localePorDefecto = 'en-US'
            mensajesPorDefecto = en
        }
    }

    const [mensajes, establecerMensajes] = useState(mensajesPorDefecto);
    const [locale, establecerLocale] = useState(localePorDefecto);

    const establecerLenguaje = (lenguaje) => {
        switch (lenguaje) {
            case 'es-ES':
                establecerMensajes(es);
                establecerLocale('es-ES');
                localStorage.setItem('lang', 'es-MX');
                break;
            case 'en-US':
                establecerMensajes(en);
                establecerLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            case 'fi-FI':
                establecerMensajes(fi);
                establecerLocale('fi-FI');
                localStorage.setItem('lang', 'es-MX');
                break;
            default:
                establecerMensajes(en);
                establecerLocale('en-US');
                localStorage.setItem('lang', 'en-US');
        }
    }

    return (
        <LngContext.Provider value={{ establecerLenguaje: establecerLenguaje }}>
            <IntlProvider locale={locale} messages={mensajes}>
                {children}
            </IntlProvider>
        </LngContext.Provider>
    );
}

export { LangProvider, LngContext };