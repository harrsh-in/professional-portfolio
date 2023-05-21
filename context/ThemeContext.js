import React, { createContext, useState } from 'react';

const defaultValue = {
    theme: 'dark'
};

export const ThemeContext = createContext(defaultValue);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultValue.theme);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');

        if (theme === 'light') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
