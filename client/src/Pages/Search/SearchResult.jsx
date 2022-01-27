import React from 'react';

import { getDate } from '../../Utils/helpers';
import img from '../../Images/list.svg';
import search from '../../Images/search.svg';
import { substringDesc } from '../../Utils/data';

function SearchResult(props) {
    const { data, location, value, showModal,
        setShowModal, setModalData
    } = props;

    const openModal = (item) => {
        setShowModal(!showModal);
        setModalData(item);
    }

    return (
        <div class="">
            {data.length > 0 ? (<div class="my-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.reverse().map((item, index) => (
                    <div key={index}
                        onClick={() => openModal(item)}
                        class="group shadow py-4 rounded-lg bg-gray-50 hover:bg-black cursor-pointer px-4"
                    >
                        <div class="space-y-3">
                            <div class="flex space-x-3 items-center">
                                <div class="h-8 w-8 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: 'rgba(49, 198, 174, 0.3)' }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="#ef4444">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                </div>
                                <p class="font-medium group-hover:text-gray-500">{item.nameCreator}</p>
                            </div>
                            <h4 class="font-medium group-hover:text-white text-[19px]">{item.job}</h4>
                            <p class="group-hover:text-gray-500">{substringDesc(item.description)}</p>
                        </div>
                        <hr class="my-3" />
                        <div class="flex items-center justify-between">
                            <div class="space-y-2">
                                <p class="group-hover:text-gray-500">{getDate(item.date)}</p>
                                <div class="flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span class="group-hover:text-white">{item.location}</span>
                                </div>
                            </div>
                            <img src={item.images.length > 0 ? item.images[0] : img} alt="img"
                                class="h-12 w-12 rounded-lg border"
                            />
                        </div>
                    </div>
                ))}
            </div>
            ) : (
                <div class="flex items-center justify-center py-16 mx-auto" >
                    <div class="w-full md:w-2/3 flex flex-col items-center justify-center gap-y-3">
                        <img src={search} alt="search"
                            class="" width={300} height={300}
                        />
                        <span class="font-medium text-center pt-5">
                            Désolé, aucun résultat trouvé pour votre recherche:<br />
                            {value} {location !== "Ville" && location ? `a ${location}` : ""}
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchResult;