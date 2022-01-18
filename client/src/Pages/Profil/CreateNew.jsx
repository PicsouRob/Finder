import React from 'react';

function CreateNew() {
    return (
        <div
            class="w-28 flex items-center gap-x-2 px-2 py-1.5 bg-red-500 hover:bg-green-500 text-white rounded-md cursor-pointer"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
                <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M12 4v16m8-8H4"
                />
            </svg>
            Ajouter
        </div>
    )
}

export default CreateNew;