import styled from 'styled-components';

export const HomeWrapper = styled.div`
    height: ${(props) => props.width < 576 ? window.innerHeight - 60 : window.innerHeight - 80}px;
    background: #e7ebee;
    padding: 0 ${(props) => props.width < 1200 ? "20" : "120"}px;
    display: flex;
    align-items: center;
`;

export const InputContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 53px;
    background: #fff;
    border-radius: 5px;
    color: #33475b;
    padding-right: 10px;
`; 

export const Input = styled.input`
    width: ${(props) => props.width < 576 ? 130 : 220}px;
    outline: none;
    border: none;
    font-size: 13px;
    font-weight: 600;
    color: #33475b;
`; 

export const Select = styled.select`
    width: 120px;
    border: none;
    background: #fff;
    font-weight: 600;
    font-size: 12px;
    color: #33475b;
`; 

export const ButtonSearch = styled.button`
    padding: 10px 5px;
    height: 45px,
    border: none;
    background: #31C6AE;
    border-radius: 5px;
    font-weight: 600;
    color: #fff;
    font-size: 14px;
    &:hover {
        opacity: 0.9;
        cursor: pointer;
        background: #ff7a59;
    }
`; 

export const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
`;