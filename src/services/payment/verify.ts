import { config } from '../../config/env';
import type { PaymentStatus } from '../../types/payment';

export async function verifyPayment(reference: string): Promise<PaymentStatus> {
  try {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${config.paystack.secretKey}`,
      },
    });

    const result = await response.json();
    
    if (!result.status) {
      throw new Error(result.message);
    }

    return {
      status: result.data.status,
      reference: result.data.reference,
      amount: result.data.amount / 100, // Convert from kobo to naira
      email: result.data.customer.email
    };
  } catch (error) {
    console.error('Payment verification failed:', error);
    throw new Error('Failed to verify payment');
  }
}