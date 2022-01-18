import styled from 'styled-components';

export const Undraw = styled.div`
    width: 100%;
    height: 180px;
    background: #0e1e25;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

export const ProfilInfo = styled.div`
    background: #fff;
    margin: -130px 0 30px 0px;
    padding: 30px 20px;
    border-radius: 10px;
`;

export const PhotoProfil = styled.img`
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 50px;
    margin-bottom: 8px;
`;

export const UpdateButton = styled.button`
    background: #31C6AE;
    padding: 10px 60px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 15px;
    &:hover {
        background: #ff7a59;
        cursor: pointer;
    }
`;

export const Text = styled.p`
    font-size: 12px;
    color: gray;
    ${(props) => props.$email && `
        font-size: 15px;
        color: #33475b;
        font-weight: 500;
        margin-top: 5px;
        margin-bottom: 10px;
        cursor: pointer;
    `}
`;

export const CreateButton = styled.button`
    background: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    font-weight: 600;
    &:hover {
        background: #ff7a59;
        color: #fff;
        cursor: pointer;
        border: 1px solid #fff;
    }
`;

export const CreateIcon = styled.div`
    background: rgba(49, 198, 174, 0.2);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 45px;
    margin-bottom: 15px;
`;

export const ProfilStuff = styled.div`
    padding: 20px;
    background: #fff;
    border-radius: 10px;
`;

export const ProfilContaint = styled.div`
    padding: 30px ${(props) => props.width < 576 ? "20px" : "60px"};
`;

export const StuffEmpty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
`;

export const ImageEmpty = styled.img`
    width: 190px; 
    height: 190px; 
    margin-bottom: ${(props) => props.width > 765 ? "0" : "40"}px;
`;

export const Stuff = styled.div`
    height: 120px;
    background: #fff;
    border-radius: 5px;
    padding: 0 20px;
    margin-bottom: 15px;
    line-height: 2px;
    &:hover {
        cursor: pointer;
        color: #fff;
    }
`;

export const Image = styled.img`
    width: ${(props) => props.width < 576 ? 90 : 140}px;
    height: 90px;
    border-radius: 5px;
`;

export const TextStuff = styled.h5`
    color: #1c1f21;
    margin: 0px 0 5px 0;
`;

export const Desc = styled.p`
    color: #33475b;
    font-size: ${(props) => props.$date ? 10 : 14}px;
`;

export const StuffHeader = styled.div`
    height: 40px;
    margin-bottom: 15px;
`;

export const DeconnectButton = styled.p`
    margin: 10px 5px;
    padding: 10px 5px;
    background: none;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    &:hover {
        background: #ff7a59;
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
    }
`;

export const SocialLink = styled.a`
    text-decoration: none;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    padding: 10px 0;
    margin: 10px 0;
    &:hover {
        color: #ff7a59;
    }
`;

export const Input = styled.input`
    display: none;
`;