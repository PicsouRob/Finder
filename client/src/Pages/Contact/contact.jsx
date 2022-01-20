import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import '../../Styles/form.css';
import SocialMedia from '../../Components/SocialMedia';

function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    emailjs.init(process.env.USER_ID);

    useEffect(() => {
        document.title = "Contact";
    }, []);

    const emailValidation = (email) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.match(emailRegex);
    }

    const handleSubmit = () => {
        let alert = '';
        setIsLoading(true);
        if (!name) {
            alert = "Le nom est obligatoire";
            window.alert(alert);
            setIsLoading(false);
        } else if (!email) {
            alert = "E-mail est obligatoire";
            window.alert(alert);
            setIsLoading(false);
        } else if (!emailValidation(email)) {
            alert = "L'E-mail n'est pas correct";
            window.alert(alert);
            setIsLoading(false);
        } else if (!message) {
            alert = "Le Message est obligatoire";
            window.alert(alert);
            setIsLoading(false);
        } else {
            alert = `Votre message a été envoyé avec succès \n Merci de nous avoir contacté`;
            const templateParams = {
                from_name: name, email, message,
            }
            emailjs.send(process.env.SERVICES_ID, process.env.TEMPLATES_ID, templateParams, process.env.USER_ID)
                .then(async (response) => {
                    await window.alert(alert);
                    console.log('SUCCESS!', response.status, response.text);
                    setName('');
                    setMessage('');
                    setEmail('');
                    setIsLoading(false);
                }).catch((err) => {
                    console.log('FAILED...', err);
                    setIsLoading(false);
                });
        }
    }

    return (
        <div>
            <Header />
            <div class="flex flex-col md:flex-row md:justify-between gap-x-8 gap-y-16 bg-green-50 md:bg-green-100 px-6 md:px-8 min-h-screen my-auto min-w-7xl py-24 md:py-0">
                <div class="w-full md:w-1/2">
                    <div class="">
                        <h1 class="text-3xl md:text-3xl font-bold text-black pb-3">Contacter Nous</h1>
                        <span class="">Remplissez le formulaire et notre équipe vous répondra dans les 24 heures.</span>
                    </div>
                    <div>
                        <div class="flex my-3 h-10">
                            <FaPhoneAlt style={styles2} /> +1 809 429 8594
                        </div>
                        <div class="flex my-3 h-10"
                            onClick={() => window.open('mailto:finderht@gmail.com?subject=Services&body=Salut Roberto')}
                        >
                            <FaEnvelope style={styles2} /> finderht@gmail.com
                        </div>
                        <div class="flex my-3 h-10"
                            onClick={() => window.open('tel:+18094298594')}
                        ><FaMapMarkerAlt style={styles2} /> 102 Street Saint-Marc
                        </div>
                    </div>
                    <div class="">
                        <SocialMedia color="#707070" />
                    </div>
                </div>
                <div class="w-full md:w-1/2">
                    <input className="shadow" value={name} onChange={(e) => setName(e.target.value)} placeholder="Entrez votre nom complet" type="text"
                        class="focus-within:ring-red-500 ring-1 focus-within:outline-none ring-white shadow-lg placeholder-black"
                    />
                    <input className="shadow-md" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Entrez votre courrier" type="text"
                        class="focus-within:ring-red-500 ring-1 focus-within:outline-none ring-white shadow-lg placeholder-black"
                    />
                    <input className="shadow-md" value={message} onChange={(e) => setMessage(e.target.value)} type="texterea" placeholder="Entrez votre message"
                        class="focus-within:ring-red-500 ring-1 focus-within:outline-none ring-white shadow-lg placeholder-black"
                    />
                    <button className="bg-red-500 rounded-lg px-12 py-2 text-white font-medium mt-3 hover:bg-green-500 shadow-lg"
                        onClick={(e) => handleSubmit(e)} disabled={isLoading}
                    >
                        {isLoading && <i className="fa fa-spinner fa-spin"></i>}
                        Envoyer
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

const styles2 = {
    marginRight: "20px",
    color: '#31C6AE',
}

export default Contact;