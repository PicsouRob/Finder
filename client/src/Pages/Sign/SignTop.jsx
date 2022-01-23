import React from 'react';

import Google from '../../icons/google.svg';
import Facebook from '../../icons/facebook.svg';

function SignTop({ title, text }) {
    return <div class="">
        <h1 class="text-3xl font-bold tracking-wide leading-loose writespace-nowrap">
            {title}
        </h1>
        <span class="font-light text-gray-500">
            {text}
        </span>
        <div class="flex items-center justify-center">
            <div class="flex items-center justify-center gap-y-4 gap-x-6 pt-10 mx-auto">
                <a href="/auth/google" class="flex items-center justify-center py-2.5 w-full px-6 rounded-lg bg-white border border-gray-400 whitespace-nowrap hover:bg-gray-50 focus:outline-none focus:ring-gray-100 focus:ring-4">
                    <img alt="google" src={Google} class="w-6 h-6" />
                    <span class="pl-3 md:font-medium text-gray-900 text-base">Google</span>
                </a>
                <button class="flex items-center justify-center py-2.5 px-6 rounded-lg bg-blue-500 border w-full border-gray-400 whitespace-nowrap hover:bg-blue-600 focus:outline-none focus:ring-gray-100 focus:ring-4">
                    <img alt="google" src={Facebook} class="w-6 h-6" />
                    <span class="pl-3 md:font-medium text-white">Facebook</span>
                </button>
            </div>
        </div>
        <div class="flex justify-between items-center pt-4">
            <hr class="w-full border-gray-400" />
            <span class="px-4 font-light tracking-wide text-gray-500">Or</span>
            <hr class="w-full border-gray-400" />
        </div>
    </div>;
}

export default SignTop;