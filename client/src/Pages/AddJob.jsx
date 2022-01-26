import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { city } from '../Utils/helpers';

const validationSchema = Yup.object().shape({
    phone: Yup.string().required("Le numero de telephone est obligatoire")
        .min(8, 'Le numéro de téléphone doit comporter au moins 8 caractères'),
    email: Yup.string().email('Addresse email incorrect')
        .required("L'email est obligatoire"),
    nameCreator: Yup.string().required("Le Nom et Prenom est obligatoire"),
    job: Yup.string().required("Le nom de votre competence est obligatoire"),
    description: Yup.string().required("Veillez decrire votre carrière"),
    location: Yup.string().required("L'addresse est obligatoire"),
});

function AddJob() {
    const navigate = useNavigate();
    const locationData = useLocation();
    const user = locationData.state;
    const { phone, name, email, location,
        facebook, instagram, _id
    } = user;
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);

    const handleSubmit = async (values) => {
        setIsLoading(true);
        let formData = new FormData();
        await Object.keys(values).forEach((item) => {
            formData.append(`${item}`, values[item]);
        });
        for (let i = 0; i < images.length; i++) {
            formData.append(`images`, images[i]);
        }

        axios.post('/api/user/add-stuff', formData)
            .then(async (res) => {
                setIsLoading(false);
                if (res.data.error) {
                    setIsLoading(false);
                    window.alert(res.data.error);
                } else {
                    await navigate(`/api/user/${_id}`, { state: _id });
                    await window.location.reload();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    console.log(res.data);
                }
            }).catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }

    return (
        <div style={{ background: "rgba(0, 0, 0, 0.2)" }}>
            <Header />
            <div class="w-full h-52 bg-[#0e1e25]"></div>
            <div class="grid place-items-center px-3 md:px-8 pb-12">
                <div class="shadow-lg bg-white px-3 md:px-6 py-4 rounded-lg z-10 -mt-40 w-full lg:w-2/4">
                    <h2 class="font-bold text-xl pb-2">Remplissez le formulaire</h2>
                    <span class="">Veillez entrer vos données personnelles pour commencer à recevoir des offres des clients autour de vous dans tout le pays.</span>
                    <Formik
                        initialValues={{ phone, nameCreator: name, images, email, job: '', description: '', location, facebookProfil: facebook, instagramProfil: instagram }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {({ values, errors, handleSubmit, handleChange, touched }) => (
                            <form enctype="multipart/form-data"
                                class="py-8" onSubmit={handleSubmit}
                            >
                                <label>Nom et Prenom</label>
                                <input
                                    type="text" name="nameCreator"
                                    value={values.nameCreator}
                                    onChange={handleChange}
                                    placeholder="Nome et Prenom"
                                    class="shadow-sm bg-white rounded-lg p-2 border w-full my-2  mb-4"
                                />
                                {errors.nameCreator && touched.nameCreator && (
                                    <p class="text-red-700 -mt-3 mb-2">{errors.nameCreator}</p>
                                )}
                                <label>Courrier électronique</label>
                                <input class="shadow-sm bg-white rounded-lg p-2 border w-full my-2  mb-4"
                                    type="text" value={values.email} placeholder="Email"
                                    onChange={handleChange} name="email"
                                />
                                {errors.email && touched.email && (
                                    <p class="text-red-700 -mt-3 mb-2">{errors.email}</p>
                                )}
                                <label class="">Nom de votre carrière</label>
                                <input class="shadow-sm bg-white rounded-lg p-2 border w-full my-2  mb-4" type="text"
                                    placeholder="Nom de votre métier"
                                    onChange={handleChange} name="job"
                                    value={values.job}
                                />{errors.job && touched.job && (
                                    <p class="text-red-700 -mt-3 mb-2">{errors.job}</p>
                                )}
                                <label class="">Adresse</label>
                                <select name="location"
                                    value={values.location}
                                    onChange={handleChange}
                                    class="shadow-sm bg-white rounded-lg p-2 border w-full my-2 mb-3"
                                >
                                    <option value="Ville">Ville</option>
                                    {city.map((item, index) => (
                                        <option key={index} value={item} selected={values.location === item ? true : false}>{item}</option>
                                    ))}
                                </select>
                                {errors.location && touched.location && (
                                    <p class="text-red-700 -mt-3 mb-2">{errors.location}</p>
                                )}
                                <label class="">Numero de téléphone</label>
                                <input class="shadow-sm bg-white rounded-lg p-2 border w-full my-2  mb-4" type="text"
                                    value={values.phone}
                                    placeholder="Numero de téléphone"
                                    onChange={handleChange} name="phone"
                                />
                                {errors.phone && touched.phone && (
                                    <p class="text-red-700 -mt-3 mb-2">{errors.phone}</p>
                                )}
                                <label class="">Description</label>
                                <input class="shadow-sm bg-white rounded-lg p-2 border w-full my-2  mb-4" type="text"
                                    value={values.description}
                                    placeholder="Description de votre travail" onChange={handleChange} name="description"
                                />
                                {errors.description && touched.description && (
                                    <p class="text-red-700 -mt-3 mb-2">{errors.description}</p>
                                )}
                                <label class="">Choisir des images</label>
                                <input type="file" multiple name="images"
                                    onChange={(e) => setImages(e.target.files)}
                                    class="shadow-sm bg-white rounded-lg p-2 border w-full my-2  mb-4"
                                />
                                <label class="">Nom d'instagram profil</label>
                                <input class="shadow-sm bg-white rounded-lg p-2 border w-full my-2  mb-4" type="text"
                                    value={values.instagramProfil}
                                    placeholder="Nom d'instagram profil"
                                    onChange={handleChange} name="instagramProfil"
                                />
                                <label class="">Nom facebook profil</label>
                                <input class="shadow-sm bg-white rounded-lg p-2 border w-full my-2  mb-4" type="text"
                                    value={values.facebookProfil}
                                    placeholder="Nom facebook profil"
                                    onChange={handleChange} name="facebookProfil"
                                />
                                <button type="submit" class="py-2.5 rounded-lg text-white font-bold uppercase bg-red-500 hover:bg-black text-[13px] w-full mt-3">
                                    {isLoading && <i class="fa fa-spinner fa-spin mr-3"></i>}
                                    Ajouter
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddJob;