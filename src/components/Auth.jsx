import { Navigate } from 'react-router-dom';
import { auth, firebase } from '../firebase';

const Auth = ({ children }) => {
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
  if (!auth.currentUser) {
    console.log('NOT LOGGED IN');
    return <Navigate to="/" />;
  }

  return children;
};

export default Auth;
