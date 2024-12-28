export interface PaymentStatus {
  status: 'success' | 'failed' | 'pending';
  reference: string;
  amount: number;
  email: string;
}

export interface PaystackResponse {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}