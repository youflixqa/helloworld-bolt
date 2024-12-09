import React from 'react';
import { type PropsWithChildren } from 'react';

export function Container({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20">
        {children}
      </div>
    </main>
  );
}