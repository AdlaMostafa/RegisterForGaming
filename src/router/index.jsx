import { useRoutes } from 'react-router-dom';

import {routes} from './routes'
import { useState } from 'react';
import { ROLES } from '../constants/index';


const Router = () => {
  const [role] = useState(ROLES.GUEST);//admin , users , guest
  const router = useRoutes(routes(role));
  return router;
};

export default Router;

