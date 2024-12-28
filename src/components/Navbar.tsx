import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, History, LayoutDashboard } from 'lucide-react';
import { LoginButton } from './auth/LoginButton';
import { UserMenu } from './auth/UserMenu';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="font-bold text-xl">Resume Analyzer</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <>
                <Link
                  to="/dashboard"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === '/dashboard'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <div className="flex items-center space-x-1">
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Dashboard</span>
                  </div>
                </Link>

                <Link
                  to="/history"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === '/history'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <div className="flex items-center space-x-1">
                    <History className="w-4 h-4" />
                    <span>History</span>
                  </div>
                </Link>
              </>
            )}

            {user ? <UserMenu /> : <LoginButton />}
          </div>
        </div>
      </div>
    </nav>
  );
}