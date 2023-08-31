import Home from '../pages/home/Home';
import Login from '../pages/auth/Login';
import Welcome from '../pages/Welcome/Welcome';
import Register from '../pages/auth/Register';

export const unprotectedRoutes = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/register',
    element: <Register />
  }
];

export const protectedRoutes = [
  {
    path: '/home',
    element: <Home />
  }
];
