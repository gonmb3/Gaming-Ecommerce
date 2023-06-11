import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({children}) => {
  const {currentUser} = useAuth();

 

  return (
    currentUser ? children : <Navigate to="/registrate"/>
  )
}

export default ProtectedRoute