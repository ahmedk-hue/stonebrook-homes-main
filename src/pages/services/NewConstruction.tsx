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

const NewConstruction = () => {
    // GEO Blueprint: Focus on "Entity-Service-Location Triad"
    const pageTitle = "Custom Home Builders Scottsdale | Luxury Home Construction - Stonebrook Homes";

    const features = [
        "Aviation-Grade Technical Precision & Integrity",
        "Transparent Financial Stewardship & Fixed-Bid Contracts",
        "Regulatory Mastery & Local Zoning Expertise",
        "Energy-Efficient Desert Modern Engineering",
        "Concept-to-Blueprint Architectural Coordination",
        "Weekly Video Updates & Operational Excellence"
    ];

    const faqs = [
        {
            question: "What is the cost per square foot for custom homes in Scottsdale?",
            answer: "While 'cost per square foot' can be misleading due to finish variables, our custom home projects generally start at a budget of $1M+. For a precise quote, we recommend a Feasibility Study rather than rough square-footage math."
        },
        {
            question: "Do you build on my land (BOYL)?",
            answer: "Yes. We specialize in 'homes built on your land.' Whether you own a lot in Cave Creek or need help assessing a plot in Paradise Valley, we manage the site development, utility runs, and vertical construction."
        },
        {
            question: "How long does it take to build a custom home?",
            answer: "A typical luxury build takes between 12 to 24 months depending on complexity and size. We will provide a detailed timeline during the Preconstruction phase."
        },
        {
            question: "Do you handle the architectural design?",
            answer: "Yes. In our 'Concept Designs' phase, we utilize our in-house teams to move you from concept to blueprint seamlessly."
        }
    ];

    return (
        <>
            <SEO
                title={pageTitle}
                description="From Paradise Valley estates to Carefree retreats—we build legacy homes with aviation-level precision, transparent financials, and a focus on your lifestyle."
                canonical="https://stonebrook.homes/services/new-construction"
            />

            <ServiceSchema
                serviceName="Luxury Custom Home Construction"
                description="Expert builders of high-end custom homes in Scottsdale and Paradise Valley. Precision-driven construction with a focus on quality and honesty."
                areaServed={["Scottsdale", "Paradise Valley", "Fountain Hills", "Carefree", "Cave Creek", "Phoenix"]}
                image="/luxury-home-site.jpg"
            />

            <ServiceHero
                title="Custom Home Builders in Scottsdale & The Phoenix Valley"
                subtitle="Aviation-Level Precision Meets Luxury Design. Legacy homes built with discipline and transparency."
                backgroundImage="/luxury-home-site.jpg"
                primaryCtaText="Schedule Your Feasibility Study"
                secondaryCtaText="Download 2026 Construction Cost Guide"
                secondaryCtaLink="/resources/cost-guide-optin"
            />

            {/* PAS Framework: The Empathy Layer */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                                <img src="/luxury-home-site.jpg" alt="Luxury home construction site" className="w-full h-auto" />
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
                            <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">The Antidote to Construction Chaos</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                                Breaking the cycle of uncertainty.
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    Building a custom home should be the highlight of your life, but for many Arizona families, it becomes a source of anxiety. The industry is plagued by vague estimates that skyrocket and contractors who lack operational discipline.
                                </p>
                                <p>
                                    <strong>Stonebrook Homes offers a different path.</strong> Founded by Michael Leighton and Justin Sexton, we merge forty years of construction heritage with the rigorous discipline of commercial aviation. Justin, a commercial pilot, brings flight-deck precision to the job site—ensuring your home is engineered for safety, efficiency, and peace of mind.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Competence Layer: Our 3 Pillars */}
            <ServiceFeatures
                title="Three Pillars of Competence"
                description="We believe true luxury is the absence of worry. Here is how we protect your investment through technical precision, financial safety, and regulatory mastery."
                features={features}
            />

            {/* Specific Testimonial for Social Proof */}
            <ServiceTestimonial
                quote="The level of detail Stonebrook brought to our Scottsdale build was staggering. Their aviation-derived discipline meant no surprises, no excuses, and a home that truly felt like a masterpiece from day one."
                author="David & Elena R."
                location="Custom Estate in Paradise Valley"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
            />

            {/* The Process: Operational Transparency */}
            <ProcessSteps />

            {/* Proof Ecosystem: Project Cards & Contextual Evidence */}
            <RelatedProjects category="Custom Build" />

            {/* Soft Conversion: Lead Magnet */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Not ready to build just yet?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Most people underestimate the cost of luxury construction by 20-30%. Get the numbers first. Download our <strong>2026 Construction Cost Guide</strong> for real-world pricing trends.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download 2026 Cost Guide
                    </RouterLink>
                    <p className="text-sm text-slate-500 mt-4 italic">Updated for the Phoenix Valley Market</p>
                </div>
            </section>

            {/* Answer-First Content */}
            <ServiceFAQ faqs={faqs} title="Scottsdale Custom Building FAQ" />

            <div className="bg-primary py-24 text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl font-serif font-bold text-white mb-8">Ready to Build Your Legacy?</h2>
                    <p className="text-slate-300 text-lg mb-10">
                        Schedule a discovery session to discuss your land, vision, and how our precision-driven approach can bring your dream home to life.
                    </p>
                    <RouterLink to="/contact" className="inline-block bg-white text-primary px-12 py-5 font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors rounded-sm shadow-xl text-lg">
                        Schedule Your Feasibility Study
                    </RouterLink>
                </div>
            </div>
        </>
    );
};

export default NewConstruction;
