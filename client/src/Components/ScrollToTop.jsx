import React from 'react';

import { useScrollToTop } from '../Utils/checkScrollToTop';

function ScrollToTop() {
    const { showScroll } = useScrollToTop();

    return (
        <div class="relative">
            {showScroll && (
                <div class="fixed bottom-4 right-4 w-10 h-10 bg-red-500 rounded-full shadow-lg z-20 flex items-center justify-center cursor-pointer hover:bg-red-600"
                    onClick={() => window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                    </svg>
                </div>
            )}
        </div>
    )
}

export default ScrollToTop;