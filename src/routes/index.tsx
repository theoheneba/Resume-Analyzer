import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';
import AdminDashboard from '../pages/AdminDashboard';
import HistoryPage from '../pages/HistoryPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'history', element: <HistoryPage /> },
      { path: 'admin', element: <AdminDashboard /> },
    ],
  },
]);