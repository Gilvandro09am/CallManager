import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, allowedRoles }) => {
  //const navigate = useNavigate(); // Adicione esta linha
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
    // Ou alternativamente:
    // navigate('/', { replace: true });
    // return null;
  }
  
  return children;
};

// Definição das props (opcional, mas recomendado)
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProtectedRoute;