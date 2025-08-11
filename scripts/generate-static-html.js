/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render } from '../dist/server/entry-server.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateStaticHTML = async () => {
  try {
    console.log('🔄 Generating static HTML with meta tags...');

    // Render the app server-side to get HTML and head tags
    const { _html, head } = await render('/');

    // Read the base HTML template
    const baseHtmlPath = path.resolve(__dirname, '../dist/client/index.html');
    const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

    // Find the position to insert head tags (after <head> tag)
    const headTagIndex = baseHtml.indexOf('<head>');
    if (headTagIndex === -1) {
      throw new Error('Could not find <head> tag in base HTML');
    }

    // Insert the head tags after <head>
    const insertPosition = headTagIndex + '<head>'.length;
    const beforeHead = baseHtml.slice(0, insertPosition);
    const afterHead = baseHtml.slice(insertPosition);

    const updatedHtml = beforeHead + '\n  ' + head + afterHead;

    // Write the updated HTML back
    fs.writeFileSync(baseHtmlPath, updatedHtml);

    console.log('✅ Successfully generated static HTML with meta tags');
    // console.log('📝 Head tags inserted:', head);
  } catch (error) {
    console.error('❌ Error generating static HTML:', error);
    process.exit(1);
  }
};

// Run the generator
generateStaticHTML();
