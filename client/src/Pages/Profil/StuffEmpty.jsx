import React from 'react';

import stuffImage from '../../Images/list.svg';
import CreateNew from './CreateNew';

function StuffEmpty({ user, id }) {
    return (
        <div class="flex flex-col gap-y-6 pt-12 md:pt-5 w-full">
            <img src={stuffImage} alt="stuff"
                class="block md:hidden "
            />
            {id === user._id ? <span class="mt-7 mx-0 md:px-8 text-center">Vous n'avez pas encore pulier votre carriere ou compétence, Veillez cliquer sur ajouter pour en ajouter votre compétence</span> : <span class="my-7 mx-0 md:px-8 text-center">Cette utilisateur n'as pas encore pulier carriere ou compétence</span>}
            {user._id === id && <div class="flex items-center justify-center py-4">
                <div class="text-center space-y-2 grid place-items-center p-3 border-2 border-dashed rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="#31C6AE">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                    Nouveau Project
                    <p class="text-[15px] font-medium">Commencez par créer un nouveau projet</p>
                    <CreateNew user={user} />
                </div>
            </div>}
        </div>
    )
}

export default StuffEmpty;