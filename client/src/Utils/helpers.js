import { useState } from 'react';
import axios from 'axios';

export const city = ["Port-au-Prince", "Carrefour", "Delma", "Pétion-Ville", "Cap-Haïtien", "Saint-Marc", "Gonaïves ", "Croix-des-bouquets", "Petit-Goâve", "Leogane", "Port-de-Paix", "Taba", "Verrettes", "Pétion-Ville", "Les Cayes", "Jacmel", "Jeremy", "Bombardopolis", "Fort-Liberté", "Miragoane"];

export const getDate = (res) => {
    const date = new Date(res);
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const day = date.getDate();
    const year = date.getFullYear();
    const getMonths = months[date.getMonth()];

    return `${day} ${getMonths} ${year}`;
}

export const aboutData = [
    {
        id: 1,
        title: 'Publiez vos compétences',
        text: 'Publiez simplement vos compétences pour ce que vous savez faire comme profesionnel et recevez des offres compétitives des clients autour de vous.',
    },
    {
        id: 2,
        title: 'Recherchez le freelance parfait',
        text: 'Parcourez les profils de Freelancer.Comparez les propositions et sélectionnez la meilleure. Contacter votre Freelancer pour votre boulot.',
    },
]; 

export function useLocalStorage(key, initialValue) {
    const [store, setStore] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch(err) {
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            setStore({
                ...store,
                isLogged: true,
                user: value.user,
                token: value.token
            });
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch(err) {
            console.error(err);
        }
    }

    return [store, setValue];
}

export const updateUser = (_id, setValue, formData) => {
    return new Promise(async (resolve, reject) => {
        resolve(
            await axios.put(`/api/user/update-user/${_id}`, formData)
            .then(async () => {
                await axios.get(`/api/user/${_id}`)
                .then(user => {
                    setValue({
                        user: user.data,
                        isLogged: true,
                        token: '',
                    });
                    console.log(user.data);
                    return user.data;
                }).catch(err => console.log(err));
            }).catch(err => console.log(err))
        );
        reject(Error("Une erreur s'est produite"));
    });
}

export const getStuff = (formData, setData) => {
    // console.log('value: ' + value)
    // console.log('location: ' + location)
    axios({
        method:"GET",
        data: formData
    }).then(res => {
        // setData(res.data);
        console.log(res.data);
    })
    .catch(err => console.log(err));
};