import { useState } from 'react';
import { initializePayment, verifyPayment } from '../services/payment';
import type { PaymentStatus } from '../types/payment';

export function usePayment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<PaymentStatus | null>(null);

  const startPayment = async (email: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const paymentUrl = await initializePayment(email);
      window.location.href = paymentUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  const checkPaymentStatus = async (reference: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await verifyPayment(reference);
      setStatus(result);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment verification failed');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    status,
    startPayment,
    checkPaymentStatus
  };
}