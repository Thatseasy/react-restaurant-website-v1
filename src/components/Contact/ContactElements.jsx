import styled from 'styled-components';

export const ContactContainer = styled.div`
min-height: 50vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;


export const ContactWrapper = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: center;
align-items: center; 
`;

export const ContactGrid = styled.div`
display: grid;
width: 80%;
grid-template-columns: 10% 40% 40% 10%;
grid-template-areas: "a b c d";
gap: 20px;
`;

export const GridWrapper = styled.div`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
`;

export const ContactGridB = styled.div`
grid-area: b;
`;

export const ContactGridA = styled.div`
grid-area: a;
`;

export const ContactGridC = styled.div` 
grid-area: c;
`;

export const ContactGridD = styled.div` 
grid-area: d;
`;

export const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-end;
`;

export const ContactInfoTitle = styled.h2`
font-weight: 300;
`;

export const GridWrapperTitle = styled.div`
display: flex;
height: 100%;
justify-content: flex-end;
align-items: center;
`;

export const ContactInfoText = styled.p`

`;

export const InfoGrid = styled.div`
display: grid;

grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-template-areas: 
"Address AddressInfo"
"Telephone TelephoneInfo"
"Mail MailInfo"
"Open OpenInfo";
row-gap: 20px;

`;

export const InfroGridAddress = styled.div`
`;
