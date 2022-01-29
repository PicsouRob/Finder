import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import axios from 'axios';
import { connect } from 'react-redux';

import img from '../Images/profil.svg';
import empty from '../Images/stuffimage.svg';
import { getDate } from '../Utils/helpers';
import DeleteJobAlert from '../Pages/Profil/DeleteJobAlert';

function Modal(props) {
    const { showModal, setShowModal, modalData,
        user, setImagesData,
        setImagesIndex, setShowImages
    } = props;
    const modalRef = useRef();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { nameCreator, _id, userId, images, email, job, description,
        location, facebookProfil, instagramProfil, date, phone
    } = modalData;
    const [userData, setuserData] = useState({});
    const [deleteShow, setDeleteShow] = useState(false);

    const handleCloseModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal],
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    useEffect(() => {
        axios.get(`/api/user/${email}/photo`)
            .then((res) => {
                setuserData(res.data);
            }).catch(err => console.log(err));
    }, [email]);

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
    });

    const handleViewImages = async (index) => {
        await setShowModal(false);
        setShowImages(true);
        setImagesIndex(index);
        setImagesData(images);
    }

    return (
        <div class="relative" >
            {deleteShow && (
                <DeleteJobAlert
                    setDeleteShow={setDeleteShow} job={job}
                    userId={userId} id={_id} isLoading={isLoading}
                    setIsLoading={setIsLoading} deleteShow={deleteShow}
                    setShowModal={setShowModal}
                />
            )}
            {showModal ? (
                <div ref={modalRef} onClick={(e) => handleCloseModal(e)}
                    class="fixed top-0 right-0 left-0 bottom-0 z-20 overflow-scroll px-3 py-8 sm:px-6 min-w-7xl mx-auto"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                >
                    <animated.div style={animation}>
                        <div class="flex items-center justify-between">
                            <Link to={`/api/user/${userId}`}
                                state={userId}
                                class="flex items-center gap-x-3 cursor-pointer"
                                onClick={() => setShowModal(false)}
                            >
                                <img src={userData.image ? userData.image : img} alt="img"
                                    class="w-10 h-10 rounded-full"
                                />
                                <div class="">
                                    <span class="text-white font-medium">{nameCreator}</span>
                                    <p class="text-white">{email}</p>
                                </div>
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer mr-3 md:mr-0" fill="none" viewBox="0 0 24 24" stroke="#fff"
                                onClick={() => setShowModal(false)}
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div class="bg-white rounded-lg px-3 md:px-6 py-8 my-8 space-y-4">
                            <h2 class="font-bold text-xl">{job}</h2>
                            <div class="my-2 w-full">{description}</div>
                            <p>DEPUIS LE : {getDate(date)}</p>
                            <div class="flex items-center gap-x-3 w-full md:w-1/3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="rgba(49, 198, 174)">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span class="">{location}</span>
                            </div>
                            <div class="flex items-center gap-x-3 w-full md:w-1/3 cursor-pointer"
                                onClick={() => window.open('mailto:www.phanordpicsouroberto11@gmail.com?subject=Services&body=Salut Roberto')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="rgba(49, 198, 174)">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                                </svg>
                                <span class="whitespace-pre-line" >
                                    {email}
                                </span>
                            </div>
                            <div class="flex items-center gap-x-3 w-full md:w-1/3 cursor-pointer"
                                onClick={() => window.open('tel:+18094298594')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="rgba(49, 198, 174)">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span class="">{phone}</span>
                            </div>
                            <div>
                                {(instagramProfil || facebookProfil) && (<div class="font-medium">
                                    Réseaux sociaux
                                </div>)}
                            </div>
                            {(instagramProfil || facebookProfil) && <div class="">
                                {instagramProfil && <a class="px-2 border-2 group py-2 rounded-md hover:bg-black hover:border-transparent flex items-center justify-between mb-2"
                                    href={`https://instagram.com/${instagramProfil}`}
                                >
                                    <p class="text-md group-hover:text-white">Instagram</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                </a>}
                                {facebookProfil && <a class="px-2 border-2 group py-2 rounded-md hover:bg-black hover:border-transparent flex items-center justify-between"
                                    href={`https://facebook.com/${facebookProfil}`}
                                >
                                    <p class="text-md group-hover:text-white">Facebook</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                </a>}
                            </div>}
                            <div class="font-medium">Galeries</div>
                            {images.length > 0 && (<div class="grid gap-4 grid-cols-1 md:grid-cols-3">
                                {images.map((item, index) => (
                                    <div class="w-100 h-70 cursor-pointer hover:opacity-80" key={index}
                                        onClick={() => handleViewImages(index)}
                                    >
                                        <img class="my-1 rounded-md h-full" src={item} alt="item" />
                                    </div>
                                ))}
                            </div>)}
                            {images.length === 0 && (<div class="">
                                <img src={empty} alt='' width={280} height={300} />
                                {user._id === userId ?
                                    <span class="">Vous avez aucune image ,veillez cliquer sur modifier pour ajouter quelque une</span>
                                    : <span class="">Cet utilisateur n'a pas encore d'images</span>}
                            </div>)}
                            {user._id === userId && (
                                <div class="py-6 flex items-center gap-x-6">
                                    <Link to={`/api/user/${userId}/update-job`}
                                        state={modalData}
                                    >
                                        <button class="bg-green-500 px-4 md:px-5 py-2.5 text-white font-medium rounded-lg hover:bg-red-500" onClick={() => setShowModal(false)}>
                                            Modifier
                                        </button>
                                    </Link>
                                    <button class="bg-red-500 px-4 md:px-5 py-2.5 text-white font-medium rounded-lg hover:bg-red-400"
                                        onClick={() => setDeleteShow(true)}
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            )}
                        </div>
                    </animated.div>
                </div>
            ) : null}
        </div>
    )
}

const mapStateToProps = ({ user }) => {
    return { user };
}

export default connect(mapStateToProps)(Modal);