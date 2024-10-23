import '@/styles/globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=' scroll-smooth' lang="pt-br">
      <body>
        <Navbar />
        <main className='pt-20'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
