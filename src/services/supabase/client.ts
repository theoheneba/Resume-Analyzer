import { createSupabaseClient } from './config';

class SupabaseService {
  private static instance = createSupabaseClient();

  static getClient() {
    return this.instance;
  }
}

export const supabase = SupabaseService.getClient();