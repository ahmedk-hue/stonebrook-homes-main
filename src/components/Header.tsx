import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Check if we are on the home page for transparent header logic
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        {
            name: 'Services',
            path: '/services',
            children: [
                { name: 'New Construction', path: '/services/new-construction' },
                { name: 'Remodeling', path: '/services/remodeling' },
                { name: 'Basement Finishing', path: '/services/basement-finishing' },
                { name: 'Additions', path: '/services/additions' },
            ]
        },
        {
            name: 'Locations',
            path: '/locations',
            children: [
                { name: 'Loveland', path: '/locations/loveland' },
                { name: 'Fort Collins', path: '/locations/fort-collins' },
                { name: 'Windsor', path: '/locations/windsor' },
                { name: 'Boulder', path: '/locations/boulder' },
                { name: 'Greeley', path: '/locations/greeley' },
                { name: 'Longmont', path: '/locations/longmont' },
                { name: 'Timnath', path: '/locations/timnath' },
                { name: 'Wellington', path: '/locations/wellington' },
                { name: 'Berthoud', path: '/locations/berthoud' },
                { name: 'Mead', path: '/locations/mead' },
                { name: 'Erie', path: '/locations/erie' },
            ]
        },
        { name: 'Pricing', path: '/resources/cost-guide-optin' },
        { name: 'Portfolio', path: '/portfolio' },
        {
            name: 'Resources',
            path: '/resources', // Updated to clickable parent page
            children: [
                { name: 'About Us', path: '/about' },
                { name: 'Our Process', path: '/process' },
                { name: 'Blog', path: '/blog' },
                { name: 'Partners', path: '/partners' },
                { name: 'Careers', path: '/careers' },
            ]
        },
    ];

    const isActive = (path: string) => location.pathname === path;

    const toggleSubmenu = (name: string) => {
        setOpenSubmenu(openSubmenu === name ? null : name);
    };

    // Dynamic styling based on scroll state & page
    const headerBg = isScrolled || !isHomePage ? 'bg-white shadow-md py-4' : 'bg-transparent py-6';
    const textColor = isScrolled || !isHomePage ? 'text-primary' : 'text-white';
    const logoFilter = isScrolled || !isHomePage ? '' : 'brightness-0 invert';
    const ctaBg = isScrolled || !isHomePage ? 'hover:bg-primary hover:text-white border-primary text-primary' : 'hover:bg-white hover:text-primary border-white text-white';


    return (
        <header className={`fixed w-full z-50 font-sans transition-all duration-300 ${headerBg}`}>
            <div className="container mx-auto px-6 flex justify-between items-center transition-all duration-300">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 z-50">
                    <img
                        src="/logo.png"
                        alt={SITE_CONFIG.name}
                        className={`h-16 w-auto object-contain transition-all duration-300 ${logoFilter}`}
                    />
                </Link>

                {/* Desktop Nav - Clean & Spaced */}
                <nav className="hidden xl:flex items-center gap-10">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="relative group h-full"
                        >
                            <Link
                                to={item.path}
                                className={`flex items-center gap-1 text-[13px] font-bold uppercase tracking-[0.15em] transition-all py-2 border-b-2 border-transparent
                                    ${isActive(item.path) ? 'text-accent border-accent' : `${textColor} hover:text-accent hover:border-accent/30`}`}
                            >
                                {item.name}
                                {item.children && <ChevronDown size={12} className={`group-hover:rotate-180 transition-transform opacity-50 ${textColor}`} />}
                            </Link>

                            {/* Dropdown Menu - Minimalist */}
                            {item.children && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="w-64 bg-white shadow-2xl rounded-sm border-t-4 border-accent py-2">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                to={child.path}
                                                className="block px-6 py-3 text-slate-500 hover:text-primary hover:bg-surface font-medium text-sm transition-colors text-center"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className={`h-8 w-[1px] mx-2 transition-colors duration-300 ${isScrolled || !isHomePage ? 'bg-slate-200' : 'bg-white/30'}`}></div>
                    <Link
                        to="/contact"
                        className={`flex items-center gap-2 px-8 py-3 border font-bold rounded-sm transition-all duration-300 text-xs uppercase tracking-[0.2em] ${ctaBg}`}
                    >
                        Discovery Call
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`xl:hidden z-50 p-2 ${isScrolled || !isHomePage ? 'text-primary' : 'text-white'}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={32} className="text-primary" /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col pt-24 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full overflow-y-auto px-6 pb-10">
                    {navigation.map((item) => (
                        <div key={item.name} className="border-b border-slate-100 py-2">
                            <div className="flex items-center justify-between min-h-[44px]">
                                <Link
                                    to={item.path}
                                    className="text-xl font-serif font-bold text-primary block flex-grow py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                {item.children && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleSubmenu(item.name);
                                        }}
                                        className="p-3 text-slate-500 hover:bg-slate-50 rounded-full transition-colors -mr-2"
                                        aria-label="Toggle Submenu"
                                    >
                                        <ChevronDown
                                            size={20}
                                            className={`transition-transform duration-300 ${openSubmenu === item.name ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                )}
                            </div>

                            {/* Mobile Submenu Items */}
                            {item.children && (
                                <div className={`pl-4 space-y-2 mt-1 border-l-2 border-accent/20 overflow-hidden transition-all duration-300 ${openSubmenu === item.name ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.name}
                                            to={child.path}
                                            className="block text-slate-600 font-medium py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="mt-8 space-y-4">
                        <Link
                            to="/contact"
                            className="block text-center w-full bg-accent text-primary py-4 font-bold uppercase tracking-widest rounded-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            Request A Discovery Call
                        </Link>
                        <a
                            href={SITE_CONFIG.contact.phoneHref}
                            className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary py-4 font-bold uppercase tracking-widest rounded-sm"
                        >
                            <Phone size={20} />
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
