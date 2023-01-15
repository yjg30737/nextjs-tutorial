import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

export const lightTheme = {
  body: '#F5F5F5',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }: { theme: any }) => theme.body};
    color: ${({ theme }: { theme: any }) => theme.text};
  }
`;


export function ThemeToggler() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyle />
                <button onClick={toggleTheme}>Toggle theme</button>
            </>
        </ThemeProvider>
    );
}
