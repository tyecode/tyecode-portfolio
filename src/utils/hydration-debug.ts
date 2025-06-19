/**
 * Hydration debugging utilities
 * Use these to help identify hydration mismatches in development
 */

/**
 * Enable detailed hydration error logging in development
 */
export const enableHydrationDebug = () => {
  if (process.env.NODE_ENV !== 'development') return;

  // Override console.error to catch hydration errors
  const originalError = console.error;
  console.error = (...args) => {
    const message = args.join(' ');

    if (
      message.includes('Hydration failed') ||
      message.includes('Minified React error #418')
    ) {
      console.warn('🔥 Hydration Error Detected');
      console.error('Original error:', ...args);
      console.warn('This is likely caused by:');
      console.warn('1. Server/client date/time differences');
      console.warn('2. Browser extensions modifying DOM');
      console.warn('3. Conditional rendering based on client-only values');
      console.warn(
        '4. Invalid HTML nesting (buttons in buttons, links in links)'
      );

      // Log current hydration state
      const root = document.getElementById('root');
      if (root) {
        console.warn('Root element content length:', root.innerHTML.length);
        console.warn(
          'Root element first 200 chars:',
          root.innerHTML.substring(0, 200)
        );
      }

      console.warn('--- End Hydration Error Debug ---');
    }

    originalError.apply(console, args);
  };
};

/**
 * Compare server and client rendered content
 */
export const compareSSRContent = () => {
  if (typeof window === 'undefined') return;

  const serverHTML = document.getElementById('root')?.innerHTML || '';

  // Store server HTML for comparison
  sessionStorage.setItem('ssr-html', serverHTML);

  setTimeout(() => {
    const clientHTML = document.getElementById('root')?.innerHTML || '';
    const serverStoredHTML = sessionStorage.getItem('ssr-html') || '';

    if (serverStoredHTML !== clientHTML) {
      console.warn('SSR/Client HTML mismatch detected');
      console.warn('Server length:', serverStoredHTML.length);
      console.warn('Client length:', clientHTML.length);

      // Find first difference
      for (
        let i = 0;
        i < Math.max(serverStoredHTML.length, clientHTML.length);
        i++
      ) {
        if (serverStoredHTML[i] !== clientHTML[i]) {
          console.warn('First difference at position:', i);
          console.warn('Server char:', serverStoredHTML[i] || 'undefined');
          console.warn('Client char:', clientHTML[i] || 'undefined');
          console.warn(
            'Context:',
            serverStoredHTML.substring(Math.max(0, i - 50), i + 50)
          );
          break;
        }
      }
    }
  }, 100);
};

/**
 * Check for common hydration issues
 */
export const checkHydrationIssues = () => {
  if (typeof window === 'undefined') return;

  const issues: string[] = [];

  // Check for nested interactive elements
  const buttons = document.querySelectorAll('button');
  const links = document.querySelectorAll('a');

  buttons.forEach(button => {
    if (button.querySelector('button')) {
      issues.push('Nested button elements detected');
    }
    if (button.querySelector('a')) {
      issues.push('Link inside button detected');
    }
  });

  links.forEach(link => {
    if (link.querySelector('a')) {
      issues.push('Nested link elements detected');
    }
    if (link.querySelector('button')) {
      issues.push('Button inside link detected');
    }
  });

  // Check for dynamic dates
  const textContent = document.body.textContent || '';
  const currentYear = new Date().getFullYear();
  if (textContent.includes(currentYear.toString())) {
    issues.push(
      'Current year found in content - potential date hydration issue'
    );
  }

  if (issues.length > 0) {
    console.warn('Potential hydration issues found:');
    issues.forEach(issue => console.warn('- ' + issue));
  } else {
    console.warn('No obvious hydration issues detected');
  }
};
