import { createContext } from 'react';

const authContext = createContext({
  authenticated: false, //To check if authenticated or not
  user: {}, // Store all the user details
  accessToken: "", // accessToken of user for Auth0
  initiateLogin: () => {}, // To start the login process
  handleAuthentication: () => {}, // Handle Auth0 login process
  logout: () => {} // Logout the user
});
