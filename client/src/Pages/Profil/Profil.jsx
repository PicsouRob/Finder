import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../Components/Header';
import { useLocalStorage } from '../../Utils/helpers';

import Footer from '../../Components/Footer';
import Update from '../Update/Update';
import Modal from '../Job/Modal';
import UpdateJob from '../Update/UpdateJob';
import ProfilInfo from './ProfilInfo';
import CreateNew from './CreateNew';
import StuffEmpty from './StuffEmpty';
import Stuff from './Stuff';

function Profil({ user }) {
    const locationData = useLocation();
    const userData = locationData.state;
    const [store, setValue] = useLocalStorage('user', userData);
    const [data, setData] = useState({});
    // console.log('eee:', userData);
    const { image, _id } = data;
    const [stuff, setStuff] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [onLoad, setOnLoad] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [changePhoto, setChangePhoto] = useState('');

    useEffect(() => {
        document.title = 'Finder | Porfile';
        axios.get(`https://finderht.herokuapp.com/api/job/user/${userData}`)
            .then(res => {
                setStuff(res.data);
            }).catch(err => console.log(err));
    }, [userData]);

    useEffect(() => {
        axios.get(`https://finderht.herokuapp.com/api/user/${userData}`)
            .then(async (res) => {
                await setData(res.data);
            }).catch(err => console.log(err));
    }, [modalShow, onLoad, userData]);

    return (
        <div style={{ background: "#e7ebee" }}>
            <Header />
            <div class="w-full h-52 bg-[#0e1e25]"></div>
            <div class="min-w-7xl mx-auto px-6 md:px-8 bg-green-50 pb-16 pt-10">
                <div class="flex flex-col md:flex-row gap-y-8 gap-x-16 -mt-40 z-10">
                    <ProfilInfo data={data} userId={user._id} stuff={stuff} />
                    <div class="bg-white p-3 md:p-4 rounded-lg shadow-lg w-full md:w-3/5 self-start">
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
                modalData={modalData} setShowUpdate={setShowUpdate}
                userProfil={image}
            />
            {stuff.map((item, index) => (
                <div key={index}>
                    <UpdateJob setShowUpdate={setShowUpdate} showUpdate={showUpdate}
                        data={item}
                    />
                </div>
            ))}
            <Update modalShow={modalShow} setModalShow={setModalShow} />
            <Footer />
        </div>
    )
}

const mapStateToProps = ({ user }) => {
    return { user };
}

export default connect(mapStateToProps)(Profil);