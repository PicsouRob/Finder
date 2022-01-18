import React, { useCallback, useEffect, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

import { ModalBackground, Icon } from '../Job/ModalStyle.jsx';
import { Button, Select } from '../AddJob/AddStyle.jsx';
import { useWidth } from '../../Utils/width';
import { city, useLocalStorage, updateUser } from '../../Utils/helpers';

function Update(props) {
    const { modalShow, setModalShow } = props;
    const [store, setValue] = useLocalStorage('user', {
        user: {}, token: '', isLogged: false
    });
    const { user } = store;
    const { width } = useWidth();
    const modalRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [website, setWebsite] = useState(user.website);
    const [selectCity, setSelectCity] = useState(user.location);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [desc, setDesc] = useState(user.description);
    const [facebookName, setFacebookName] = useState(user.facebook);
    const [instagramName, setInstagramName] = useState(user.instagram);

    const handleCloseModal = (e) => {
        if (modalRef.current === e.target) {
            setModalShow(false);
        }
    }

    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && modalShow) {
                setModalShow(false);
            }
        },
        [setModalShow, modalShow],
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: modalShow ? 1 : 0,
        transform: modalShow ? 'translateY(0%)' : 'translateY(-100%)',
    });

    const handleSubmit = async () => {
        var formData = await new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('description', desc);
        formData.append('location', selectCity);
        formData.append('email', email);
        formData.append('facebook', facebookName);
        formData.append('instagram', instagramName);
        formData.append('website', website);
        formData.append('image', undefined)
        setIsLoading(true);

        updateUser(user._id, setValue, formData)
        .then(res => {
            setIsLoading(false);
            setModalShow(false);
        }).catch(err => {
            setIsLoading(false);
            console.log(err); 
        });
    }

    return (
        <div>
            {modalShow ? (
                <ModalBackground ref={modalRef} onClick={(e) => handleCloseModal(e)}>
                    <animated.div style={animation}>
                        <Icon size={25} onClick={() => setModalShow(!modalShow)} />
                    </animated.div>
                    <div className="center_2">
                        <ModalWrapper width={width}>
                            <h2 className="margin_0">Remplissez le formulaire</h2>
                            <p style={{ margin: "10px 0 20px 0" }}>Veillez modifier vos données personnelles nécessaire pour modifier votre profil.</p>
                            <label>Nom et Prenom</label>
                            <input value={name} placeholder="Nom & Prenom" type="text" onChange={(e) => setName(e.target.value)} />
                            <label>Courrier électronique</label>
                            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <label>Adresse | Ville</label>
                            <Select onChange={(e) => setSelectCity(e.target.value)}>
                                <option value="Ville" selected>Ville</option>
                                {city.map((item, index) => (
                                    <option key={index} value={item} selected={selectCity === item ? true : false}>{item}</option>
                                ))}
                            </Select>
                            <label>No telephone</label>
                            <input type="number" value={phone} placeholder="Numero de téléphone" onChange={(e) => setPhone(e.target.value)} />
                            <label>Biographie</label>
                            <input type="text" value={desc} placeholder="Biographie" onChange={(e) => setDesc(e.target.value)} />
                            <label>Website Url</label>
                            <input type="text" value={website} placeholder="Votre site web" onChange={(e) => setWebsite(e.target.value)} />
                            <label>Nom d'instagram profil</label>
                            <input type="text" value={instagramName} placeholder="Nom d'instagram profil" onChange={(e) => setInstagramName(e.target.value)} />
                            <label>Nom de facebook profil</label>
                            <input type="text" value={facebookName} placeholder="Nom facebook profil" onChange={(e) => setFacebookName(e.target.value)} />
                            <Button onClick={() => handleSubmit()}>
                                {isLoading && <i className="fa fa-spinner fa-spin"></i>}
                                Modifier mon profil
                            </Button>
                        </ModalWrapper>
                    </div>
                </ModalBackground>
            ) : null}
        </div>
    )
}

const ModalWrapper = styled.div`
    width: 100%;
    margin: 70px ${(props) => props.width > 576 ? 200 : 20}px;
    background: #f7f9fb;
    border-radius: 5px;
    padding: 30px 20px;
    margin-bottom: 80px;
`;

export default Update;