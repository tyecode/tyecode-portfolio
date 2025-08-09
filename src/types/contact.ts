// Contact form and email related types

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
  className?: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}
