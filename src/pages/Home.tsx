import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, Home as HomeIcon, Building2, Ruler, Phone, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../config/site';
import ProcessSection from '../components/ProcessSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import PremiumPortfolio from '../components/PremiumPortfolio';

const Home = () => {
    return (
        <>
            <SEO
                title={`Luxury Custom Home Builders Scottsdale & Paradise Valley | ${SITE_CONFIG.name}`}
                description={`${SITE_CONFIG.name} provides high-precision custom home construction, luxury remodeling, and commercial build-outs in Scottsdale and Paradise Valley. Aviation-grade precision and honesty.`}
            />

            {/* Premium Hero Section - Redesigned */}
            <section className="relative h-screen min-h-[800px] flex items-center justify-center bg-primary text-white overflow-hidden">
                {/* Parallax Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 animate-slow-zoom"
                    style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
                ></div>
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-black/30 z-10"></div>

                <div className="container mx-auto px-6 relative z-20 text-center max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-2 px-6 border-t border-b border-white/30 text-white/90 font-serif italic text-lg md:text-2xl mb-6 md:mb-8 tracking-wider backdrop-blur-sm">
                            Honesty & Precision Since {SITE_CONFIG.foundingYear}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 md:mb-10 leading-tight text-white drop-shadow-2xl px-2">
                            Elite Custom Home Builders<br className="hidden md:block" /> in Scottsdale & Paradise Valley
                        </h1>
                        <p className="text-base md:text-xl mb-10 md:mb-14 text-white max-w-3xl mx-auto font-light leading-relaxed tracking-wide drop-shadow-md bg-black/10 backdrop-blur-sm p-4 rounded-sm">
                            Where aviation-level discipline meets architectural vision. Experience the art of luxury living with Scottsdale's most transparent custom builder.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center px-4"
                    >
                        {/* Primary Button */}
                        <Link to="/contact" className="group relative px-8 py-4 md:px-12 md:py-5 bg-white text-primary font-bold tracking-[0.15em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 text-sm md:text-base">
                            <span className="relative z-10">Start Your Legacy</span>
                        </Link>
                        {/* Secondary Button */}
                        <Link to="/portfolio" className="group px-8 py-4 md:px-12 md:py-5 border border-white hover:bg-primary hover:border-primary transition-all duration-300 text-white font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-4 hover:shadow-xl text-sm md:text-base">
                            View Portfolio <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Elegant Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em]">Discover</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
                </motion.div>
            </section>

            {/* Services Section - Clean & Geometric */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Sidebar Title */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">What We Do</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">High-Precision Build<br />For Every Vision.</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                From concept to completion, we handle every aspect of your construction project with the same discipline and transparency that has defined our reputation for decades.
                            </p>
                            <Link to="/services" className="inline-flex items-center text-primary font-bold border-b-2 border-primary/20 pb-1 hover:border-primary transition-colors">
                                Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>

                        {/* Grid */}
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: HomeIcon,
                                    title: "Custom Homes",
                                    desc: "Design & build services for new luxury custom estates in Scottsdale and Paradise Valley.",
                                    link: "/services/new-construction"
                                },
                                {
                                    icon: Hammer,
                                    title: "Remodeling",
                                    desc: "Whole-home luxury remodels, adapting your existing estate to your evolving lifestyle.",
                                    link: "/services/remodeling"
                                },
                                {
                                    icon: Building2,
                                    title: "Commercial",
                                    desc: "Precision tenant improvements for medical, dental, and executive professional suites.",
                                    link: "/services/commercial"
                                },
                                {
                                    icon: Ruler,
                                    title: "Additions",
                                    desc: "Seamless architectural extensions and custom backyard casitas to maximize your property.",
                                    link: "/services/additions"
                                }
                            ].map((service, index) => (
                                <div key={index} className="group p-10 bg-surface hover:bg-primary transition-colors duration-500 border border-primary/5">
                                    <service.icon size={48} className="text-primary group-hover:text-white mb-8 transition-colors" />
                                    <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-white mb-4 transition-colors">{service.title}</h3>
                                    <p className="text-slate-600 group-hover:text-slate-300 mb-8 leading-relaxed transition-colors">{service.desc}</p>
                                    <Link to={service.link} className="text-primary group-hover:text-white font-bold inline-flex items-center uppercase tracking-widest text-xs transition-colors border-b border-primary group-hover:border-white pb-1">
                                        Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ProcessSection />

            <PremiumPortfolio />

            {/* Value Prop / Since 1990 */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                            <img
                                src="/luxury-home-site.jpg"
                                alt="Luxury Custom Home Interior"
                                className="w-full h-auto shadow-2xl relative z-10"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-primary p-10 text-white z-20 hidden md:block">
                                <span className="block text-4xl font-serif font-bold text-white mb-1">30+</span>
                                <span className="uppercase tracking-widest text-sm">Years of Integrity</span>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Heritage</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Scottsdale's Choice<br />for Precision Living.</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Founded on the principles of honesty and aviation-grade precision, {SITE_CONFIG.name} is Scottsdale's most trusted partner for complex custom builds and high-end tenant improvements.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Aviation-Grade Discipline",
                                    "Transparent Fixed-Bid Model",
                                    "Scottsdale ROC #351850",
                                    "In-House Design & Drafting"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                                        <span className="font-bold text-primary">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12">
                                <Link to="/about" className="px-10 py-4 border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                                    Our Principles
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialCarousel />

            {/* AI Answer-First FAQ Section (GEO Optimized - Kept for Ranking) */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Scottsdale Building FAQ</h2>
                        <p className="text-slate-500">Answers to your most important questions about luxury building in the desert.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "How much does a custom home cost in Scottsdale or Paradise Valley?",
                                a: "Luxury custom home builds in the Scottsdale area typically start at $300-$500+ per square foot. Final costs are driven by architectural complexity, site preparation (especially on hillside lots), and premium material selections."
                            },
                            {
                                q: "Do you handle all Scottsdale city permitting and HOA reviews?",
                                a: "Yes. Our preconstruction team manages the entire regulatory process, including City of Scottsdale planning, architectural review boards, and specific HOA requirements in communities like DC Ranch or Silverleaf."
                            },
                            {
                                q: "What is your commitment to transparency?",
                                a: "We operate on a fixed-bid contract model. Unlike 'cost-plus' builders where costs can spiral, we provide a final bid after the design phase, giving you absolute financial certainty before we break ground."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-primary mb-3 flex items-start gap-3">
                                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
                                    {faq.q}
                                </h3>
                                <p className="text-slate-600 leading-relaxed pl-8">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-32 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">Build Your Legacy with Precision.</h2>
                    <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Schedule a discovery session to discuss your vision, timeline, and how our honest approach ensures a seamless build.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link to="/contact" className="px-12 py-5 bg-white text-primary font-bold hover:bg-slate-100 transition-colors uppercase tracking-widest shadow-xl">
                            Start Discovery Session
                        </Link>
                        <a href={SITE_CONFIG.contact.phoneHref} className="flex items-center gap-3 px-12 py-5 border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-colors uppercase tracking-widest backdrop-blur-sm">
                            <Phone size={20} />
                            {SITE_CONFIG.contact.phone}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
