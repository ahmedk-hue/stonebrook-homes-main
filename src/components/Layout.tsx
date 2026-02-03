import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
            <Header />
            <main className="flex-grow">
                {/* The Outlet renders the current route's element */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
