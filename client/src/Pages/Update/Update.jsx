import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { city } from '../../Utils/helpers';

const validationSchema = Yup.object().shape({
    phone: Yup.string().required("Le numero de telephone est obligatoire")
        .min(8, 'Le numéro de téléphone doit comporter au moins 8 caractères'),
    name: Yup.string().required("Le Nom et Prenom est obligatoire"),
    description: Yup.string().required("Veillez decrire votre carrière"),
    location: Yup.string().required("L'addresse est obligatoire"),
});

function Update() {
    const locationData = useLocation();
    const navigate = useNavigate();
    const user = locationData.state;
    console.log(user);
    const { phone, name, description, location,
        facebook, instagram, website, _id
    } = user;
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (values) => {
        setIsLoading(true);

        axios.put(`/api/update-data/${_id}`, values)
            .then(async (res) => {
                setIsLoading(false);
                await navigate(`/api/user/${_id}`, { state: _id });
                await window.location.reload();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }
    return (
        <div class="bg-white">
            <Header />
            <div class="w-full h-52 bg-[#0e1e25]"></div>
            <div class="grid place-items-center px-3 md:px-8 pb-12">
                <div class="shadow-lg bg-white px-3 md:px-6 py-4 rounded-lg z-10 -mt-40 w-full lg:w-2/4">
                    <h2 class="font-bold text-xl pb-2">Remplissez le formulaire</h2>
                    <span class="">Veillez modifier vos données personnelles nécessaire pour modifier votre profil</span>
                    <Formik
                        initialValues={{ phone, name, description, location, facebook, instagram, website }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {({ values, errors, handleSubmit, handleChange, touched }) => (
                            <form class="py-8" onSubmit={handleSubmit}>
                                <label>Nom et Prenom</label>
                                <input
                                    type="text" name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder="Nome et Prenom"
                                    class="shadow-sm bg-white rounded-lg p-2 border w-full my-2  mb-4"
                                />
                                {errors.name && touched.name && (
                                    <p class="text-red-700 -mt-3 mb-2">{errors.name}</p>
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
                                <label class="">Nom d'instagram profil</label>
                                <input class="shadow-sm bg-white rounded-lg p-2 border w-full my-2  mb-4" type="text"
                                    value={values.instagram}
                                    placeholder="Nom d'instagram profil"
                                    onChange={handleChange} name="instagram"
                                />
                                <label class="">Nom facebook profil</label>
                                <input class="shadow-sm bg-white rounded-lg p-2 border w-full my-2  mb-4" type="text"
                                    value={values.facebook}
                                    placeholder="Nom facebook profil"
                                    onChange={handleChange} name="facebook"
                                />
                                <label class="">Votre Site Web link</label>
                                <input class="shadow-sm bg-white rounded-lg p-2 border w-full my-2  mb-4" type="text"
                                    value={values.website}
                                    placeholder="Nom facebook profil"
                                    onChange={handleChange} name="website"
                                />
                                <button type="submit" class="py-2.5 rounded-lg text-white font-bold uppercase bg-red-500 hover:bg-black text-[13px] w-full mt-3">
                                    {isLoading && <i class="fa fa-spinner fa-spin mr-3"></i>}
                                    Modifier mon profil
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

export default Update;