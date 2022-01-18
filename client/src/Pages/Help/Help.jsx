import React from 'react';

import Header from '../../Components/Header';
import HelpSearch from './HelpSearch';
import Footer from '../../Components/Footer';

function Help() {
    return (
        <div class="">
            <Header />
            <div class="h-42 py-12 flex items-center justify-center"
                style={{ backgroundColor: '#0e1e25' }}
            >
                <h2 class="text-3xl md:text-3xl font-bold text-white pb-12 text-center">Aide sur les articles supplémentaires</h2>
            </div>
            <div class="flex items-center justify-center px-6 md:px-8 pb-16">
                <div class="bg-white shadow-lg rounded-lg px-4 py-8 z-10 -mt-12 w-full md:w-2/3 text-left">
                    <HelpSearch />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Help;