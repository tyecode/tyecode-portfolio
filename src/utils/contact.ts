import { ContactFormData } from '@/components/ui/ContactForm';

export interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export const submitContactForm = async (
  data: ContactFormData
): Promise<ContactResponse> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send message');
    }

    return result;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
