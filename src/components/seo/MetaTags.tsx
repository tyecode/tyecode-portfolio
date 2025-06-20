import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  canonical: string;
  image: string;
  schemaMarkup?: Record<string, unknown>;
  keywords?: string;
  author?: string;
  themeColor?: string;
  twitterHandle?: string;
}

const MetaTags = ({
  title,
  description,
  canonical,
  image,
  schemaMarkup,
  keywords,
  author,
  themeColor = '#111827', // Theme color can remain as a design-specific default
  twitterHandle,
}: MetaTagsProps) => (
  <Helmet>
    {/* Primary Meta Tags */}
    <title>{title}</title>
    <meta name='title' content={title} />
    <meta name='description' content={description} />
    {keywords && <meta name='keywords' content={keywords} />}
    {author && <meta name='author' content={author} />}
    <meta name='robots' content='index, follow' />
    <meta name='language' content='English' />
    <meta name='revisit-after' content='7 days' />

    {/* Canonical URL */}
    <link rel='canonical' href={canonical} />

    {/* Theme Color */}
    <meta name='theme-color' content={themeColor} />
    <meta name='msapplication-TileColor' content={themeColor} />

    {/* Open Graph / Facebook */}
    <meta property='og:type' content='website' />
    <meta property='og:url' content={canonical} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={image} />
    <meta property='og:image:secure_url' content={image} />
    <meta property='og:image:type' content='image/jpeg' />
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='630' />
    <meta
      property='og:image:alt'
      content={`${author || 'Portfolio'} - Front-End Web Developer`}
    />
    <meta property='og:site_name' content={`${author} Portfolio`} />
    <meta property='og:locale' content='en_US' />

    {/* Twitter */}
    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content={canonical} />
    <meta property='twitter:title' content={title} />
    <meta property='twitter:description' content={description} />
    <meta property='twitter:image' content={image} />
    <meta
      property='twitter:image:alt'
      content={`${author || 'Portfolio'} - Front-End Web Developer`}
    />
    {twitterHandle && <meta name='twitter:site' content={twitterHandle} />}
    {twitterHandle && <meta name='twitter:creator' content={twitterHandle} />}

    {/* Structured Data (Schema Markup) */}
    {schemaMarkup && (
      <script type='application/ld+json'>{JSON.stringify(schemaMarkup)}</script>
    )}
  </Helmet>
);

export default MetaTags;
