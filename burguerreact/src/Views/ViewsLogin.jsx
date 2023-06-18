// En ViewsLogin.jsx

// En ViewsLogin.jsx

import React from 'react';
import './ViewsLogin.css';
import FormLogin from '../components/FormLogin/FormLogin';
import ButtonLogin from '../components/ButtonLogin/ButtonLogin';

const ViewsLogin = () => {
  return (
    <div className="login-container">
      <div className="background-image">
      <div className="login-header">
        <h1 id='Title'>Burguer Queen</h1>
        <h2>¡Sonrie con cada mordisco!</h2>
      </div>
      {/* <div className="login-content"> */}
        <FormLogin />
        <ButtonLogin />
      </div>
    </div>
  );
}

export default ViewsLogin;
