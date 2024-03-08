import React from 'react';
import { ClipLoader } from 'react-spinners';
import { LoaderContainer } from '../styles/Loader';

const LoadingAnimation = () => {
  return (
    <LoaderContainer className="loader-container">
      <ClipLoader id='loader' color="#121D40" loading={true} size={55} />
      <p>Carregando...</p>
    </LoaderContainer>
  );
};

export default LoadingAnimation;