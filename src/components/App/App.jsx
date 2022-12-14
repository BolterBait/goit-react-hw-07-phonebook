import { React } from 'react';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Loader } from 'components/Loader/Loader';

import HomePage from 'pages/Home';
import RegisterPage from 'pages/Register';
import LoginPage from 'pages/Login';
import { Layout } from 'components/Layout/Layout';
import Contacts from 'pages/Contacts';
// const HomePage = lazy(() => import('../../pages/Home'));
// const RegisterPage = lazy(() => import('../../pages/Register'));
// const LoginPage = lazy(() => import('../../pages/Login'));
// const Layout = lazy(() => import('components/Layout/Layout'));
// const Contacts = lazy(() => import('../../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/login"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Suspense>
  );
}
