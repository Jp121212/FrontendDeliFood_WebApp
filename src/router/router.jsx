import Home from '../pages/home/Home';
import Login from '../pages/auth/Login';

export const unprotectedRoutes = [
  {
    path: '/login',
    element: <Login />
  }
];

export const protectedRoutes = [
  {
    path: '/',
    element: <Home />
  }
];
