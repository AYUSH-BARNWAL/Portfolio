import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPreference = window.localStorage.getItem('theme');
    const initialMode = userPreference || (mediaQuery.matches ? 'dark' : 'light');

    setMode(initialMode);

    if (initialMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleModeChange = () => {
    const updatedMode = mode === 'light' ? 'dark' : 'light';
    setMode(updatedMode);
    window.localStorage.setItem('theme', updatedMode);

    if (updatedMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return [mode, handleModeChange];
};

export default useThemeSwitcher;
