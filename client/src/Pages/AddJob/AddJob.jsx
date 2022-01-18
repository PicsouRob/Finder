import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';

import { AddWrapper, RightContent, 
    Button, Select } from './AddStyle';
import { Undraw } from '../Profil/ProfilStyle';
import { useWidth } from '../../Utils/width';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { city } from '../../Utils/helpers';

function AddJob() {
    const { width } = useWidth();
    const history = useNavigate();
    const location = useLocation();
    const { user } = location.state.user;
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [jobName, setJobName] = useState('');
    const [images, setImages] = useState([]);
    const [cityName, setCityName] = useState(user.location);
    const [phone, setPhone] = useState(user.phone);
    const [desc, setDesc] = useState(user.description);
    const [facebookName, setFacebookName] = useState(user.facebook);
    const [instagramName, setInstagramName] = useState(user.instagram);
    const [error, setError] = useState({
        jobName: '', city: '', phone: '', description: '',
    });

    var formData = new FormData();
    formData.append('creatorId', user._id);
    formData.append('nameCreator', user.name);
    formData.append('job', jobName);
    formData.append('phone', phone);
    formData.append('description', desc);
    formData.append('location', cityName);
    formData.append('email', user.email);
    formData.append('facebookProfil', facebookName);
    formData.append('instagramProfil', instagramName);
    for(let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
    }

    const handleSubmit = () => {
        setIsLoading(true);
        if(!jobName) {
            setIsLoading(false);
            setError({ jobName: "Le nom du votre métier est obligatoire" });
        } else if(!cityName) {
            setIsLoading(false);
            setError({ city: "Le nom du ville est obligatoire" });
        } else if(!phone) {
            setIsLoading(false);
            setError({ phone: "Le numero du téléphone est obligatoire" });
        } else if(!desc) {
            setIsLoading(false);
            setError({ description: "La description est obligatoire" });
        } else if(phone.length < 8) {
            setIsLoading(false);
            setError({ phone: "Le numero du téléphone doit être d'au moins 8 chiffres" });
        } else if(phone.length > 11) {
            setIsLoading(false);
            setError({ phone: "Le numero du téléphone doit être au plus 11 chiffres" });
        } else if(jobName.length < 6) {
            setIsLoading(false);
            setError({ jobName: "Le métier doit être d'au moins 6 caractères" });
        } else {
            setError({ jobName: "", city: "", phone: "", description: "" });

            axios.post(`/api/job/add-job`, formData)
            .then(res => {
                setIsLoading(false);
                history.push({ 
                    pathname: `/api/user/${user._id}`, 
                    state: { userData: user._id, isMyProfil: true } 
                });
                setImages([]);
                console.log(res.data);
            }).catch(err => {
                setIsLoading(false);
                console.log(err);
            });
        }
    }

    return (
        <div style={{ background: "rgba(0, 0, 0, 0.2)" }}>
            <Header />
            <Undraw></Undraw>
            <AddWrapper width={width} className="center_2">
                <RightContent width={width} className="shadow-sm">
                    <h2 className="margin_0">Remplissez le formulaire</h2>
                    <p style={{ margin: "10px 0 20px 0" }}>Veillez entrer vos données personnelles pour commencer à recevoir des offres des clients autour de vous.</p>
                    <form>
                        <label>Nom et Prenom</label>
                        <input value={name} placeholder="Nom & Prenom" type="text" onChange={(e) => setName(e.target.value)} />
                        <label>Courrier électronique</label>
                        <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <label>Nom de votre carrière</label>
                        <input type="text" value={jobName} placeholder="Nom de votre métier" onChange={(e) => setJobName(e.target.value)} />
                        <p style={{ margin: `${error.jobName ? "-15" : 0}px 0 10px 0`, color: "red" }}>{error.jobName}</p>
                        <label>Adresse</label>
                        <Select onChange={(e) => setCityName(e.target.value)}>
                            <option value="Ville">Ville</option>
                            {city.map((item, index) => (
                                <option key={index} value={item} selected={cityName === item ? true : false}>{item}</option>
                            ))}
                        </Select>
                        <p style={{ margin: `${error.city ? "-15" : 0}px 0 10px 0`, color: "red" }}>{error.city}</p>
                        <label>Numero de téléphone</label>
                        <input type="text" value={phone} placeholder="Numero de téléphone" onChange={(e) => setPhone(e.target.value)} />
                        <p style={{ margin: `${error.phone ? "-15" : 0}px 0 10px 0`, color: "red" }}>{error.phone}</p>
                        <label>Description</label>
                        <input type="text" value={desc} placeholder="Description de votre travail" onChange={(e) => setDesc(e.target.value)} />
                        <p style={{ margin: `${error.description ? "-15" : 0}px 0 10px 0`, color: "red" }}>{error.description}</p>
                        <label>Choisir des images</label>
                        <input type="file" name="images" multiple title="Ajouter des images(plusieurs)" onChange={(e) => setImages(e.target.files)} />
                        <label>Nom d'instagram profil</label>
                        <input type="text" value={instagramName} placeholder="Nom d'instagram profil" onChange={(e) => setInstagramName(e.target.value)} />
                        <label>Nom facebook profil</label>
                        <input type="text" value={facebookName} placeholder="Nom facebook profil" onChange={(e) => setFacebookName(e.target.value)} />
                    </form>
                    <Button onClick={() => handleSubmit()}>
                        { isLoading && <i className="fa fa-spinner fa-spin"></i> }
                        Publier
                    </Button>
                </RightContent>
            </AddWrapper>
            <Footer />
        </div>
    )
}

export default AddJob;