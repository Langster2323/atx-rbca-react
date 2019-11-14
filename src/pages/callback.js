import React from 'react';
import { Redirect } from 'react-router-dom';

import { AuthConsumer } from '../authContext';

const Callback = props => {
  return (
    <AuthConsumer>
      {({handleAuthentication}) => {
        if (/access_token|id_token|error/.test(props.location.hash)) {
          handleAuthentication();
        }
        return <Redirect to="/" />;
      }}
    </AuthConsumer>
  )
}

export default Callback;
