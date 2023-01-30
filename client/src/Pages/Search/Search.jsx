import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Modal from '../../Components/Modal';
import SearchResult from './SearchResult';
import SearchInput from './SearchInput';
import ImagesView from '../../Components/ImagesView';

function Search() {
    const [data, setData] = useState([]);
    const locationData = useLocation();
    const { jobValue, cityValue } = locationData.state;
    console.log(jobValue)
    const [value, setValue] = useState('');
    const [location, setLocation] = useState(cityValue);
    const [modalData, setModalData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showImages, setShowImages] = useState(false);
    const [imagesIndex, setImagesIndex] = useState(0);
    const [imagesData, setImagesData] = useState([]);

    useEffect(() => {
        axios.get(`/api/stuff`).then((res) => {
            setData(res.data);
        });

        document.title = "Finder | Recherche";
    }, []);

    const selectFilter = () => { }

    const handleSearch = () => {
        if (!value) {
            window.alert('Le titre est obligatoire');
        } else {
            const val = value.toLowerCase();
            let result = [];
            data.filter((item) => {
                const job = item.job.toLowerCase();

                if (job.includes(val) && location === 'Ville') {
                    result.push(item);
                } else if (location !== 'Ville' && job.includes(val) && item.location.includes(location)) {
                    result.push(item);
                }
            });

            setData(result);
        }
    };

    useEffect(() => {
        const keyPressSubmit = (e) => {
            if (e.key === "Enter") {
                // handleSearch();
            }
        };

        document.addEventListener('keydown', keyPressSubmit);
        return () => document.removeEventListener('keydown', keyPressSubmit);
    }, []);

    return (
        <div>
            <Header />
            <div class="py-20 lg:py-24 px-6 md:px-28 bg-[#0e1e25] flex items-center justify-center">
                <div className="w-1/2 space-y-3">
                    <h2 class="text-3xl md:text-5xl font-bold text-white pb-2 md:pb-0 text-center">Trouver un professionnel</h2>
                    <p class="text-center font-medium text-lg text-gray-400">Trouvez votre professionnel pour votre travail et obtenez satisfaction</p>
                    <SearchInput location={location} value={value}
                        setValue={setValue} setLocation={setLocation}
                        setData={setData} data={data}
                        handleSearch={handleSearch}
                    />
                </div>
            </div>
            <div class="py-8 px-6 md:px-28 bg-green-50">
                <div class="flex justify-between items-center">
                    <span class="text-base text-gray-800">{data.length} Freelance Trouvées</span>
                    <div class="flex justify-between items-center border rounded-lg px-3 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
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
                setImagesData={setImagesData} setImagesIndex={setImagesIndex}
                setShowImages={setShowImages}
            />
            {showImages && (
                <ImagesView showImages={showImages} setShowImages={setShowImages}
                    setImagesIndex={setImagesIndex}
                    imagesIndex={imagesIndex} imagesData={imagesData}
                />
            )}
            <Footer />
        </div>
    )
}

export default Search;