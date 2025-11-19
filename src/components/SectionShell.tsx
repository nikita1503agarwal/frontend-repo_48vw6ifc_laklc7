import React from 'react';

export default function SectionShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_0%,rgba(56,189,248,0.12),transparent),radial-gradient(600px_200px_at_90%_0%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative">{children}</div>
    </div>
  );
}
