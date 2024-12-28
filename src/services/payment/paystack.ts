import { config } from '../../config/env';
import type { PaymentDetails } from '../../types/payment';

const PAYSTACK_SECRET_KEY = config.paystack.secretKey;
const AMOUNT_IN_PESEWAS = 2000; // GHS 20.00 in pesewas

export async function initializePayment(email: string): Promise<string> {
  try {
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: AMOUNT_IN_PESEWAS,
        currency: 'GHS',
        callback_url: `${window.location.origin}/payment/verify`,
        channels: ['card', 'mobile_money'],
      }),
    });

    const result = await response.json();
    
    if (!result.status) {
      throw new Error(result.message);
    }

    return result.data.authorization_url;
  } catch (error) {
    console.error('Payment initialization failed:', error);
    throw new Error('Failed to initialize payment');
  }
}