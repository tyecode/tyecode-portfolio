import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main id='main-content' role='main' className='flex-grow'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
