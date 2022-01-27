import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import profil from '../../Images/profil.svg';
import CreateNew from './CreateNew';
import { getDate } from '../../Utils/helpers';

function ProfilInfo(props) {
    const { data, stuff, userId, setDeleteShow } = props;
    const navigate = useNavigate();
    const { image, name, email, date, _id, facebook, instagram,
        description, phone, website, location
    } = data;
    const inputFile = useRef(null);

    const onButtonClick = () => {
        inputFile.current.click();
    };

    const userDeconnected = async () => {
        await axios.get('/api/logout')
            .then(async () => {
                await navigate('/');
                await window.location.reload();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            })
            .catch((err) => console.log(err));
    }

    const updateProfilPhoto = async (e) => {
        let formData = new FormData();
        formData.append('image', e.target.files[0]);
        axios.put(`/api/user/update-profil/${_id}`, formData)
            .then(async (res) => {
                console.log(res.data);
            }).catch((err) => console.log(err));
    }

    return (
        <div class="relative bg-white shadow-sm rounded-lg py-6 px-4 space-y-4 self-start w-full md:w-2/5  break-words">
            <div class="grid place-items-center gap-y-1 pb-2">
                <img src={!image ? profil : image} alt="profil"
                    class="w-20 h-20 rounded-full"
                />
                {_id === userId && <div class="">
                    <div class="p-1 rounded-full -mt-7 ml-10 bg-green-500 cursor-pointer hover:bg-green-400"
                        onClick={() => onButtonClick()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fff">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <form>
                        <input ref={inputFile} type="file" name="image"
                            onChange={(e) => updateProfilPhoto(e)}
                            class="hidden"
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
                {instagram && <a class="px-2 border-2 group py-2 rounded-md hover:bg-black hover:border-transparent flex items-center justify-between mb-2"
                    href={`https://instagram.com/${instagram}`}
                >
                    <p class="text-md group-hover:text-white">Instagram</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                </a>}
                {facebook && <a class="px-2 border-2 group py-2 rounded-md hover:bg-black hover:border-transparent flex items-center justify-between"
                    href={`https://facebook.com/${facebook}`}
                >
                    <p class="text-md group-hover:text-white">Facebook</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                </a>}
            </div>}
            {_id === userId && (
                <div class="grid place-items-center w-full gap-y-3">
                    <div class="text-center space-y-2 grid place-items-center py-3 px-6 border-2 border-dashed rounded-lg my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="#31C6AE">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                        Nouveau Project
                        <CreateNew user={data} />
                    </div>
                    <Link to={`/api/user/${userId}/update-profil`}
                        state={data} class="w-full"
                    >
                        <button class="bg-red-500 rounded-lg shadow-lg text-white cursor-pointer font-medium py-2 my-2 w-full hover:bg-black">
                            Modifier mon profil
                        </button>
                    </Link>
                    <div class="flex items-center justify-between gap-x-1 md:gap-x-4 text-[13px]">
                        <button onClick={() => userDeconnected()}
                            class="p-2 hover:bg-black group rounded-lg"
                        ><p class="font-medium group-hover:text-white">Se déconnecter</p></button>
                        <p>|</p>
                        <button class="p-2 hover:bg-red-700 group rounded-lg"
                            onClick={() => setDeleteShow(true)}
                        >
                            <p class="font-medium group-hover:text-white">
                                Supprimer mon compte
                            </p>
                        </button>
                    </div>
                </div>
            )}
            <p class="text-center">MEMBRE DEPUIS LE : {getDate(date)}</p>
        </div>
    )
}

export default ProfilInfo;