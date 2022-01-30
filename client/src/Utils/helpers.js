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