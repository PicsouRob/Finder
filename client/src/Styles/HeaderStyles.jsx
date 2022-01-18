import styled, { keyframes } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
    height: ${(props) => props.width < 576 ? 60 : 80}px;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 ${(props) => props.width < 1200 ? "20" : "120"}px;
    box-shadow: 0 0 1px 1px rgba(29,17,51,.04),0 0 3px 2px rgba(9,32,77,.12),0 0 2px -3px rgba(29,17,51,.12);
    z-index: 100;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &.nav-container .active {
        border-bottom: 2px solid #170f45;
        // color: #170f45;
    }
`;

export const StyledLink = styled(NavLink)`
    padding: 10px 25px;
    // color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
    font-size: 14px;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    ${(props) =>
        props.$button &&`
            background: #ff7a59;
            color: #fff;
            font-weight: bold;
            border-radius: 10px;
            &:hover {
                background: #30336b;
            }
        `};
    &:hover {
        color: ${(props) => props.$button ? "#fff" : "#ff7a59"};
    }
`;

export const SignLink = styled(Link)`
    text-decoration: none;
    // color: #33475b;
    border: 1px solid #33475b;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
`;

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
`;

export const RightContent = styled.div`
    display: flex;
    margin-left: 30px;
`;

export const RightMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Profil = styled.div`
    margin-left: 150px;
    cursor: pointer;
`;

export const ProfilImage = styled.img`
    width: 35px;
    height: 35px;
    cursor: pointer;
    border-radius: 50px;
`;

export const HeaderTitle = styled.div`
    display: flex;
    justity-content: space-around;
`;

export const Logo = styled(Link)`
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const SignButton = styled.button`
    border: none;
    background: #30336b;
    // color: #fff;
    font-weight: bold;
    border-radius: 10px;
    padding: 10px 20px;
    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

const animation = keyframes`
    0% {  width: 0%; }
    100% { width: 100%; }
`;

export const Menu = styled.div`
    position: absolute;
    top: ${(props) => props.menu ? 60 : -100}px;
    right: 0;
    display: ${(props) => props.menu ? "flex" : "none"};
    flex-direction: column;
    width: ${(props) => props.menu ? 100 : 0}%;
    height: ${window.innerHeight - 60}px;
    background: #fff;
    padding: 20px 30px;
    z-index: 12;
    animation: ${animation} 0.2s linear;
`;

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
`;

export const MenuItem = styled(NavLink)`
    padding: 10px 0;
    // color: #30336b;
    text-decoration: none;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    &:hover {
        color: #ff7a59;
    }
`;

export const SocialMediaWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DropDown = styled.div`
    position: absolute;
    top: ${(props) => props.width < 576 ? 60 : 80}px;
    right: ${(props) => props.width < 1200 ? "20" : "120"}px;
    display: flex;
    flex-direction: column;
    width: 180px;
    background: #fff;
    padding: 0;
    z-index: 12;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ProfilLink = styled(NavLink)`
    padding: 10px 20px;
    text-decoration: none;
    // color: #000;
    font-size: 13px;
    &:hover {
        background: rgba(0, 0, 0, 0.1);
        cursor: pointer;
        color: rgba(0, 0, 0, 0.7);
    }
`;

export const SignOut = styled.p`
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    padding: 12px 20px;
    // color: #000;
    margin: 0;
    font-size: 14px;
    &:hover {
        background: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;