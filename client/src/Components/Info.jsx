import React from 'react';
import { data } from '../Utils/infoData';

function Info() {
    return (
        <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-16">
            <div class="text-center space-y-2 flex flex-col">
                <h1 class="font-bold text-2xl md:text-3xl lg:text-4xl">
                    Comment trouver votre meilleur Embaucheurs
                </h1>
                <span class="text-[18px] md:text-xl">
                    Le moyen rapide de trouver votre meilleur Embaucheurs
                </span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-5 md:gap-x-12 lg:gap-x-16">
                {data.map((item, index) => (
                    <div key={index} class="flex flex-col items-center justify-center shadow-md rounded-lg py-8 px-4 text-center gap-y-4 group hover:bg-black">
                        <div 
                            class="w-12 h-12 rounded-full shadow-sm flex items-center justify-center"     style={{ backgroundColor: item.color }}
                        >
                            {item.icon}
                        </div>
                        <h3 class="font-bold text-base md:text-[20px] group-hover:text-white">{item.title}</h3>
                        <span class="text-base text-gray-600">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Info;