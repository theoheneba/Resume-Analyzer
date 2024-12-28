// Authentication
export const AUTH_REDIRECT_URL = `${window.location.origin}/dashboard`;

// Payment
export const CURRENCY = {
  code: 'GHS',
  symbol: 'GHS',
  name: 'Ghanaian Cedi'
} as const;

export const PAYMENT_AMOUNT = {
  value: 20.00,
  pesewas: 2000
} as const;