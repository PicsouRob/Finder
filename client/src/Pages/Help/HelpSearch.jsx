import React from 'react';
import { Link } from 'react-router-dom';

function HelpSearch() {
    return (
        <div class="grid grid-cols-1 gap-y-4">
            <h2 class="text-2xl pb-3 font-bold text-black text-center">Comment embaucher avec finderht.com</h2>
            <span>Finderht.com vous permet en tant que clients d'embaucher des travailleurs indépendants ou des professionnels sur des projets hors ligne.</span>
            <span>Pour engager un embaucheur pour votre, veillez:</span>
            <span><strong>1-</strong> Cliquez sur <Link to="/api/job/find" class="cursor-pointer text-blue-600 underline hover:opacity-80">Parcourir</Link> sur la page d'accueil de Finderht.com ou inserrer le titre du mettier pour laquelle vous voullez embaucher.</span>
            <span><strong>-</strong> Recherchez votre meilleur comptable, soyez sélectif dans le choix d'un comptable, ne choisissez pas le mauvais pour votre travail.</span>
            <span><strong>2- </strong>Prendre Contact avec celui dont vous avez choisi.</span>
            <span><strong>- </strong>Créez un contrat d'embauche avec l'embaucheur de votre choix, avec différentes formules de contrat pour votre travail.</span>
            <span><strong>3- </strong>Commençer à travailler avec lui.</span>
            <span><strong>- </strong>Commencez à travailler avec l'embaucheur de votre choix, embauchez selon le contrat qui a été fait.</span>
            <Link to="/api/job/find"
                class="py-2.5 px-5 bg-red-500 rounded-lg shadow-lg mt-3 text-white font-medium w-44 hover:bg-red-600"
            >
                Parcourir
            </Link>
        </div>
    )
}

export default HelpSearch;