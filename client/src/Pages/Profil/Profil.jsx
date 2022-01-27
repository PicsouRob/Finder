import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../Components/Header';
import signImages from '../../Images/sign.jpg';

import Footer from '../../Components/Footer';
import Modal from '../../Components/Modal';
import ProfilInfo from './ProfilInfo';
import CreateNew from './CreateNew';
import StuffEmpty from './StuffEmpty';
import Stuff from './Stuff';
import DeleteAlert from './DeleteAlert';
import ImagesView from '../../Components/ImagesView';

function Profil({ user }) {
    const locationData = useLocation();
    const userData = locationData.state;
    const [data, setData] = useState({});
    const [stuff, setStuff] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [modalData, setModalData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [showImages, setShowImages] = useState(false);
    const [imagesIndex, setImagesIndex] = useState(0);
    const [imagesData, setImagesData] = useState([]);

    useEffect(() => {
        document.title = 'Finder | Porfile';
    }, []);

    useEffect(() => {
        axios.get(`/api/user/stuff/${userData}`)
            .then(res => {
                setStuff(res.data);
            }).catch(err => console.log(err));

        axios.get(`/api/user-data/${userData}`)
            .then((res) => {
                setData(res.data);
            }).catch(err => console.log(err));
    }, [userData]);

    return (
        <div class="relative bg-[#e7ebee] w-full">
            <Header />
            <div class="w-full h-52 bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 50%), rgba(0, 0, 0, 0.8)),url(${data.image ? data.image : signImages})` }}
            />
            <div class="min-w-7xl mx-auto px-3 md:px-8 bg-green-50 pb-16 pt-10">
                <div class="flex flex-col md:flex-row gap-y-8 gap-x-16 -mt-40 z-10">
                    <ProfilInfo data={data} userId={user._id} stuff={stuff}
                        setDeleteShow={setDeleteShow}
                    />
                    <div class="bg-white p-3 md:p-4 rounded-lg shadow-sm w-full md:w-3/5 self-start">
                        <div class="flex items-center justify-between">
                            <div>{stuff.length > 1 ? "Compétences" : "Compétence"}</div>
                            {userData === user._id ? <CreateNew user={data} /> : <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>}
                        </div>
                        {stuff.length > 0 ? (
                            <div class="grid grid-rows-1 gap-y-5 py-10">
                                {stuff.reverse().map((item, index) => (
                                    <Stuff index={index} item={item}
                                        setShowModal={setShowModal} showModal={showModal}
                                        setModalData={setModalData}
                                    />
                                ))}
                            </div>
                        ) : (<StuffEmpty user={data} id={user._id} />)}
                    </div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}
                modalData={modalData}
                setImagesData={setImagesData} setImagesIndex={setImagesIndex}
                setShowImages={setShowImages}
            />
            {deleteShow && (
                <DeleteAlert setDeleteShow={setDeleteShow}
                    deleteShow={deleteShow} setIsLoading={setIsLoading}
                    id={user._id} isLoading={isLoading}
                />
            )}
            {showImages && (
                <ImagesView showImages={showImages} setShowImages={setShowImages} setImagesIndex={setImagesIndex}
                    imagesIndex={imagesIndex} imagesData={imagesData}
                />
            )}
            <Footer />
        </div>
    )
}

const mapStateToProps = ({ user }) => {
    return { user };
}

export default connect(mapStateToProps)(Profil);