import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { useState } from 'react';
import { ROLES } from '../constants/index';

const Router = () => {
  const [role] = useState(ROLES.GUEST); // admin, users, guest
  const router = useRoutes(routes); // Pass the role parameter to the routes function
  return router;
};

export default Router;