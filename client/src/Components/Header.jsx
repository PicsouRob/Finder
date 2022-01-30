import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import profil from '../Images/profil.svg';
import { useLocalStorage } from '../Utils/helpers';
import { menu } from '../Utils/data';
import LogoLink from './Logo';
import MenuBurger from './Menu';
import { useScrollToTop } from '../Utils/checkScrollToTop';

function Header({ user }) {
    console.log(user);
    const [store, setValue] = useLocalStorage('user', '');
    const history = useNavigate();
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const { showScroll } = useScrollToTop();

    return (
        <div class={`${showScroll ? "fixed shadow-lg" : "relative"} w-full py-3 bg-white z-20`} id="outer-container">
            <div class="flex items-center justify-between max-w-7xl px-6 mx-auto lg:px-8">
                <LogoLink />
                <div class="flex gap-x-8 md:gap-x-16 items-center">
                    <div class="hidden md:flex md:gap-x-8">
                        {menu.map(({ title, to, state }, index) => (
                            <Link to={to} state={{ value: '', location: 'Ville' }}
                            // class="cursor-pointer"
                            // activeStyle={{ color: "#ff7a59" }}
                            // key={index}
                            >
                                <span class="transition text-black font-sans hover:text-red-900">{title}</span>
                            </Link>
                        ))}
                    </div>
                    {user ? (
                        <div
                            class="cursor-pointer hover:opacity-80 rounded-full"
                        >
                            <Link to={`/api/user/${user._id}`}
                                state={user._id}
                            >
                                {user.image ? <img src={user.image ? user.image : profil}
                                    alt="" class="w-8 h-8 rounded-full"
                                /> : <div class="w-8 h-8 bg-black text-white rounded-full uppercase font-bold flex items-center justify-center">
                                    {user.name.substring(0, 1)}
                                </div>}
                            </Link>
                        </div>
                    ) : (
                        <div class="flex gap-x-0 md:gap-x-6 font-sans">
                            <Link to="/auth/login"
                                class="p-2 border-1 rounded-md"
                            >Se Connecter</Link>
                            <Link to="auth/register"
                                class="hidden md:block p-2 border-1 rounded-md"
                            >S'inscrire</Link>
                        </div>
                    )}
                    <MenuBurger />
                </div>
                {/* {dropdown && <DropDown width={width}>
                    <ProfilLink to={{
                        pathname: "/api/job/add",
                        state: { user: user }
                    }}>Ajouter compétence</ProfilLink>
                    <ProfilLink to={{
                        pathname: `/api/user/${user._id}`,
                        state: { userData: user._id, isMyProfil: true }
                    }}>Profile</ProfilLink>
                    <SignOut onClick={() => userDeconnected()}>Se deconnecter</SignOut>
                </DropDown>} */}
            </div>
        </div>
    )
}

const mapStateToProps = ({ user }) => {
    return { user };
}

export default connect(mapStateToProps)(Header);