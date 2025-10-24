import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={styles.button}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

const styles = {
  button: {
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    fontWeight: 'bold',
  },
};

export default ThemeToggle;
