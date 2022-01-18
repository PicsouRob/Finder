import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import img from '../Images/found.svg';
import { useWidth } from '../Utils/width';
import Footer from './Footer';
import Header from './Header';

function NotFound() {
    const { width } = useWidth();

    return (
        <div>
            <Header />
            <FoundWrapper width={width}>
                <Images alt="img" src={img} />
                <Text>Peut-être que la page que vous recherchez n'est pas trouvée ou n'a jamais existé.</Text>
                <Button>
                    <LinkText to="/">Retour a la page d'accueil</LinkText>
                </Button>
            </FoundWrapper>
            <Footer />
        </div>
    )
}

const FoundWrapper = styled.div`
    height: ${(props) => props.width < 576 ? window.innerHeight - 60 : window.innerHeight - 80}px;
    padding: 0 ${(props) => props.width < 1200 ? "20" : "120"}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Images = styled.img`
    width: 300px;
    height: 200px;
    margin-bottom: 15px;
    margin-top: -20px;
`;

const Text = styled.p`
    font-size: 13px;
    font-weight: 600;
    text-align: center;
`;

const Button = styled.button`
    margin-top: 30px;
    padding: 15px 15px;
    border: none;
    background: #31C6AE;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    &:hover {
        opacity: 0.9;
        cursor: pointer;
        background: #ff7a59;
    }
`;

const LinkText = styled(Link)`
    text-decoration: none;
    color: #fff;
`;

export default NotFound;
