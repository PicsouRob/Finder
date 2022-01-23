import React from 'react';

function SignFooter() {
    return (
        <div class="flex flex-wrap gap-y-2 justify-between items-center pt-10 text-center whitespace-nowrap">
            <span class="flex-1 text-gray-500">© 2021 Finder. Tous droits réservés</span>
            <span class="flex flex-col md:flex-row justify-center items-center space-x-1 space-y-2 md:space-y-0 mx-auto">
                <span class="text-gray-500 hover:text-teal-600">Conditions d'utilisation</span>
                <span class="hidden md:flex text-gray-500">&#183;</span>
                <span class="text-gray-500 hover:text-teal-600">Politique de confidentialité </span>
            </span>
        </div>
    );
}

export default SignFooter;