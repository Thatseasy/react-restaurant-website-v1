import styled from 'styled-components';

export const MenuContainer = styled.div`
${'' /* display: flex;
justify-content: center;
align-items: center;
flex-direction: column; */}

background-color: #150f0f;
color: #fff;

`;

export const MenuTitle = styled.div`
display: flex;
height: 200px;
justify-content: center;
align-items: center;
font-weight: 700;
font-size: 48px;
`;

export const MenuSubtitle = styled.div`
display: flex;
height: 130px;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 36px;
`;

export const MenuGridContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const MenuGrid = styled.div`
display: grid;
height: 800px;
align-items: center;
justify-content: center;
grid-template-rows: repeat(9, 1fr);
grid-gap: 1rem;

@media (min-width: 1200px) {
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(5, 1fr);
}

`;

export const MenuGrid2 = styled.div`
display: grid;
height: 1400px;
align-items: center;
justify-content: center;
grid-template-rows: repeat(14, 1fr);
grid-gap: 1rem;

@media (min-width: 1200px) {
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(7, 1fr);
}

`;

export const MenuChild = styled.div`
/* box layout*/
background: transparent;
width: 500px;
height:60px;
box-shadow: 2px 3px #e9ba23;
/* grid layout*/
display: grid;
grid-template-areas: "name price" "description price"


`;

export const MenuName = styled.div`
grid-area: name;
display: flex;
padding-left: 20px;
font-size: 24px;
`;

export const MenuDescription = styled.div`
grid-area: description;
display: flex;
padding-left: 20px;
font-size: 14px;
`;

export const MenuPrice = styled.div`
grid-area: price;
display: flex;
padding-right: 20px;
justify-content: flex-end;
align-items: center;
`;