import styled from 'styled-components';

export const ContactContainer = styled.div`

min-height: 50vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;


export const ContactWrapper = styled.div`

display: flex;
justify-content: center;
align-items: center; 

`;

export const ContactGrid = styled.div`

display: grid;
grid-template-columns: 20% 20% 20%;
grid-template-areas: "a b c"

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