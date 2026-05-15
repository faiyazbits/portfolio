'use client';

import { useState } from 'react';

/**
 * Counter - Interactive counter component with increment/decrement
 */
export function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-4 inline-block">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(c => c - 1)}
          className="bg-primary hover:bg-opacity-80 text-white w-10 h-10 rounded-full font-bold transition-all"
          aria-label="Decrement"
        >
          -
        </button>
        <span className="text-2xl font-bold min-w-[3rem] text-center">{count}</span>
        <button
          onClick={() => setCount(c => c + 1)}
          className="bg-primaryDark hover:bg-opacity-80 text-white w-10 h-10 rounded-full font-bold transition-all"
          aria-label="Increment"
        >
          +
        </button>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
        Current count: {count}
      </p>
    </div>
  );
}

/**
 * ColorPicker - Interactive color selection demo
 */
export function ColorPicker({ label = 'Pick a color' }) {
  const [selectedColor, setSelectedColor] = useState(null);
  
  const colors = [
    { name: 'Red', value: '#EF4444', class: 'bg-red-500' },
    { name: 'Blue', value: '#3B82F6', class: 'bg-blue-500' },
    { name: 'Green', value: '#22C55E', class: 'bg-green-500' },
    { name: 'Yellow', value: '#EAB308', class: 'bg-yellow-500' },
    { name: 'Purple', value: '#A855F7', class: 'bg-purple-500' },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-4">
      <p className="text-sm font-medium mb-3 dark:text-gray-300">{label}</p>
      <div className="flex gap-2 mb-3">
        {colors.map(color => (
          <button
            key={color.name}
            onClick={() => setSelectedColor(color)}
            className={`${color.class} w-10 h-10 rounded-full transition-all transform hover:scale-110 ${
              selectedColor?.name === color.name ? 'ring-4 ring-offset-2 ring-primary' : ''
            }`}
            aria-label={color.name}
          />
        ))}
      </div>
      {selectedColor && (
        <p className="text-sm dark:text-gray-300">
          Selected: <span className="font-medium">{selectedColor.name}</span>
          <span 
            className="inline-block ml-2 w-4 h-4 rounded" 
            style={{ backgroundColor: selectedColor.value }}
          />
        </p>
      )}
    </div>
  );
}

/**
 * InteractiveDemo - Compound component combining Counter + ColorPicker
 */
export function InteractiveDemo({ title = 'Interactive Demo' }) {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-primaryDark/10 dark:from-primary/20 dark:to-primaryDark/20 rounded-xl p-6 my-6 border border-primary/20">
      <h3 className="text-xl font-bold mb-4 text-primary dark:text-primaryDark">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        This component combines multiple interactive elements:
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <Counter initialCount={42} />
        <ColorPicker label="Choose a theme color" />
      </div>
    </div>
  );
}

/**
 * Callout - Styled callout box for highlighting content
 */
export function Callout({ type = 'info', children }) {
  const styles = {
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/30',
      border: 'border-blue-400 dark:border-blue-500',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/30',
      border: 'border-yellow-400 dark:border-yellow-500',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
    },
    tip: {
      bg: 'bg-green-50 dark:bg-green-900/30',
      border: 'border-green-400 dark:border-green-500',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
    },
  };

  const style = styles[type] || styles.info;

  return (
    <div className={`${style.bg} border-l-4 ${style.border} rounded-r-lg p-4 my-4`}>
      <div className="flex gap-3">
        <div className={`flex-shrink-0 ${type === 'warning' ? 'text-yellow-500' : type === 'tip' ? 'text-green-500' : 'text-blue-500'}`}>
          {style.icon}
        </div>
        <div className="flex-1 text-sm text-gray-700 dark:text-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
}

export default {
  Counter,
  ColorPicker,
  InteractiveDemo,
  Callout,
};