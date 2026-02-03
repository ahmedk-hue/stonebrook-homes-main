import { Link as RouterLink } from 'react-router-dom';
import { FileText, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import ServiceSchema from '../../components/seo/ServiceSchema';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceFeatures from '../../components/services/ServiceFeatures';
import ProcessSteps from '../../components/services/ProcessSteps';
import RelatedProjects from '../../components/services/RelatedProjects';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceTestimonial from '../../components/services/ServiceTestimonial';

const Commercial = () => {
    // GEO Blueprint: Focus on "Entity-Service-Location Triad"
    const pageTitle = "Light Commercial Construction & Tenant Improvements in Scottsdale | Stonebrook Homes";

    // GEO Blueprint: Keyword Clusters (Technical, Financial, Regulatory)
    const features = [
        "Specialized Tenant Improvement (TI) Build-Outs", // Service Cluster
        "Medical, Dental & Executive Office Specialists", // Niche Cluster
        "Aviation-Grade Project Management & Precision", // Entity Cluster
        "Strict Adherence to Commercial Codes & ADA", // Regulatory Cluster
        "Transparent Fixed-Bid Commercial Contracts", // Financial Cluster
        "Accelerated Schedules to Minimize Business Downtime" // Value Cluster
    ];

    const faqs = [
        {
            question: "What types of commercial projects do you specialize in?",
            answer: "We focus on light commercial construction, including executive office build-outs, medical and dental suites, boutique retail spaces, and comprehensive tenant improvements in the Scottsdale area."
        },
        {
            question: "How do you handle construction in occupied buildings?",
            answer: "Operational continuity is our priority. We implement strict noise, dust, and debris containment protocols, and can coordinate after-hours work when necessary to minimize disruption to your business or neighbors."
        },
        {
            question: "Do you provide fixed-cost bids for commercial projects?",
            answer: "Yes. Our disciplined preconstruction process allows us to provide detailed fixed-bid contracts, eliminating the financial uncertainty often associated with commercial build-outs."
        }
    ];

    return (
        <>
            <SEO
                title={pageTitle}
                description="Arizona's choice for light commercial construction and tenant improvements. Precision-driven office and retail build-outs in Scottsdale and Paradise Valley."
                canonical="https://stonebrook.homes/services/commercial"
            />

            <ServiceSchema
                serviceName="Light Commercial Construction"
                description="High-precision commercial build-outs and tenant improvements for offices, medical suites, and boutique retail in Scottsdale, AZ."
                areaServed={["Scottsdale", "Paradise Valley", "Phoenix", "Tempe", "Mesa"]}
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />

            <ServiceHero
                title="Commercial Construction & Tenant Improvements"
                subtitle="High-precision build-outs for specialized professional spaces."
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                primaryCtaText="Start Discovery Session"
                secondaryCtaText="Download Planning Guide"
                secondaryCtaLink="/resources/commercial-guide"
            />

            {/* PAS Framework: The Problem / Agitation */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        {/* Visual Anchor */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Modern commercial office space" className="w-full h-auto" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full z-0 blur-2xl"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-1/2"
                        >
                            <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">Professional Excellence</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                                Your business environment reflects your brand.
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    A subpar workspace doesn't just hinder productivity—it signals a lack of quality to your clients. <strong>Navigating commercial building codes, ADA compliance, and tight deadlines</strong> requires a builder with absolute discipline.
                                </p>
                                <p>
                                    At Stonebrook Homes, we bring the same honesty and aviation-level precision to light commercial construction that has made us Scottsdale's premier residential builder. We specialize in transforming generic shells into high-performance professional environments.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Solution: Features Grid */}
            <ServiceFeatures
                title="Precision Commercial Build-Outs"
                description="We combine sophisticated project management with structural expertise to deliver commercial spaces that perform."
                features={features}
            />

            {/* Social Proof */}
            <ServiceTestimonial
                quote="The level of precision Stonebrook brought to our medical suite build-out was unparalleled. They managed a complex schedule with multiple specialized subs and hit every milestone, allowing us to open on time and on budget."
                author="Dr. Robert S."
                location="Medical Center Build-Out in Scottsdale"
                image="https://images.unsplash.com/photo-1559839734-2b71ef15995d?q=80&w=2070&auto=format&fit=crop"
            />

            <ProcessSteps />

            <RelatedProjects category="Commercial" />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Planning a Commercial Build-Out?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Commercial projects require distinct expertise. Download our <strong>2026 Tenant Improvement Guide</strong> for a breakdown of costs and timelines in Scottsdale.
                    </p>
                    <RouterLink to="/resources/commercial-guide" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Planning Guide
                    </RouterLink>
                </div>
            </section>

            {/* FAQ */}
            <ServiceFAQ faqs={faqs} title="Commercial Construction FAQ" />

            <div className="bg-primary py-24 text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl font-serif font-bold text-white mb-8">Elevate Your Professional Space.</h2>
                    <p className="text-slate-300 text-lg mb-10">
                        Schedule a discovery session to discuss your commercial project, timeline, and how our precision-driven approach can help your business grow.
                    </p>
                    <RouterLink to="/contact" className="inline-block bg-white text-primary px-12 py-5 font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors rounded-sm shadow-xl text-lg">
                        Schedule Discovery Session
                    </RouterLink>
                </div>
            </div>
        </>
    );
};

export default Commercial;
