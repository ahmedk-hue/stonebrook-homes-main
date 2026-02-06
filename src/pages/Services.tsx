import { ArrowRight, Hammer, Home as HomeIcon, Building2, Ruler, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

import { SITE_CONFIG } from '../config/site';

const Services = () => {
    return (
        <>
            <SEO
                title="Our Services - Custom Home Building & Remodeling | Stonebrook Homes"
                description="Expert custom home building, whole-home remodeling, and additions in Paradise Valley, Scottsdale, and Phoenix. Discover our comprehensive design-build services."
                canonical="https://stonebrook.homes/services"
                keywords="custom home building, home remodeling, home additions, commercial construction, luxury home builder, paradise valley, scottsdale"
            />

            <PageHeader
                title="Our Services"
                subtitle="Aviation-grade precision and unwavering honesty for every stage of your project's lifecycle."
                backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Services', path: '/services' }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            {
                                icon: HomeIcon,
                                title: SITE_CONFIG.services[0].name,
                                desc: "Turn your land into a masterpiece. We bring aviation-level engineering to every build, navigating complex Scottsdale zoning with absolute transparency and fixed-bid contracts.",
                                link: SITE_CONFIG.services[0].path,
                                features: ["Luxury Build-on-Your-Lot", "In-House Architectural Team", "Energy-Efficient Modernism"]
                            },
                            {
                                icon: Hammer,
                                title: SITE_CONFIG.services[1].name,
                                desc: "Love your estate but need a modernization? We specialize in large-scale luxury renovations that re-engineer layouts and upgrade finishes while maintaining the home's original soul.",
                                link: SITE_CONFIG.services[1].path,
                                features: ["Structural Reconfiguration", "Premium Kitchens & Suites", "Clean-Site Protocols"]
                            },
                            {
                                icon: Building2,
                                title: SITE_CONFIG.services[3].name,
                                desc: "Precision-driven tenant improvements for medical, dental, and executive suites. We manage accelerated schedules to minimize business downtime and ensure strict commercial code compliance.",
                                link: SITE_CONFIG.services[3].path,
                                features: ["Tenant Improvement (TI)", "Medical & Executive Suites", "ADA & Code Compliance"]
                            },
                            {
                                icon: Ruler,
                                title: SITE_CONFIG.services[2].name,
                                desc: "Expand your footprint with seamless architectural integration. From second-story pop-tops to detached guest houses (Casitas), we maximize your property's potential and value.",
                                link: SITE_CONFIG.services[2].path,
                                features: ["Seamless Aesthetic Match", "Custom Backyard Casitas", "Zoning & Setback Analysis"]
                            }
                        ].map((service, index) => (
                            <div key={index} className="flex flex-col h-full bg-surface border border-slate-100 p-10 hover:shadow-xl transition-shadow group">
                                <div className="bg-white w-20 h-20 flex items-center justify-center rounded-full shadow-sm mb-8 text-primary group-hover:scale-110 transition-transform duration-500 border border-primary/10">
                                    <service.icon size={40} />
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-primary mb-4">{service.title}</h2>
                                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                                    {service.desc}
                                </p>

                                <ul className="mb-8 space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                                            <CheckCircle size={16} className="text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link to={service.link} className="inline-flex items-center text-primary font-bold uppercase tracking-widest hover:text-slate-400 transition-colors mt-auto">
                                    View Details <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready to Build Your Legacy?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Schedule a discovery session to discuss your vision, feasibility, and budget with Scottsdale’s most honest luxury builders.
                    </p>
                    <Link to="/contact" className="inline-block px-10 py-4 bg-white text-primary font-bold hover:bg-slate-100 transition-colors uppercase tracking-widest">
                        Book Discovery Session
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Services;
