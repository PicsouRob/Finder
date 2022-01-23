import React from 'react';

import CircleLeftBtn from '../../icons/circle-left.svg';
import CircleRightBtn from '../../icons/circle-right.svg';
import signImages from '../../Images/sign.jpg';

function SignLeft() {
    return (
        <div class="hidden lg:block relative w-full lg:self-start bg-cover bg-no-repeat bg-center min-h-full lg:flex-1"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 85%), rgba(0, 0, 0, 0.8)),url(${signImages})` }}
        >
            <div class="absolute top-64 flex items-center justify-center w-full">
                <div class="max-w-md text-center">
                    <span class="text-3xl font-bold leading-loose text-white">
                        Gérez votre carrière
                    </span>
                    <br />
                    <span class="font-light leading-7 text-white text-[20px]">
                        Utilisez vos compétences pour gagner plus d'emplois.

                        Ou Trouver des Embaucheurs autour de vous pour vos travaux.
                    </span>
                    <div class="flex justify-center items-center pt-8 space-x-6">
                        <button class="rounded-full focus:ring-orange-500 focus">
                            <img src={CircleLeftBtn} alt='left' />
                        </button>
                        <button class="rounded-full focus:ring-orange-500 focus">
                            <img src={CircleRightBtn} alt="right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignLeft;