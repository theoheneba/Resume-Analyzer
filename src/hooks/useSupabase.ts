import { useState, useEffect } from 'react';
import { supabase } from '../services/supabase/client';
import { supabaseConfig } from '../services/supabase/config';

export function useSupabase() {
  const [isConnected, setIsConnected] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    async function checkConnection() {
      if (!supabaseConfig.isConfigured) {
        setIsConnected(false);
        setIsChecking(false);
        return;
      }

      try {
        const { error } = await supabase?.from('users').select('count').single() || {};
        setIsConnected(!error);
      } catch {
        setIsConnected(false);
      } finally {
        setIsChecking(false);
      }
    }

    checkConnection();
  }, []);

  return {
    isConnected,
    isChecking,
    isConfigured: supabaseConfig.isConfigured
  };
}