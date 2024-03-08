import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingAnimation = () => {
  return (
    <div className="loader-container">
      <ClipLoader color="#36D7B7" loading={true} size={15} />
      <p>Carregando...</p>
    </div>
  );
};

export default LoadingAnimation;