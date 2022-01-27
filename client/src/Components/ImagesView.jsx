import React, { useEffect, useCallback } from 'react';
import { animated, useSpring } from 'react-spring';

function ImagesView(props) {
    const { showImages, setShowImages, imagesData,
        imagesIndex, setImagesIndex
    } = props;

    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showImages) {
                setShowImages(false);
            }
        },
        [setShowImages, showImages],
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    const animation = useSpring({
        config: {
            duration: 500
        },
        opacity: showImages ? 1 : 0,
        transform: showImages ? 'translateY(0%)' : 'translateY(-100%)',
    });

    const seekNext = async () => {
        if (imagesIndex < imagesData.length - 1) {
            setImagesIndex(imagesIndex + 1);
        } else {
            setImagesIndex(0);
        }
    }

    const seekPreview = async () => {
        if (imagesIndex === 0) {
            setImagesIndex(imagesData.length - 1);
        } else {
            setImagesIndex(imagesIndex - 1);
        }
    }

    return <div class="fixed top-0 right-0 left-0 bottom-0 z-20 px-2 py-10 md:px-8 min-w-7xl mx-auto"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
    >
        <div class="h-6 w-6 cursor-pointer absolute top-3 right-5 text-white"
            onClick={() => setShowImages(false)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        <animated.div style={animation}
            class="relative min-w-7xl h-full bg-white rounded-lg shadow-lg mt-3 mx-0 md:mx-4"
        >
            <div class="grid place-items-center w-full h-full">
                {imagesData.length > 1 && (
                    <div class="bg-contain bg-no-repeat bg-top rounded-md shadow-md w-full h-full"
                        style={{ backgroundImage: `url(${imagesData[imagesIndex]})` }}
                    />
                )}
            </div>
            <div class="absolute top-1/2 w-full flex items-center justify-between px-4 text-white">
                <div class="w-8 h-8 md:w-10 md:h-10 bg-[#0e1e25] rounded-full grid place-items-center shadow-sm cursor-pointer hover:opacity-80"
                    onClick={() => seekPreview()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 md:h-6 w-5 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div class="w-8 h-8 md:w-10 md:h-10 bg-[#0e1e25] rounded-full grid place-items-center shadow-sm cursor-pointer hover:opacity-80"
                    onClick={() => seekNext()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 md:h-6 w-5 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </animated.div>
    </div>;
}

export default ImagesView;