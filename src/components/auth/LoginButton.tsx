import React from 'react';
import { LogIn } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export function LoginButton() {
  const { signIn, error } = useAuth();

  return (
    <div>
      <button
        onClick={signIn}
        className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 rounded-md text-sm font-medium"
      >
        <LogIn className="w-4 h-4" />
        <span>Login</span>
      </button>
      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
}