import styled from "styled-components";

export const HelpWrapper = styled.div`
    background: #f7f9fb;
`;

export const HeaderBack = styled.div`
    width: 100%;
    height: 180px;
    background: #0e1e25;
    padding-top: 10px;
`;

export const Container = styled.div`
    width: ${(props) => props.width < 576 ? 90 : 70}%;
    background: #fff;
    margin: -70px 0 30px 0;
    padding: 10px 20px;
    border-radius: 5px;
`;

// export const Container = styled.div`

// `;
// export const Container = styled.div`

// `;