'use client';

import useLanguage from '@/hooks/useLanguage';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useLanguage();
  return <>{children}</>;
}
