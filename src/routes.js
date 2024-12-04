import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthGuard from './components/AuthGuard';
import ProtectedRoute from './components/ProtectedRoutes';
import Login from './pages/LoginPage';
import SignUp from './pages/SignUpPage';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Account from './pages/Account';
import EditProfile from './pages/EditProfile';
import PostAd from './pages/PostAd';

const AppRoutes = () => (
  <main className="flex-grow w-full overflow-x-hidden">
    <Routes>
      {/* Public Routes with AuthGuard */}
      <Route
        path="/"
        element={
          <AuthGuard>
            <Login />
          </AuthGuard>
        }
      />
      <Route
        path="/register"
        element={
          <AuthGuard>
            <SignUp />
          </AuthGuard>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/manage/account"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      />
      <Route
        path="/manage/profile"
        element={
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/manage/posts"
        element={
          <ProtectedRoute>
            <PostAd />
          </ProtectedRoute>
        }
      />

      {/* Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default AppRoutes;
