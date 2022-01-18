import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';

import CircleLeftBtn from '../../icons/circle-left.svg';
import CircleRightBtn from '../../icons/circle-right.svg';
import Google from '../../icons/google.svg';
import Facebook from '../../icons/facebook.svg';
import Email from '../../icons/email.svg';
import User from '../../icons/user.svg';
import Lock from '../../icons/lock.svg';
import LogoLink from '../../Components/Logo';

const validation = Yup.object().shape({
    name: Yup.string().required("Le nom est obligatoire"),
    email: Yup.string().email('Addresse email incorrect')
        .required("L'email est obligatoire"),
    password: Yup.string().min(6, 'Le mot de passe doit être au moins de 6 caractères')
        .required("Le mot de passe est obligatoire")
});

function SignUp() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Finder ht | Register'
    }, []);

    const register = (values) => {
        axios.post('/auth/register', values)
        .then(() => {
            console.log('register');
            navigate('/');
            window.location.reload();
        });
    }

    return (
        <div class="relative flex justify-between">
            <div class="hidden lg:block relative w-1/2 lg:self-start bg-cover bg-center h-screen bg-red-500">
                <div class="flex absolute bottom-20 justify-center w-full">
                    <div class="max-w-md text-center">
                        <span class="text-3xl font-bold leading-loose text-white">
                            Control Bussiness
                        </span>
                        <br />
                        <span class="font-light leading-7 text-white text-[20px]">
                            Dotra is the most comprehensive field service  assets management platform with combining flexibility
                        </span>
                        <div class="flex justify-center items-center pt-8 space-x-6">
                            <button class="rounded-full focus:ring-orange-500 focus">
                                <img src={CircleLeftBtn} alt='left' />
                            </button>
                            <button class="rounded-full focus:ring-orange-500 focus">
                                <img src={CircleRightBtn} alt="right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex mx-auto w-full lg:w-1/2">
                <div class="flex flex-col px-8 pt-10 lg:px-14 xl:px-24">
                    <LogoLink />
                    <div class="pt-6 pb-4">
                        <h1 class="text-3xl font-bold tracking-wide leading-loose writespace-nowrap">
                            Hi, Bienvenue!
                        </h1>
                        <span class="font-light text-gray-500">
                            Connectez-vous maintenant pour gérer vos compétences en toute simplicité
                        </span>
                        <div class="flex items-center justify-center">
                            <div class="flex items-center justify-center gap-y-4 gap-x-6 pt-10 mx-auto">
                                <a href="/auth/google" class="flex items-center justify-center py-2.5 w-full px-6 rounded-lg bg-white border border-gray-400 whitespace-nowrap hover:bg-gray-50 focus:outline-none focus:ring-gray-100 focus:ring-4">
                                    <img alt="google" src={Google} class="w-6 h-6" />
                                    <span class="pl-3 md:font-medium text-gray-900 text-base">Google</span>
                                </a>
                                <button class="flex items-center justify-center py-2.5 px-6 rounded-lg bg-blue-500 border w-full border-gray-400 whitespace-nowrap hover:bg-blue-600 focus:outline-none focus:ring-gray-100 focus:ring-4">
                                    <img alt="google" src={Facebook} class="w-6 h-6" />
                                    <span class="pl-3 md:font-medium text-white">Facebook</span>
                                </button>
                            </div>
                        </div>
                        <div class="flex justify-between items-center pt-4">
                            <hr class="w-full border-gray-400" />
                            <span class="px-4 font-light tracking-wide text-gray-500">Or</span>
                            <hr class="w-full border-gray-400" />
                        </div>
                        <Formik
                            initialValues={{ email: '', password: '', name: '' }}
                            validationSchema={validation}
                            onSubmit={(values) => register(values)}
                        >
                            {({ values, errors, handleSubmit, handleChange, touched }) => (
                                <form onSubmit={handleSubmit}>
                                    <div class="pt-4">
                                        <label for="email" class="font-light">Nom et Prénom</label>
                                        <div class="flex overflow-hidden items-center py-0 mt-2 w-full rounded-lg border border-grayy-400 transition-all focus-within:border-orange-500 h-12 px-2 md:px-3">
                                            <div class="flex justify-center items-center">
                                                <img alt="email" src={User} class="w-6 h-6 pointer-events-none" />
                                            </div>
                                            <input type="text" name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                placeholder="Nom et Prénom"
                                                class="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0 my-2"
                                            />
                                        </div>
                                        {errors.name && touched.name && (
                                            <p class="text-red-700 pt-1">{errors.name}</p>
                                        )}
                                    </div>
                                    <div class="pt-4">
                                        <label for="email" class="font-light">Adresse e-mail</label>
                                        <div class="flex overflow-hidden items-center py-0 mt-2 w-full rounded-lg border border-grayy-400 transition-all focus-within:border-orange-500 h-12 px-2 md:px-3">
                                            <div class="flex justify-center items-center">
                                                <img alt="email" src={Email} class="w-6 h-6 pointer-events-none" />
                                            </div>
                                            <input type="text" name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                placeholder="Adresse e-mail"
                                                class="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0 my-2"
                                            />
                                        </div>
                                        {errors.email && touched.email && (
                                            <p class="text-red-700 pt-1">{errors.email}</p>
                                        )}
                                    </div>
                                    <div class="pt-4 w-full">
                                        <label for="password" class="font-light">Mot de passe</label>
                                        <div class="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-grayy-400 transition-all focus-within:border-orange-500 h-12 px-2 md:px-3">
                                            <div class="flex justify-center items-center">
                                                <img alt="email" src={Lock} class="w-6 h-6 pointer-events-none" />
                                            </div>
                                            <input type="text" placeholder="Mot de passe"
                                                class="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0 my-2"
                                                value={values.password}
                                                onChange={handleChange}
                                                name="password"
                                            />
                                        </div>
                                        {errors.password && touched.password && (
                                            <p class="text-red-700 pt-1">{errors.password}</p>
                                        )}
                                    </div>
                                    <div class="flex justify-between items-center pt-3">
                                        <div class="flex items-center">
                                            <input type="checkbox" name="remember"
                                                class="w-5 h-5 text-orange-50 bg-white rounded border border-gray-400 focus:outline-none focus:ring-orange-500 focus:ring-1 focus:bg-orange-500 self-center"
                                            />
                                            <label for="remember" class="pl-2 font-light text-gray-900 pb-2  text-sm">
                                                Souviens-toi de moi
                                            </label>
                                        </div>
                                        <span class="text-blue-500 hover:text-teal-600 text-sm pb-2"></span>
                                    </div>
                                    <div class="pt-6">
                                        <button class="py-4 w-full text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 focus:ring-4 focus:ring-red-100 focus:outline-none h-12 flex items-center justify-center"
                                            type="submit"
                                        >
                                            S'inscrire
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                        <div class="pt-4 pb-3">
                            <div class="font-light text-center text-gray-500 space-x-1 flex items-center justify-center">
                                <div>Avez-vous déjà un compte?</div>
                                <Link to="/auth/login">
                                    <span class="font-normal text-teal-500 cursor-pointer hover:text-teal-600">
                                        Connectez-vous
                                    </span>
                                </Link>
                            </div>
                            <div class="flex flex-wrap gap-y-2 justify-between items-center pt-10 text-center whitespace-nowrap">
                                <span class="flex-1 text-gray-500">© 2021 Finder. Tous droits réservés</span>
                                <span class="flex flex-col md:flex-row justify-center items-center space-x-1 space-y-2 md:space-y-0 mx-auto">
                                    <span class="text-gray-500 hover:text-teal-600">Conditions d'utilisation</span>
                                    <span class="hidden md:flex text-gray-500">&#183;</span>
                                    <span class="text-gray-500 hover:text-teal-600">Politique de confidentialité </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;