import React, { useCallback, useEffect, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

import { ModalBackground, Icon } from '../Job/ModalStyle.jsx';
import { Button, Select } from '../AddJob/AddStyle.jsx';
import { useWidth } from '../../Utils/width';
import { city } from '../../Utils/helpers';

function UpdateJob(props) {
    const { showUpdate, setShowUpdate, data } = props;
    const { width } = useWidth();
    const modalRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [selectCity, setSelectCity] = useState(data.location);
    const [name, setName] = useState(data.nameCreator);
    const [email, setEmail] = useState(data.email);
    const [phone, setPhone] = useState(data.phone);
    const [desc, setDesc] = useState(data.description);
    const [jobName, setJobName] = useState(data.job);
    const [facebookName, setFacebookName] = useState(data.facebookProfil);
    const [instagramName, setInstagramName] = useState(data.instagramProfil);
    const [images, setImages] = useState([]);

    const handleCloseModal = (e) => {
        if (modalRef.current === e.target) {
            setShowUpdate(false);
        }
    }

    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showUpdate) {
                setShowUpdate(false);
            }
        },
        [setShowUpdate, showUpdate],
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showUpdate ? 1 : 0,
        transform: showUpdate ? 'translateY(0%)' : 'translateY(-100%)',
    });

    const handleSubmit = async () => {
        setIsLoading(true);
        var formData = await new FormData();
        formData.append('nameCreator', name);
        formData.append('creatorId', data._id);
        formData.append('phone', phone);
        formData.append('description', desc);
        formData.append('job', jobName);
        formData.append('location', selectCity);
        formData.append('email', email);
        formData.append('facebookProfil', facebookName);
        formData.append('instagramProfil', instagramName);
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
            console.log(images[i], formData);
        }
        
        // axios.put(`/api/job/${data._id}`, formData)
        // .then(res => {
        //     setIsLoading(false);
        //     setShowUpdate(false);
        //     setImages([]);
        // }).catch(err => {
        //     console.log(err);
        //     setIsLoading(false);
        // })
    }

    return (
        <div>
            {showUpdate ? (
                <ModalBackground ref={modalRef} onClick={(e) => handleCloseModal(e)}>
                    <animated.div style={animation}>
                        <Icon size={25} onClick={() => setShowUpdate(!showUpdate)} />
                    </animated.div>
                    <div className="center_2">
                        <ModalWrapper width={width}>
                            <h2 className="margin_0">Remplissez le formulaire</h2>
                            <p style={{ margin: "10px 0 20px 0" }}>Veillez modifier vos données personnelles nécessaire pour modifier votre profil.</p>
                            <form>
                                <label>Nom et Prenom</label>
                                <input value={name} placeholder="Nom & Prenom" type="text" onChange={(e) => setName(e.target.value)} />
                                <label>Courrier électronique</label>
                                <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                <label>Nom de carrière</label>
                                <input type="text" value={jobName} placeholder="Nom de carrière" onChange={(e) => setJobName(e.target.value)} />
                                <label>Adresse | Ville</label>
                                <Select onChange={(e) => setSelectCity(e.target.value)}>
                                    <option value="Ville" selected>Ville</option>
                                    {city.map((item, index) => (
                                        <option key={index} value={item} selected={selectCity === item ? true : false}>{item}</option>
                                    ))}
                                </Select>
                                <label>No telephone</label>
                                <input type="number" value={phone} placeholder="Numero de téléphone" onChange={(e) => setPhone(e.target.value)} />
                                <label>Description</label>
                                <input type="text" value={desc} placeholder="Description" onChange={(e) => setDesc(e.target.value)} />
                                <label>Choisir des images</label>
                                <input type="file" name="images" multiple title="Ajouter des images(plusieurs)" onChange={(e) => setImages(e.target.files)} />
                                <label>Nom d'instagram profil</label>
                                <input type="text" value={instagramName} placeholder="Nom d'instagram profil" onChange={(e) => setInstagramName(e.target.value)} />
                                <label>Nom facebook profil</label>
                                <input type="text" value={facebookName} placeholder="Nom facebook profil" onChange={(e) => setFacebookName(e.target.value)} />
                            </form>
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

export default UpdateJob;