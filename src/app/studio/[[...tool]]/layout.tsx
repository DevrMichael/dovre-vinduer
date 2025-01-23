// src/app/studio/[[...tool]]/layout.tsx
import React from 'react';

export const metadata = {
  title: 'Studio Tool',
  description: 'Root layout for the studio tool page.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
