/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = [
  { name: 'Light' },
  { name: 'Dark' },
  { name: 'Emerald' },
  { name: 'Pink' },
];

function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex w-full items-center justify-between bg-th-background-secondary p-8 text-xl font-bold text-th-primary-dark">
      <span>
        The current theme is: <strong>{theme}</strong>
      </span>
      <div>
        <label htmlFor="theme-select" className="sr-only mr-2">
          Choose theme:
        </label>
        <select
          name="theme"
          id="theme-select"
          className="border border-gray-800 bg-white px-3 py-1 text-gray-800"
          onChange={e => setTheme(e.currentTarget.value)}
          value={theme}
        >
          <option value="system">System</option>
          {themes.map(t => (
            <option
              key={t.name.toLowerCase()}
              value={t.name.toLowerCase()}
            >
              {t.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ThemeChanger;
