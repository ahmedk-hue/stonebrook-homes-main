
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Sitemap = () => {
    const mainPages = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Process', path: '/process' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Strategic Partners', path: '/partners' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        { name: 'Services Overview', path: '/services' },
        { name: 'New Custom Homes', path: '/services/new-construction' },
        { name: 'Whole Home Remodeling', path: '/services/remodeling' },
        { name: 'Light Commercial', path: '/services/commercial' },
        { name: 'Home Additions', path: '/services/additions' },
    ];

    const locations = [
        { name: 'Locations Overview', path: '/locations' },
        { name: 'Scottsdale', path: '/locations/scottsdale' },
        { name: 'Paradise Valley', path: '/locations/paradise-valley' },
        { name: 'Fountain Hills', path: '/locations/fountain-hills' },
        { name: 'Carefree', path: '/locations/carefree' },
        { name: 'Cave Creek', path: '/locations/cave-creek' },
        { name: 'Phoenix', path: '/locations/phoenix' },
    ];

    const resources = [
        { name: 'Cost Guide', path: '/resources/cost-guide-optin' },
        { name: 'Booking', path: '/booking' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Sitemap', path: '/sitemap' },
    ];

    const Section = ({ title, links }: { title: string, links: { name: string, path: string }[] }) => (
        <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-slate-100 pb-2">{title}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {links.map((link) => (
                    <li key={link.path}>
                        <Link
                            to={link.path}
                            className="text-slate-600 hover:text-accent transition-colors flex items-center gap-2 group"
                        >
                            <span className="w-1.5 h-1.5 bg-accent/50 rounded-full group-hover:bg-accent transition-colors"></span>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <SEO
                title="Sitemap | Stonebrook Homes"
                description="Easily navigate the Stonebrook Homes website. Find pages for luxury custom builds, renovations, and Scottsdale service areas."
                canonical="https://stonebrook.homes/sitemap"
            />

            <PageHeader
                title="Sitemap"
                subtitle="Complete overview of our precision-driven website."
                backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Sitemap', path: '/sitemap' }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <Section title="Main Pages" links={mainPages} />
                    <Section title="Our Services" links={services} />
                    <Section title="Service Areas" links={locations} />
                    <Section title="Resources & Legal" links={resources} />
                </div>
            </section>
        </>
    );
};

export default Sitemap;
