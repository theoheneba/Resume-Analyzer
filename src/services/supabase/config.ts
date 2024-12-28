import { createClient } from '@supabase/supabase-js';
import { config } from '../../config/env';
import type { Database } from './types';

export function createSupabaseClient() {
  return createClient<Database>(
    config.supabase.url,
    config.supabase.anonKey
  );
}