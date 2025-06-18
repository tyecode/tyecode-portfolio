import structuredDataConfig from "@/assets/structured-data.json";

export function generateStructuredData(): string {
  return JSON.stringify(structuredDataConfig, null, 2);
}

export function createStructuredDataScript(): string {
  return `<script type="application/ld+json">${generateStructuredData()}</script>`;
}
