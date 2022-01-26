import React, { useEffect, useCallback } from 'react';
import axios from 'axios';
import { animated, useSpring } from 'react-spring';
import { useNavigate } from 'react-router-dom';

import close from '../../icons/close.svg';

function DeleteAlert(props) {
    const { setDeleteShow, deleteShow, setIsLoading, id,
        isLoading
    } = props;
    const navigate = useNavigate();

    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && deleteShow) {
                setDeleteShow(false);
            }
        },
        [setDeleteShow, deleteShow],
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    const animation = useSpring({
        config: {
            duration: 500
        },
        opacity: deleteShow ? 1 : 0,
        transform: deleteShow ? 'translateY(0%)' : 'translateY(-100%)',
    });

    const deleteAccount = async () => {
        setIsLoading(true);
        axios.delete(`/api/user/delete-account/${id}`)
            .then(async (res) => {
                setIsLoading(false);
                setDeleteShow(false);
                await navigate('/');
                await window.location.reload();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }).catch(err => console.log(err));
    }

    return <div class="fixed top-0 right-0 left-0 bottom-0 z-20 px-6 py-8 lg:px-6 min-w-7xl mx-auto grid place-items-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
    >
        <animated.div style={animation}
            class="relative bg-white py-5 px-8 rounded-lg shadow-lg"
        >
            <img alt="" class="h-6 w-6 cursor-pointer absolute top-3 right-5" src={close}
                onClick={() => setDeleteShow(false)}
            />
            <h1 class="text-[20px] text-center font-medium pb-3">
                Supprimer mon compte
            </h1>
            <span class="text-gray-700 text-center">
                Êtes-vous sûr de vouloir supprimer votre compte?
            </span>
            <div class="flex items-center justify-center gap-x-8 pt-4">
                <button class="px-3 py-2 bg-[#0e1e25] text-white rounded-lg shadow-lg hover:bg-gray-800"
                    onClick={() => setDeleteShow(false)}
                >
                    Annuler
                </button>
                <button onClick={() => deleteAccount()}
                    class="px-3 py-2 bg-red-700 text-white rounded-lg shadow-lg hover:bg-red-600 flex items-center gap-x-3"
                >
                    {isLoading && <i class="fa fa-spinner fa-spin"></i>}
                    Supprimer
                </button>
            </div>
        </animated.div>
    </div>;
}

export default DeleteAlert;