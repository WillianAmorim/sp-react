import React from 'react';
import { ClipLoader } from 'react-spinners';
import { LoaderContainer } from '../styles/Loader';

const LoadingAnimation = () => {
  return (
    <div className="loader-container">
      <LoaderContainer id='loader'>
        <ClipLoader color="#121D40" loading={true} size={55} />
        <p>Carregando...</p>
      </LoaderContainer>
    </div>
  );
};

export default LoadingAnimation;