import React from 'react';
import { Hand } from 'lucide-react';

export function Greeting() {
  return (
    <div className="flex items-center gap-3 text-2xl font-medium text-gray-800">
      <Hand className="w-8 h-8 text-blue-500 animate-pulse" />
      <h1>Hello World!</h1>
    </div>
  );
}