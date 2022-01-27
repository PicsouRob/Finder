import React from 'react';

import stuffImage from '../../Images/list.svg';
import { substringDesc } from '../../Utils/data';
import { getDate } from '../../Utils/helpers';

function Stuff(props) {
    const { item, index, setShowModal, showModal,
        setModalData
    } = props;
    const openModal = (item) => {
        setShowModal(!showModal);
        setModalData(item);
    }

    return (
        <div class="flex items-center justify-between rounded-lg shadow-md px-3 py-4 cursor-pointer group hover:bg-black"
            key={index}
            onClick={() => openModal(item)}
        >
            <div class="flex items-center gap-x-4">
                <img alt='img'
                    src={item.images.length > 0 ? item.images[0] : stuffImage}
                    class="h-20 w-16 rounded-lg"
                />
                <div class="">
                    <span class="group-hover:text-white font-medium">{item.job}</span>
                    <p class="group-hover:text-white">{substringDesc(item.description)}</p>
                    <p class="group-hover:text-white">DEPUIS {getDate(item.date)}</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="gray">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    )
}

export default Stuff;