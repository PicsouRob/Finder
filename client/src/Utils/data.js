export const menu = [
    {
        title: "Parcourir",
        to: "/api/job/find"
    },
    {
        title: "À propos",
        to: "/about"
    },
    {
        title: "Contact",
        to: "/Contact"
    },
];

export const substringDesc = (text) => {
    if (text.length > 30) {
        return `${text.substring(0, 30)}...`;
    } else {
        return text;
    }
}