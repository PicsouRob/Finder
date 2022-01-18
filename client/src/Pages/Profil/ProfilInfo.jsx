import React, { useRef } from 'react';

import profil from '../../Images/profil.svg';
import CreateNew from './CreateNew';
import { getDate } from '../../Utils/helpers';

function ProfilInfo(props) {
    const { data, stuff, isLoading, userId } = props;
    const { image, name, email, date, _id, facebook, instagram,
        description, phone, website, location
    } = data;
    const inputFile = useRef(null);
    console.log(_id, userId);

    // const onButtonClick = () => {
    //     inputFile.current.click();
    // };

    const userDeconnected = () => { }

    return (
        <div class="relative bg-white shadow-sm rounded-lg py-6 px-4 space-y-4 self-start w-full md:w-2/5  break-words">
            <div class="grid place-items-center gap-y-1 pb-2">
                <img src={!image ? profil : image} alt="profil"
                    class="w-20 h-20 rounded-full"
                />
                {_id === userId && <div class="">
                    <div class="p-1 rounded-full -mt-8 ml-10 bg-green-500 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <form>
                        <input ref={inputFile} type="file" name="image"
                            class="hidden"
                        // onChange={(e) => updateProfilPhoto(e)}
                        />
                    </form>
                </div>}
                <span class="text-black font-medium">{name}</span>
                <p class="cursor-pointer break-words font-medium text-center"
                    onClick={() => window.open(`mailto:${email}?subject=Services&body=Salut ${name}'`)}
                >{email}</p>
                {website && <a href={website} rel="noreferrer"
                    target="_blank" class="underline text-blue-600 cursor-pointer"
                >{website}</a>}
                {location && <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="rgba(16, 185, 129)">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{location}</span>
                </div>}
            </div>
            {description && <span >{description}</span>}
            <div class="flex items-center justify-between">
                <h6 class="">compétence(s)</h6>
                <span>{stuff.length}</span>
            </div>
            {phone && <div class="flex items-center justify-between cursor-pointer"
                onClick={() => window.open(`tel:${phone}`)}
            >
                <h6 class="">Numero de telephone</h6>
                <span>{phone}</span>
            </div>}
            {(instagram || facebook) && <div class="">
                <div class="font-medium pb-3">
                    Réseaux sociaux
                </div>
                {instagram && <a class="px-2 border-2 group py-2 rounded-md hover:bg-black hover:border-transparent space-between mb-2"
                    href={`https://instagram.com/${instagram}`}
                >
                    <p class="text-md group-hover:text-white">Instagram</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                </a>}
                {facebook && <a class="px-2 border-2 group py-2 rounded-md hover:bg-black hover:border-transparent space-between"
                    href={`https://facebook.com/${facebook}`}
                >
                    <p class="text-md group-hover:text-white">Facebook</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                </a>}
            </div>}
            <div class="grid place-items-center w-full gap-y-3">
                {_id === userId && <div class="text-center space-y-2 grid place-items-center py-3 px-6 border-2 border-dashed rounded-lg my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="#31C6AE">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                    Nouveau Project
                    <CreateNew />
                </div>}
                {_id === userId && <button
                    class="bg-green-500 rounded-lg shadow-lg text-white cursor-pointer font-medium py-2 my-2 w-full hover:bg-red-500"
                >Modifier votre profil
                </button>}
                {_id === userId && <div class="flex items-center justify-between gap-x-4">
                    <button onClick={() => userDeconnected()}
                        class="p-2 hover:bg-black group rounded-lg"
                    ><p class="font-medium group-hover:text-white">Se déconnecter</p></button>
                    <p>|</p>
                    <button class="p-2 hover:bg-red-700 group rounded-lg" >
                        {isLoading && <i class="fa fa-spinner fa-spin"></i>}
                        <p class="font-medium group-hover:text-white">Supprimer mon compte</p>
                    </button>
                </div>}
            </div>
            <p class="text-center">MEMBRE DEPUIS LE : {getDate(date)}</p>
        </div>
    )
}

export default ProfilInfo;