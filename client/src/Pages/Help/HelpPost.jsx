import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Images/signin.jpg';

function HelpPost() {
    return (
        <div class="grid grid-cols-1 gap-y-4">
            <h2 class="text-2xl pb-3 font-bold text-black text-center">Commencer sur Finderht.com</h2>
            <span class="">
                Finderht.com permet aux clients et aux indépendants de travailler ensemble sur des projets hors ligne.
            </span>
            <span>L'inscription est facile.</span>
            <span>1. Cliquez sur <Link to="/auth/login"
                class="cursor-pointer text-blue-600 underline hover:opacity-80"
            >
                Connecter
            </Link> sur la page d'accueil de Finderht.com. L'inscription est <strong class="text-red-500">gratuite</strong>.</span>
            <span>2. Vous pouvez choisir de vous inscrire via <strong class="text-red-500">Google</strong> ou par <strong class="text-red-500">E-mail</strong>. </span>
            <img src={image} alt="pic" width={300}
                height={500}
                class="my-8 border"
            />
            <span>Si vous n'avez pas de compte cliquez sur le lien ci-dessous pour en créer un: <br />
                <br />Vous n'avez pas de compte? <Link to="/auth/register"
                    class="cursor-pointer text-blue-600 underline hover:opacity-80"
                >Inscrivez-vous</Link>
            </span>
            <span><strong>.</strong>Pour creer votre compte, le noms d'utilisateur doivent :</span>
            <span><strong>-</strong> être alphanumérique (contient des lettres et/ou des chiffres),<br /> <br />
                <strong>-</strong> commencer par une lettre et <br /> <br />
                <strong>-</strong> avoir 16 caractères au maximum.
            </span>
        </div>
    )
}

export default HelpPost;