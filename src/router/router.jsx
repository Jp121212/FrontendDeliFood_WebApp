import Home from '../pages/home/Home';
import Login from '../pages/auth/Login';
import Welcome from '../pages/Welcome/Welcome';

export const unprotectedRoutes = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Welcome />
  }
];

export const protectedRoutes = [
  {
    path: '/home',
    element: <Home />
  }
];
