import React from 'react';
import { Link } from 'react-router-dom';

import SocialMedia from './SocialMedia';
import LogoLink from './Logo';

function Footer() {
    return (
        <div class="relative bg-black">
            <div class="max-w-7xl px-6 lg:px-8 py-10 mx-auto space-y-5">
                <div class="block gap-y-4 sm:flex sm:items-center sm:justify-between text-white space-y-6 sm:space-y-0">
                    <LogoLink />
                    <div class="flex gap-x-12 lg:gap-x-40">
                        <Link to="find">Recherche</Link>
                        <Link to="about">À propos</Link>
                        <Link to="contact">Contact</Link>
                    </div>
                </div>
                <div class="text-center flex items-center flex-col leading-8"
                >
                    <SocialMedia color="#707070" />
                    <span class="text-gray-600">
                        Copyright © 2021 - All Rights Reserved
                    </span>
                    <span class="text-gray-600">
                        Powered by Phanord Roberto
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;