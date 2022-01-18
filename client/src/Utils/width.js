import { useState, useEffect } from 'react';

export function useWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    const [padding, setPadding] = useState('');

    const checkWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        const widthImage = () => {
            if(width > 960) {
                setPadding('100px');
            } 
        }
        
        widthImage();
        window.addEventListener('resize', checkWidth);
    }, [width]);

    return { width, padding };
}