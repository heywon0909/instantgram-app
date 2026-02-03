import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'uyc2o7un',
  dataset: 'production',
  apiVersion: 'v2026-01-30',
  useCdn: false,
  perspective: 'published',
  token: process.env.SANITY_READ_TOKEN,
});
