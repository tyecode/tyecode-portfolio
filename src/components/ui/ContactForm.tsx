import React, { useState } from 'react';

import { cn } from '@/utils/cn';
import type {
  ContactFormData,
  ContactFormProps,
  ValidationErrors,
} from '@/types/contact';

// Re-export for backward compatibility
export type { ContactFormData, ContactFormProps, ValidationErrors };

const Button: React.FC<{
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({
  type = 'button',
  variant = 'primary',
  fullWidth = false,
  isLoading = false,
  children,
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses =
    'font-medium py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  const variantClasses =
    variant === 'primary'
      ? 'bg-gray-900 hover:bg-gray-800 text-white'
      : 'border border-gray-300 hover:border-gray-400 text-gray-900';
  const widthClasses = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={onClick}
      className={cn(baseClasses, variantClasses, widthClasses, className)}
      {...props}
    >
      {isLoading && (
        <svg
          className='animate-spin -ml-1 mr-3 h-4 w-4 text-current inline'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  className = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2)
          return 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Please enter a valid email address';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 2)
          return 'Message must be at least 2 characters';
        break;
    }
    return undefined;
  };

  const validateForm = (): ValidationErrors => {
    const newErrors: ValidationErrors = {};

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof ContactFormData]);
      if (error) {
        newErrors[key as keyof ValidationErrors] = error;
      }
    });

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }

    // Reset submit status when user modifies form
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setTouched({
      ...touched,
      [name]: true,
    });

    // Validate field on blur
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = async () => {
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    // Validate all fields
    const newErrors = validateForm();
    setErrors(newErrors);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default form submission behavior
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.warn('Form submitted:', formData);
      }
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTouched({});
      setErrors({});
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldClasses = (fieldName: keyof ValidationErrors) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return cn(
      'w-full px-4 py-3 border rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-transparent transition-all duration-200',
      hasError
        ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
        : 'border-gray-300'
    );
  };

  return (
    <div className={cn('space-y-4', className)}>
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-900 mb-2'
        >
          Name <span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={getFieldClasses('name')}
          placeholder='Your full name'
          required
        />
        {touched.name && errors.name && (
          <div className='mt-1 text-sm text-red-600'>{errors.name}</div>
        )}
        {!touched.name ||
          (!errors.name && (
            <div
              className='mt-1 text-sm text-transparent h-5'
              aria-hidden='true'
            >
              &#8203;
            </div>
          ))}
      </div>

      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-900 mb-2'
        >
          Email <span className='text-red-500'>*</span>
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={getFieldClasses('email')}
          placeholder='your.email@example.com'
          required
        />
        {touched.email && errors.email && (
          <div className='mt-1 text-sm text-red-600'>{errors.email}</div>
        )}
        {!touched.email ||
          (!errors.email && (
            <div
              className='mt-1 text-sm text-transparent h-5'
              aria-hidden='true'
            >
              &#8203;
            </div>
          ))}
      </div>

      <div>
        <label
          htmlFor='message'
          className='block text-sm font-medium text-gray-900 mb-2'
        >
          Message <span className='text-red-500'>*</span>
        </label>
        <textarea
          id='message'
          name='message'
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(getFieldClasses('message'), 'resize-none')}
          placeholder='Tell me about your project or just say hello...'
          required
        />
        {touched.message && errors.message && (
          <div className='mt-1 text-sm text-red-600'>{errors.message}</div>
        )}
        {!touched.message ||
          (!errors.message && (
            <div
              className='mt-1 text-sm text-transparent h-5'
              aria-hidden='true'
            >
              &#8203;
            </div>
          ))}
      </div>

      <div className='min-h-12'>
        {submitStatus === 'success' && (
          <div className='p-4 bg-green-50 border border-green-200 rounded-lg text-green-800'>
            Thank you for your message! I&apos;ll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && Object.keys(errors).length === 0 && (
          <div className='p-4 bg-red-50 border border-red-200 rounded-lg text-red-800'>
            There was an error sending your message. Please try again.
          </div>
        )}
      </div>

      <Button
        type='button'
        variant='primary'
        fullWidth
        isLoading={isSubmitting}
        onClick={handleSubmit}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </div>
  );
};

export default ContactForm;
