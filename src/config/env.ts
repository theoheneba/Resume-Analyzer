function getEnvVar(name: string): string {
  return import.meta.env[name] || '';
}

export const config = {
  openai: {
    apiKey: getEnvVar('VITE_OPENAI_API_KEY')
  },
  supabase: {
    url: getEnvVar('VITE_SUPABASE_URL'),
    anonKey: getEnvVar('VITE_SUPABASE_ANON_KEY')
  },
  paystack: {
    publicKey: getEnvVar('VITE_PAYSTACK_PUBLIC_KEY'),
    secretKey: getEnvVar('VITE_PAYSTACK_SECRET_KEY')
  }
} as const;