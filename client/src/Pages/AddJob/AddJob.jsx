import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { city } from '../../Utils/helpers';

const validationSchema = Yup.object().shape({
    phone: Yup.string().required("Le numero de telephone est obligatoire"),
    email: Yup.string().email('Addresse email incorrect')
        .required("L'email est obligatoire"),
    nameCreator: Yup.string().required("Le Nom et Prenom est obligatoire"),
    job: Yup.string().required("Le nom de votre competence est obligatoire"),
    description: Yup.string().required("Veillez decrire votre carrière"),
    location: Yup.string().required("L'addresse est obligatoire"),
});

function AddJob() {
    const locationData = useLocation();
    const user = locationData.state;
    console.log(user);
    const { phone, name, _id, email, location,
        facebook, instagram
    } = user;
    const [cityName, setCityName] = useState(location);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div style={{ background: "rgba(0, 0, 0, 0.2)" }}>
            <Header />
            <div class="w-full h-52 bg-[#0e1e25]"></div>
            <div class="grid place-items-center px-3 md:px-8 pb-12">
                <div class="shadow-lg bg-white px-3 md:px-6 py-4 rounded-lg z-10 -mt-40">
                    <h2 class="font-bold text-xl pb-2">Remplissez le formulaire</h2>
                    <span class="">Veillez entrer vos données personnelles pour commencer à recevoir des offres des clients autour de vous.</span>
                    <Formik
                        initialValues={{ phone: '', nameCreator: '', creatorId: '', images: '', email: '', job: '', description: '', location: '', facebookProfil: '', instagramProfil: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => console.log('add', values)}
                    >
                        {({ values, errors, handleSubmit, handleChange, touched }) => (
                            <form class="py-8" onSubmit={handleSubmit}>
                                <label>Nom et Prenom</label>
                                <input class="border shadow-sm"
                                    onChangeText={handleChange}
                                    // value={values.nameCreator} placeholder="Nom & Prenom" type="text"
                                />
                                {errors.nameCreator && touched.nameCreator && (
                                    <p class="text-red-700 -mt-3 mb-2">{errors.nameCreator}</p>
                                )}
                                <label>Courrier électronique</label>
                                <input class="border shadow-sm"
                                    type="email" value={values.email} placeholder="Email"
                                    onChange={handleChange}
                                />
                                {errors.email && touched.email && (
                                    <p class="text-red-700 -mt-3 mb-2">{errors.email}</p>
                                )}
                                <label class="">Nom de votre carrière</label>
                                <input class="border shadow-sm" type="text"
                                    placeholder="Nom de votre métier"
                                    onChangeText={handleChange}
                                    value={values.job}
                                />{errors.job && touched.job && (
                                    <p class="text-red-700 -mt-3 mb-2">{errors.job}</p>
                                )}
                                <label class="">Adresse</label>
                                <select class="shadow-sm bg-white rounded-lg p-2 border w-full my-2 mb-3"
                                    onChange={handleChange}
                                    value={values.location}
                                >
                                    <option value="Ville">Ville</option>
                                    {city.map((item, index) => (
                                        <option key={index} value={item} selected={cityName === item ? true : false}>{item}</option>
                                    ))}
                                </select>
                                {errors.location && touched.location && (
                                    <p class="text-red-700 -mt-3 mb-2">{errors.location}</p>
                                )}
                                <label class="">Numero de téléphone</label>
                                <input class="border shadow-sm" type="text"
                                    value={values.phone}
                                    placeholder="Numero de téléphone"
                                    onChange={handleChange}
                                />
                                {errors.phone && touched.phone && (
                                    <p class="text-red-700 -mt-3 mb-2">{errors.phone}</p>
                                )}
                                <label class="">Description</label>
                                <input class="border shadow-sm" type="text"
                                    value={values.description}
                                    placeholder="Description de votre travail" onChange={handleChange}
                                />
                                {errors.description && touched.description && (
                                    <p class="text-red-700 -mt-3 mb-2">{errors.description}</p>
                                )}
                                <label class="">Choisir des images</label>
                                <input class="border shadow-sm" type="file" name="images"
                                    multiple title="Ajouter des images(plusieurs)"
                                    onChange={handleChange}
                                />
                                <label class="">Nom d'instagram profil</label>
                                <input class="border shadow-sm" type="text"
                                    value={values.instagramProfil}
                                    placeholder="Nom d'instagram profil"
                                    onChange={handleChange}
                                />
                                <label class="">Nom facebook profil</label>
                                <input class="border shadow-sm" type="text"
                                    value={values.facebookProfil}
                                    placeholder="Nom facebook profil"
                                    onChange={handleChange}
                                />
                                <button type="submit" class="py-2 rounded-lg text-white font-bold uppercase bg-red-500 hover:bg-green-500 text-[13px] w-full mt-3">
                                    {isLoading && <i class="fa fa-spinner fa-spin"></i>}
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