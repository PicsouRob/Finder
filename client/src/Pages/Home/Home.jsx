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
            <div class="relative overflow-hidden bg-[#0e1e25] grid place-items-center gap-y-10 py-16 sm:py-12 md:py-16 px-6 sm:px-6 lg:px-8 gap-6">
                <div class="w-full md:w-3/4  mx-auto self-start ">
                    <div class="grid place-items-center text-center">
                        <div class="flex items-center text-[12px] text-white">
                            <hr class="border-4 w-16" />
                            Trouver un freelance
                        </div>
                        <h1 class="text-4xl tracking-tight font-extrabold text-indigo-900 md:text-5xl">
                            <span class="block xl:inline text-white">Utilisez vos compétences pour gagner plus d'emplois.</span>
                        </h1>
                        <p class="my-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Ou Trouver des Embaucheurs autour de vous pour vos travaux.</p>
                        <InputField value={jobValue} setValue={setJobValue}
                            setSelectCity={cityValue} selectCity={setCityValue}
                        />
                        <hr class="my-2 border-0 bg-transparent" />
                        <SocialMedia color="#fff" />
                    </div>
                </div>
            </div>
            <Info />
            <SearchCategories />
            <Footer />
        </div>
    );
};

export default Home;