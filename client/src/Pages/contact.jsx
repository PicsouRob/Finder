import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SocialMedia from '../Components/SocialMedia';

const validation = Yup.object().shape({
    name: Yup.string().required("Votre Nom est obligatoire"),
    email: Yup.string().email('Addresse email incorrect')
        .required("L'email est obligatoire"),
    message: Yup.string().required("Le message est obligatoire")
});

function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    emailjs.init(process.env.USER_ID);

    useEffect(() => {
        document.title = "Finder | Contact";
    }, []);

    const handleSubmitEmail = (values) => {
        const { name, email, message } = values;
        setIsLoading(true);
        let alert = `Votre message a été envoyé avec succès \n Merci de nous avoir contacté`;
        const templateParams = {
            from_name: name, email, message,
        }
        emailjs.send(process.env.SERVICES_ID, process.env.TEMPLATES_ID, templateParams, process.env.USER_ID)
            .then(async (response) => {
                await window.alert(alert);
                console.log('SUCCESS!', response.status, response.text);
                setIsLoading(false);
            }).catch((err) => {
                console.log('FAILED...', err);
                setIsLoading(false);
            });
    }

    return (
        <div>
            <Header />
            <div class="relative bg-[#0e1e25] w-full">
                <div class="flex flex-col md:flex-row md:justify-between items-center gap-x-10 gap-y-16 px-6 md:px-8 min-h-screen min-w-7xl mx-auto py-24 md:py-0">
                    <div class="w-full md:w-1/2">
                        <div class="pb-3">
                            <h1 class="text-3xl md:text-3xl font-bold text-white pb-3">Contacter Nous</h1>
                            <span class="text-gray-500">Pour demander un avis ou obtenir des informations sur notre société, contactez-nous directement ou remplissez le formulaire et nous vous répondrons dans les plus brefs délais.</span>
                        </div>
                        <div>
                            <div class="flex my-3 h-10 gap-x-3 w-full md:w-3/5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span class="text-gray-400">+1 809 429 8594</span>
                            </div>
                            <div class="flex my-3 h-10 gap-x-3 cursor-pointer w-full md:w-3/5"
                                onClick={() => window.open('mailto:finderht@gmail.com?subject=Services&body=Salut Roberto')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span class="text-gray-400">finderht@gmail.com</span>
                            </div>
                            <div class="flex my-3 h-10 gap-x-3 cursor-pointer  w-full md:w-3/5"
                                onClick={() => window.open('tel:+18094298594')}
                            ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span class="text-gray-400">102 Street Saint-Marc</span>
                            </div>
                        </div>
                        <SocialMedia color="#fff" />
                    </div>
                    <Formik class
                        initialValues={{ name: '', email: '', message: '' }}
                        validationSchema={validation}
                        onSubmit={(values) => handleSubmitEmail(values)}
                    >
                        {({ values, errors, handleSubmit, handleChange, touched }) => (
                            <form class="w-full md:w-1/2" onSubmit={handleSubmit}>
                                <label class="text-white">Nom et Prénom</label>
                                <input type="text" name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder="Entrez votre nom complet"
                                    class="px-4 py-3 w-full focus:outline-none font-light border-0 focus:ring-0 my-2 rounded-lg shadow-sm"
                                />
                                {errors.name && touched.name && (
                                    <p class="text-red-700">{errors.name}</p>
                                )}
                                <label class="pt-2 text-white">Courrier électronique</label>
                                <input type="text" name="email"
                                    value={values.email}
                                    onChange={handleChange} placeholder="Entrez votre courrier"
                                    class="px-4 py-3 w-full focus:outline-none font-light border-0 focus:ring-0 my-2 rounded-lg shadow-sm"
                                />
                                {errors.email && touched.email && (
                                    <p class="text-red-700">{errors.email}</p>
                                )}
                                <label class="pt-2 text-white">Message</label>
                                <textarea name="message"
                                    value={values.message} onChange={handleChange}
                                    placeholder="Entrez votre message"
                                    class="px-4 pt-2 w-full focus:outline-none font-light border-0 focus:ring-0 my-2 rounded-lg shadow-sm resize-y h-28"
                                ></textarea>
                                {errors.message && touched.message && (
                                    <p class="text-red-700">{errors.message}</p>
                                )}
                                <button type="submit"
                                    class="flex items-center justify-center gap-x-2 w-full sm:w-40 bg-red-500 rounded-lg px-12 py-2.5 text-white font-medium mt-3 hover:bg-green-500 shadow-lg" disabled={isLoading}
                                >
                                    {isLoading && <i class="fa fa-spinner fa-spin"></i>}
                                    Envoyer
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;