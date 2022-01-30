import React from 'react';
import { Link } from 'react-router-dom';

import { city } from '../../Utils/helpers';

function InputField(props) {
    const { value, setValue, setSelectCity, selectCity } = props;

    return (
        <div class="w-full">
            <div class="flex items-center w-full shadow-lg bg-white px-2 h-12 md:h-16 gap-x-1 rounded-lg mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input placeholder="Le titre ici" value={value}
                    onChange={(e) => setValue(e.target.value)}
                    class="w-2/3 placeholder-show placeholder:font-medium text-sm font-medium focus-within:outline-none placeholder-gray-800 h-10 md:h-12"
                />
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ef4444">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <select $white id="select-ville"
                    onChange={(e) => setSelectCity(e.target.value)}
                    class="bg-transparent w-28 md:w-1/3"
                >
                    <option value="Ville" selected>Ville</option>
                    {city.map((items, index) => (
                        <option key={index} value={items}
                            selected={selectCity === items ? true : false}
                        >
                            {items}
                        </option>
                    ))}
                </select>
                <Link to="/api/job/find"
                    state={{ jobValue: '', cityValue: 'Ville' }}
                    class="hidden md:block bg-red-500 rounded-lg px-3 py-2 text-white hover:bg-green-500 shadow-md"
                >
                    Rechercher
                </Link>
            </div>
            <Link to="/api/job/find"
                state={{ jobValue: '', cityValue: 'Ville' }}
                class="mt-3 block md:hidden bg-sky-500 rounded-lg px-3 py-2 text-white hover:bg-green-500 shadow-md w-full"
            >
                Rechercher
            </Link>
        </div>
    )
}

export default InputField;