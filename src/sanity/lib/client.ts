import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

console.log('projectId', projectId);
console.log('dataset', dataset);
console.log('apiVersion', apiVersion);

export const client = createClient({
  projectId: 'uiejhe8o',
  dataset: 'production',
  apiVersion: '2025-01-23',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
