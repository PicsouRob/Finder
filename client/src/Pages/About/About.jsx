import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import img from '../../Images/about.svg';
import image from '../../Images/list.svg';
import { aboutData, useLocalStorage } from '../../Utils/helpers';
import fond from '../../Images/fondd.jpg';

function About() {
    const navigate = useNavigate();
    const user = {
        user: {}, token: '', isLogged: false
    };
    const [store] = useLocalStorage('user', user);
    const addPath = store.user._id ? "/api/job/add" : "/auth/login";

    useEffect(() => {
        document.title = "À propos de Nous";
    }, []);

    return (
        <div class="">
            <Header />
            <div class="relative flex flex-col md:flex-row items-center justify-between min-h-screen min-w-7xl px-6 lg:px-8 py-16 gap-x-8 gap-y-16"
                style={{ backgroundImage: 'url(' + fond + ')' }}
            >
                <div class="w-full md:w-1/2 grid grid-cols-1">
                    <h1 class="text-3xl md:text-3xl font-bold text-white">À propos de Finder</h1>
                    <span class="mt-4 md:mt-0 text-white leading-8">FinderHt est une communauté où vous pouvez trouver des travailleurs indépendants pour tout type de travail, par exemple un designer, un photographe, un développeur, un professionnel du marketing ou autre, vous pouvez aussi ajouter vos compétences en tant que professionnel afin que des clients puissent vous contacter pour un future boulot et nous valorisons votre confiance et votre sécurité comme notre priorité numéro un. <br /><br />Les possibilités sont infinies. Nous avons des pigistes ambaucheurs qui travaillent dans tous les domaines techniques, professionnels et créatifs imaginables.</span>
                    <button class="bg-red-500 text-white px-6 py-2.5 md:py-4 rounded-lg hover:bg-red-600  font-medium my-3 md:my-0 cursor-pointer w-1/3"
                        onClick={() => navigate('/api/job/find')}
                    >
                        Parcourir
                    </button>
                </div>
                <img src={img} class="w-full md:w-1/2" alt="logo" />
            </div>
            <div class="relative min-w-7xl px-6 lg:px-8 py-16 h-auto"
                style={{ backgroundColor: '#0e1e25' }}
            >
                <h2 class="text-3xl md:text-3xl font-bold text-white pb-12 text-center">Comment ça marche?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 mt-3 h-[400px]">
                    <img src={image} alt="img" class="h-full" />
                    <div class="flex flex-col gap-y-6">
                        {aboutData.map((item, index) => (
                            <div key={index} class="">
                                <h3 class="text-xl font-bold py-2.5 text-white">{item.id}. {item.title}</h3>
                                <span class="text-white">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="relative min-w-7xl px-6 lg:px-8 py-16">
                <div class="w-full flex flex-col md:flex-row md:justify-between items-center">
                    <div class="pb-4 w-full md:w-1/2">
                        <h2 class="text-3xl md:text-3xl font-bold text-black pb-2 md:pb-0">Alors qu'est-ce que tu attends?</h2>
                        <span class="mt-4 md:mt-0 w-full md:w-2/3">Publiez un projet aujourd'hui et obtenez des offres des clients partout dans le pays ou recherchez un freelancer pour votre boulot.</span>
                    </div>
                    <div class="flex flex-col md:flex-row gap-x-10">
                        <div class="border-2 border-red-500 px-3 py-2.5 rounded-full hover:bg-red-500 hover:text-white font-medium my-3 md:my-0 cursor-pointer"
                            onClick={() => navigate(addPath)}
                        >
                            Publier une offre
                        </div>
                        <div onClick={() => navigate("/api/job/find")}
                            class="border-2 border-red-500 px-3 py-2.5 rounded-full hover:bg-red-500 hover:text-white font-medium my-4 md:my-0 cursor-pointer"
                        >
                            Recherche Freelancer
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative min-w-7xl px-6 lg:px-8 py-16"
                style={{ backgroundColor: '#0e1e25' }}
            >
                <div class="flex-col space-y-3 leading-6">
                    <h2 class="text-3xl md:text-3xl font-bold text-white pb-2 md:pb-0">Aide supplémentaire</h2>
                    <span class="text-white mt-4 md:mt-0">
                        Vous ne savez pas par où commencer ? Consultez les liens ci-dessous:
                    </span>
                </div>
                <div class="flex flex-col md:flex-row md:justify-between pt-6 space-y-8 items-center">
                    <Link to={{ pathname: "/help_search" }}
                        class="text-white text-2xl underline  hover:opacity-80 cursor-pointer"
                    >
                        Comment embaucher avec finderht.com
                    </Link>
                    <Link to="/help_post"
                        class="text-white text-2xl underline  hover:opacity-80 cursor-pointer"
                    >
                        Conseils pour publier des projets
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;