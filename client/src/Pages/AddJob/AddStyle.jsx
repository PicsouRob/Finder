import styled from 'styled-components';

export const AddWrapper = styled.div`
    margin: 0px ${(props) => props.width < 576 ? 20 : 0}px;
`;

export const RightContent = styled.div`
    width: ${(props) => props.width < 576 ? "100%" : "60%"};
    height: 100%;
    background: #e7ebee;
    padding: 30px 30px;
    margin-top: -100px;
    margin-bottom: 30px;
    z-index: 10;
    border-radius: 5px;
`;

export const Round = styled.div`
    width:350px;
    height: 350px;
    background: #ff7a59;
    border-radius: 50%;
`;

export const Button = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    font-size: 14px;
    background: #ff7a59;
    border-radius: 5px;
    margin: 20px 0;
    font-weight: 600;
    color: #fff;
    &:hover {
        background: #31C6AE;
        opacity: 0.9;
        cursor: pointer;
    }
`;

export const Select = styled.select`
    width: 100%;
    height: 45px;
    border: none;
    background: #fff;
    margin-bottom: 10px;
    border-radius: 5px;
    color: grey;
    padding: 0 8px;
`;