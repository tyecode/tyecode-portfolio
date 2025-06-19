import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';

import { generateManifest } from '@/config/meta-tags';

import App from './App';

export function render(_url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </StrictMode>
  );

  const { helmet } = helmetContext;

  return {
    html,
    head: helmet
      ? [
          helmet.title.toString(),
          helmet.meta.toString(),
          helmet.link.toString(),
          helmet.script.toString(),
        ].join('\n')
      : '',
  };
}

// Export generateManifest for the dynamic manifest route
export { generateManifest };
