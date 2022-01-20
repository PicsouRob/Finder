import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import Header from '../../Components/Header';
import SocialMedia from '../../Components/SocialMedia';
import Footer from '../../Components/Footer';
import Info from '../../Components/Info';
import InputField from './InputField';
import SearchCategories from './SearchCategories';

function Home(props) {
    const history = useNavigate();
    const [jobValue, setJobValue] = useState('');
    const [cityValue, setCityValue] = useState('Ville');

    useEffect(() => {
        document.title = "Finder | Accueil";
    }, []);

    return (
        <div>
            <Header />
            <div class="relative bg-green-100 overflow-hidden">
                <div class="max-w-7xl mx-auto">
                    <div class="relative z-10 pb-5 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-green-100">
                        <main class="mt-16 pb-4 mx-auto max-w-7xl px-6 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div class="sm:text-center lg:text-left">
                                <div class="flex text-[12px]">
                                    <hr class="border-4 w-16 text-red-500" />
                                    Trouver un freelance
                                </div>
                                <h1 class="text-4xl tracking-tight font-extrabold text-indigo-900 sm:text-5xl md:text-6xl">
                                    <span class="block xl:inline text-gray-900">Trouver des Embaucheurs en ligne pour votre travail</span>
                                </h1>
                                <p class="my-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Or publier vos compétences afin de recevoir les offres des employeurs autour de vous</p>
                                <InputField value={jobValue} setValue={setJobValue}
                                    setSelectCity={cityValue} selectCity={setCityValue}
                                />
                                {/* <div class="mt-4 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div class="rounded-md shadow mb-10"
                                        onClick={() => history.push({
                                            pathname: "/api/job/find",
                                            state: { jobValue, cityValue }
                                        })}
                                    >
                                        <span class="w-full flex items-center justify-center px-8 py-2.5 border-0 border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-red-500 md:py-4 md:text-lg md:px-10 cursor-pointer">
                                            Commencer
                                        </span>
                                    </div>
                                </div> */}
                                <hr class="my-2 border-0 bg-transparent" />
                                <SocialMedia color="#33475b" />
                            </div>
                        </main>
                    </div>
                </div>
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img class="h-51 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
                </div>
            </div>
            <Info />
            <SearchCategories />
            <Footer />
        </div>
    );
};

export default Home;