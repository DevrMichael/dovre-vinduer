export const apiVersion = '2025-01-23';

export const dataset = assertValue(
  'production',
  'Missing environment variable: SANITY_STUDIO_DATASET'
);

export const projectId = assertValue(
  'uiejhe8o',
  'Missing environment variable: SANITY_STUDIO_PROJECT_ID'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
