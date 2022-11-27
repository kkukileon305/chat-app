import '../styles/globals.css';
import Header from './Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <main className='max-w-[1060px] px-4 w-full mx-auto'>{children}</main>
      </body>
    </html>
  );
}
