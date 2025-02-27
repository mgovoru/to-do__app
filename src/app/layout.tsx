'use client';
import { Russo_One, Marck_Script } from 'next/font/google';
import './globals.css';
import { store } from '@/store';
import { Provider } from 'react-redux';

const russo_One = Russo_One({
  subsets: ['cyrillic'],
  weight: ['400'],
  style: ['normal'],
});

const marck_Script = Marck_Script({
  subsets: ['cyrillic'],
  weight: ['400'],
  style: ['normal'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang='en' data-toolpad-color-scheme='light'>
        <body className={`${russo_One.className} ${marck_Script.className}`}>
          {children}
        </body>
      </html>
    </Provider>
  );
}
