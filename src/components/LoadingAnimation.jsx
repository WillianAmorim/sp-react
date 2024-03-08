import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingAnimation = () => {
  return (
    <div id='loader' className="loader-container">
      <ClipLoader color="#121D40" loading={true} size={35} />
    </div>
  );
};

export default LoadingAnimation;