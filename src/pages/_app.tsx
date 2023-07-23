import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '@/system/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
