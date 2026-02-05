
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

const Footer = () => {
    return (
        <footer className="bg-[#0f1d1d] text-slate-400 pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Col */}
                    <div>
                        <Link to="/" className="inline-block mb-8 transition-transform hover:scale-105">
                            <img src="/logo.png" alt={SITE_CONFIG.name} className="h-16 w-auto brightness-0 invert" />
                        </Link>
                        <p className="mb-6 leading-relaxed">
                            Serving {SITE_CONFIG.serviceAreas[0].name}, {SITE_CONFIG.serviceAreas[1].name}, and surrounding areas since {SITE_CONFIG.foundingYear}. We build quality custom homes tailored to your lifestyle and land.
                        </p>
                        <div className="flex gap-5">
                            <a href={SITE_CONFIG.socials.facebook} className="text-slate-500 hover:text-white transition-colors"><Facebook size={22} /></a>
                            <a href={SITE_CONFIG.socials.instagram} className="text-slate-500 hover:text-white transition-colors"><Instagram size={22} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Menu</h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors">
                                        {item === 'Home' ? 'Home' : item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services (Silo Links) */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Services</h3>
                        <ul className="space-y-3">
                            {SITE_CONFIG.services.map((service) => (
                                <li key={service.path}>
                                    <Link to={service.path} className="hover:text-primary transition-colors">{service.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations (New Column) */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Service Areas</h3>
                        <ul className="space-y-3 text-sm">
                            {SITE_CONFIG.serviceAreas.map((area) => (
                                <li key={area.path}>
                                    <Link to={area.path} className="hover:text-primary transition-colors">{area.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="text-primary flex-shrink-0" />
                                <span>{SITE_CONFIG.contact.address.street}<br />{SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.state} {SITE_CONFIG.contact.address.zip}</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="text-primary flex-shrink-0" />
                                <a href={SITE_CONFIG.contact.phoneHref} className="hover:text-white">{SITE_CONFIG.contact.phone}</a>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="text-primary flex-shrink-0" />
                                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white">{SITE_CONFIG.contact.email}</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase">
                    <p className="text-slate-500">&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link to="/privacy-policy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/sitemap" className="text-slate-500 hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
