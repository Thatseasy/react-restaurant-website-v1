import styled from 'styled-components';

export const ContactContainer = styled.div`
min-height: 50vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fdc500;
  color: black;
`;


export const ContactWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center; 
`;

export const ContactGrid = styled.div`
max-width: 1200px;
display: grid;
width: 80%;

@media (max-width: 2400px) {
grid-template-columns: 10% 40% 50% ;
grid-template-areas: 'a b c';
gap: 20px;
}
@media (max-width: 900px) {
max-width: 900px;
grid-template-columns: 1fr;
grid-template-rows: 1fr 1fr;
grid-template-areas: 
'a b'
'c c';  
gap: 20px;
}
`;



export const GridWrapper = styled.div`
display: flex;
height: 100%;
justify-content: center;
align-items: center;

@media (max-width: 900px) {
justify-content: flex-start;
}
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
align-items: center;
`;

export const ContactInfoTitle = styled.h2`
font-weight: 300;
`;

export const GridWrapperTitle = styled.div`
display: flex;
height: 100%;
justify-content: center;
align-items: center;

@media (max-width: 900px) {
justify-content: flex-start;
}
`;

export const ContactInfoText = styled.p`

`;

export const InfoGrid = styled.div`
display: grid;
height: 100%;
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


export const ContactInput = styled.input`
border: 0px;
box-shadow: 3px 2.3px  black;
`;

export const ContactTextfield = styled.textarea`
width: 100%;
height: 100px;
border: 0px;
box-shadow: 3px 2.3px  black;
`;

export const ContactSend = styled.input`
margin-top: 4px;
width: 50%;
height: 30px;
background-color: #e31837;
color: white;
border: none;

`;

export const CenterWrap = styled.div`
display: flex;
justify-content: center;
`;