import React from 'react';
import { Link } from 'react-router-dom';

import img from '../Images/found.svg';
import Footer from './Footer';
import Header from './Header';

function NotFound() {
    return (
        <div class="relative w-full">
            <Header />
            <div class="grid place-items-center">
                <div class="flex flex-col items-center justify-center gap-y-10 min-h-screen px-6 md:pz-8 w-full md:w-2/4 text-center">
                    <img alt="img" src={img} class="h-40" />
                    <span class="">
                        Une erreur s'est produite, peut-être que la page que vous recherchez n'a pas été trouvée ou n'a jamais existé.
                    </span>
                    <Link to="/"
                        class="bg-red-500 rounded-lg text-white px-5 py-2.5 md:py-3 font-medium hover:bg-green-500 cursor-pointer"
                    >
                        Retour a la page d'accueil
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;
