import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Modal from '../../Components/Modal';
import SearchResult from './SearchResult';
import SearchInput from './SearchInput';
import filter from '../../Images/filter.png';

function Search() {
    const [data, setData] = useState([]);
    // console.log(data);
    const locationData = useLocation();
    // const { jobValue, cityValue } = locationData.state;
    // console.log(locationData)
    const [value, setValue] = useState('');
    const [location, setLocation] = useState('Ville');
    const [modalData, setModalData] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get(`/api/stuff`).then((res) => {
            setData(res.data);
        });

        document.title = "Finder | Recherche";
    }, []);

    useEffect(() => {
        const keyPressSubmit = (e) => {
            if (e.key === "Enter") {

            }
        };

        document.addEventListener('keydown', keyPressSubmit);

        return () => document.removeEventListener('keydown', keyPressSubmit);
    }, [location, value]);

    const selectFilter = () => { }

    const handleSearch = async () => {
        await setData([]);
        if (!value) {
            window.alert('Le titre est obligatoire');
        } else {
            const arrayData = [];
            const val = await value.toLowerCase();
            const result = await data.filter((item) => {
                if (item.job.toLowerCase().includes(val)) {
                    return item;
                }
            });

            console.log(result);

            // {
            //     const jobValue = item.job.toLowerCase();
            //     if (jobValue.indexOf(val) > -1 && location === 'Ville') {
            //         // console.log(item)
            //         return item;
            //     } 
            //     // else if (jobValue.indexOf(val) > -1 && item.location.indexOf(location) > -1) {
            //     //     return item;
            //     // }
            // });

            // console.log(result)
            // return setData(result);
        }
    }

    return (
        <div>
            <Header />
            <div class="py-20 px-6 md:px-28 bg-[#0e1e25]">
                <h2 class="text-3xl md:text-5xl font-bold text-white pb-2 md:pb-0 text-center">Trouver un professionnel</h2>
                <p class="text-center font-medium text-lg">Trouvez votre professionnel pour votre travail et obtenez satisfaction</p>
                <SearchInput location={location} value={value}
                    setValue={setValue} setLocation={setLocation}
                    setData={setData} data={data}
                    handleSearch={() => handleSearch()}
                />
            </div>
            <div class="py-8 px-6 md:px-28 bg-green-50">
                <div class="flex justify-between items-center">
                    <span class="text-base text-gray-800">{data.length} Freelance Trouvées</span>
                    <div class="flex justify-between items-center border rounded-lg px-3 py-2">
                        <img src={filter} alt="" class="h-4 mr-3 w-4" />
                        <select id="select-ville" onChange={(e) => selectFilter(e)}
                            class="bg-transparent w-24 md:w-auto"
                        >
                            <option value="Tout" selected>Tout</option>
                            <option value="Les plus recherchés">Les plus recherchés</option>
                            <option value="Les plus populaire">Les plus populaires</option>
                        </select>
                    </div>
                </div>
                <SearchResult location={location} value={value}
                    setShowModal={setShowModal} showModal={showModal}
                    setModalData={setModalData} data={data}
                />
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}
                modalData={modalData}
            />
            <Footer />
        </div>
    )
}

export default Search;