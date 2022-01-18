import React from 'react';
import { Link } from 'react-router-dom';

function LogoLink() {
    return (
        <div>
            <Link to="/">
                <div class="flex gap-x-1 font-sans items-center">
                    <div class="flex items-center justify-center bg-red-400 rounded-full h-8 w-8">
                        <span class="font-bold text-white rotate-3">F</span>
                    </div>
                    <span class="font-bold text-xl md:text-3xl text-green-500">Finder</span>
                </div>
            </Link>
        </div>
    )
}

export default LogoLink;