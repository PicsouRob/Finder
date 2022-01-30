import React from 'react';
import { animated, useSpring } from 'react-spring';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DropDownUp(props) {
    const { dropdown, setDropdown, user } = props;
    const { name, email, _id, image } = user;
    const navigate = useNavigate();

    const userDeconnected = async () => {
        await axios.get('/api/logout')
            .then(async () => {
                setDropdown(false);
                await navigate('/');
                await window.location.reload();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            })
            .catch((err) => console.log(err));
    }

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: dropdown ? 1 : 0,
        transform: dropdown ? 'translateY(0%)' : 'translateY(-100%)',
    });

    return <div>
        {dropdown && (
            <animated.div class="absolute top-20 right-6 md:right-8 bg-white rounded-lg shadow-lg py-4 z-30 cursor-default"
                style={animation}
            >
                <div class="flex flex-col gap-y-3">
                    <div class="grid place-items-center px-8 md:px-10">
                        <img alt="" class="h-16 w-16 rounded-full shadow-sm" src={image} />
                        <span class="font-medium">{name}</span>
                        <p>{email}</p>
                        <Link to={`/api/user/${_id}`}
                            state={_id}
                            class="border rounded-full px-3 py-1 mt-2 hover:bg-gray-300"
                        ><p>Mon Profile</p>
                        </Link>
                    </div>
                    <div class="py-1">
                        <hr class="border" />
                        <Link to="/api/job/add" state={user}
                            class="flex items-center py-2 px-3 gap-x-4 font-medium hover:text-gray-500  hover:bg-gray-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                            <p class="">Ajouter Carrière</p>
                        </Link>
                        <hr class="border" />
                    </div>
                    <div class="grid place-items-center"
                        onClick={() => userDeconnected()}
                    >
                        <button class="py-2 text-base cursor-pointer border rounded-lg px-4 hover:bg-gray-300">
                            <p>Se déconnecter</p>
                        </button>
                    </div>
                </div>
            </animated.div>
        )}
    </div>;
}

export default DropDownUp;