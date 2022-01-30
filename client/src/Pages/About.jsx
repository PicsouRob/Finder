import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import image from '../Images/list.svg';
import { aboutData } from '../Utils/helpers';
import fond from '../Images/fondd.jpg';
import signImages from './../Images/sign.jpg';

function About({ user }) {
    const navigate = useNavigate();
    const addPath = user._id ? "/api/job/add" : "/auth/login";

    useEffect(() => {
        document.title = "À propos de Nous";
    }, []);

    return (
        <div class="">
            <Header />
            <div class="relative flex flex-col lg:flex-row items-center justify-between min-h-screen gap-x-8 gap-y-16 min-w-7xl mx-auto"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 85%), rgba(0, 0, 0, 0.8)), url(${fond})` }}
            >
                <div class="w-full md lg:w-1/2 grid grid-cols-1 px-6 lg:px-8 py-16 md:py-16">
                    <h1 class="text-3xl md:text-3xl font-bold text-white">À propos de Finder</h1>
                    <span class="mt-4 md:mt-0 text-white leading-8">FinderHt est une communauté où vous pouvez trouver des travailleurs indépendants pour tout type de travail, par exemple un designer, un photographe, un développeur, un professionnel du marketing ou autre, vous pouvez aussi ajouter vos compétences en tant que professionnel afin que des clients puissent vous contacter pour un future boulot et nous valorisons votre confiance et votre sécurité comme notre priorité numéro un. <br /><br />Les possibilités sont infinies. Nous avons des pigistes ambaucheurs qui travaillent dans tous les domaines techniques, professionnels et créatifs imaginables.</span>
                    <button class="bg-red-500 text-white px-6 py-2.5 md:py-4 rounded-lg hover:bg-red-600  font-medium my-3 md:my-0 cursor-pointer w-1/3"
                        onClick={() => navigate('/api/job/find')}
                    >
                        Parcourir
                    </button>
                </div>
                <div class="w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img src={signImages}
                        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" alt="logo" />
                </div>
            </div>
            <div class="relative min-w-7xl px-6 lg:px-8 py-16 h-auto mx-auto bg-[#0e1e25]"
            >
                <h2 class="text-3xl md:text-3xl font-bold text-white pb-12 text-center">Comment ça marche?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 mt-3 h-auto place-items-center">
                    <img src={image} alt="img" class="w-full h-auto lg:h-3/4" />
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
            <div class="relative min-w-7xl px-6 lg:px-8 py-16 mx-auto">
                <div class="w-full flex flex-col md:flex-row md:justify-between items-center">
                    <div class="pb-4 w-full md:w-1/2">
                        <h2 class="text-3xl md:text-3xl font-bold text-black pb-2 md:pb-0">Alors qu'est-ce que tu attends?</h2>
                        <span class="mt-4 md:mt-0 w-full md:w-2/3">Publiez un projet aujourd'hui et obtenez des offres des clients partout dans le pays ou recherchez un freelancer pour votre boulot.</span>
                    </div>
                    <div class="flex items-center flex-col md:flex-row gap-x-10">
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
            <div class="relative min-w-7xl px-6 lg:px-8 py-16 mx-auto bg-[#0e1e25]"
            >
                <div class="flex-col space-y-3 leading-6">
                    <h2 class="text-3xl md:text-3xl font-bold text-white pb-2 md:pb-0">Aide supplémentaire</h2>
                    <span class="text-white mt-4 md:mt-0">
                        Vous ne savez pas par où commencer ? Consultez les liens ci-dessous:
                    </span>
                </div>
                <div class="flex flex-col md:flex-row md:justify-between pt-6 gap-y-8 items-center w-full">
                    <Link to="/help_search"
                        class="text-white text-xl underline  hover:opacity-80 cursor-pointer w-full md:w-1/2"
                    >
                        Comment embaucher avec finderht.com
                    </Link>
                    <Link to="/help_post"
                        class="text-white text-xl underline  hover:opacity-80 cursor-pointer w-full md:w-1/2"
                    >
                        Conseils pour publier des projets
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = ({ user }) => {
    return { user };
}

export default connect(mapStateToProps)(About);