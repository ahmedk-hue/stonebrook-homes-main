import { Link as RouterLink } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import ServiceSchema from '../../components/seo/ServiceSchema';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceFeatures from '../../components/services/ServiceFeatures';
import ProcessSteps from '../../components/services/ProcessSteps';
import RelatedProjects from '../../components/services/RelatedProjects';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceTestimonial from '../../components/services/ServiceTestimonial';

const Remodeling = () => {
    // GEO Blueprint: Focus on "Entity-Service-Location Triad"
    const pageTitle = "Whole Home Remodeling & Luxury Renovations in Scottsdale | Stonebrook Homes";

    // GEO Blueprint: Keyword Clusters (Technical, Financial, Regulatory)
    const features = [
        "Major Structural Reconfigurations & Walls Removal", // Technical Cluster
        "Dust-Tight Containment & Clean-Site Protocols", // Operational Cluster
        "High-End Kitchen & Master Suite Transformations", // Service Cluster
        "Aviation-Level Attention to Detail & Quality", // Entity Cluster
        "Plumbing & Electrical Systems Modernization",
        "Open-Concept Layout Re-engineering"
    ];

    const faqs = [
        {
            question: "How much does a whole home renovation cost in the Scottsdale area?",
            answer: "Luxury renovations typically start at $100k and can range toward $5M+ for comprehensive estate transformations. Final budgeting depends on structural work, mechanical relocations, and custom finish levels."
        },
        {
            question: "Can we remain in the home during a major remodel?",
            answer: "For large-scale projects, we generally recommend temporary housing for comfort and safety. However, for phased remodels, we implement strict dust containment and noise-reduction protocols to minimize disruption."
        },
        {
            question: "Do you handle the entire design and permitting process?",
            answer: "Absolutely. We connect you with our in-house architect and drafting teams to finalize designs, then manage all city permitting and regulatory compliance to ensure a seamless project start."
        }
    ];

    return (
        <>
            <SEO
                title={pageTitle}
                description="Expert luxury home remodeling in Scottsdale and Paradise Valley. From open-concept kitchens to complete estate transformations, we build with precision and honesty."
                keywords="Home Remodeling Scottsdale, Luxury Renovations Arizona, Kitchen Remodeling Scottsdale, Master Suite Renovation, Whole Home Remodel Scottsdale"
                robots="index, follow"
                canonical="https://stonebrook.homes/services/remodeling"
            />

            <ServiceSchema
                serviceName="Luxury Home Remodeling & Renovation"
                description="Comprehensive high-end remodeling services in the Arizona Valley. Specializing in structural modifications and premium interior transformations."
                areaServed={["Scottsdale", "Paradise Valley", "Fountain Hills", "Carefree", "Cave Creek", "Phoenix"]}
                image="/remodeling-hero.jpg"
            />

            <ServiceHero
                title="Luxury Home Remodeling & Renovations"
                subtitle="Transform your home into a modern masterpiece with Scottsdale's precision builders."
                backgroundImage="/remodeling-hero.jpg"
                primaryCtaText="Start Discovery Session"
                secondaryCtaText="Download Cost Guide"
                secondaryCtaLink="/resources/cost-guide-optin"
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
                                <img src="/kitchen-renovation.png" alt="Modern Kitchen Renovation" className="w-full h-auto" />
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
                            <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">The Transformation</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                                Your location is perfect. Your home should be too.
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    You love your Scottsdale neighborhood, but your home's layout is out of sync with your life. <strong>Closed-off kitchens, dated aesthetics, and inefficient use of space</strong> prevent your home from reaching its full potential.
                                </p>
                                <p>
                                    At Stonebrook Homes, we specialize in large-scale luxury renovations that breathe new life into existing structures. Combining 40 years of building experience with the precision of aviation engineering, we ensure your remodel is managed with uncompromising quality and absolute honesty.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Solution: Features Grid */}
            <ServiceFeatures
                title="Renovating with Precision"
                description="Our disciplined approach to remodeling ensures project integrity, transparent financials, and a living space that exceeds every expectation."
                features={features}
            />

            {/* Social Proof */}
            <ServiceTestimonial
                quote="The transformation Stonebrook achieved in our Scottsdale home was remarkable. They managed the structural changes with a level of discipline we haven't seen in other contractors, and the result is truly a modern masterpiece."
                author="Mark & Sarah L."
                location="Whole Home Remodel in Scottsdale"
                image="https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2074&auto=format&fit=crop"
            />

            {/* The Process */}
            <ProcessSteps />

            {/* Proof Ecosystem */}
            <RelatedProjects category="Remodel" />

            {/* Soft Conversion */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Budgeting for a Luxury Renovation?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Get our <strong>2026 Construction Cost Guide</strong>. See specific price ranges for upscale kitchen upgrades, master suite additions, and whole-house transformations in Scottsdale.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Free Guide
                    </RouterLink>
                    <p className="text-sm text-slate-500 mt-4 italic">Updated for AZ Market Rates</p>
                </div>
            </section>

            {/* FAQ */}
            <ServiceFAQ faqs={faqs} title="Scottsdale Remodeling Questions" />

            {/* Final CTA */}
            <div className="bg-primary py-24 text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl font-serif font-bold text-white mb-8">Reimagine Your Living Experience.</h2>
                    <p className="text-slate-300 text-lg mb-10">
                        Let's discuss how we can open up your floor plan and modernize your Scottsdale estate with architectural precision.
                    </p>
                    <RouterLink to="/contact" className="inline-block bg-white text-primary px-12 py-5 font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors rounded-sm shadow-xl text-lg">
                        Schedule Discovery Session
                    </RouterLink>
                </div>
            </div>
        </>
    );
};

export default Remodeling;
