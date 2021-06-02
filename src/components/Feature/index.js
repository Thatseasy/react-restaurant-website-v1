import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Steak of the Day</h1>
      <p>Steak with Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton>Reservation</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
