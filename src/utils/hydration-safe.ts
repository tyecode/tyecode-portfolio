import { useState, useEffect } from 'react';

// Utility functions to prevent hydration errors

/**
 * Safe client-side only execution
 * Use this for any code that should only run on the client side
 */
export const clientOnly = (fn: () => void) => {
  if (typeof window !== 'undefined') {
    fn();
  }
};

/**
 * Safe date rendering hook
 * Returns null on server, actual date on client
 */
export const useClientDate = () => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  return date;
};

/**
 * Safe random number generation for SSR
 * Returns consistent seed on server, random on client
 */
export const useSafeRandom = (seed = 0.5) => {
  const [random, setRandom] = useState(seed);

  useEffect(() => {
    setRandom(Math.random());
  }, []);

  return random;
};

/**
 * Check if code is running on client side
 */
export const isClient = () => typeof window !== 'undefined';

/**
 * Check if code is running on server side
 */
export const isServer = () => typeof window === 'undefined';
