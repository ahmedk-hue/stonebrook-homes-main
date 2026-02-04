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
    const pageTitle = "Luxury Custom Home Builders in Scottsdale & Paradise Valley | Stonebrook Homes";

    // GEO Blueprint: Keyword Clusters (Technical, Financial, Regulatory)
    const features = [
        "Aviation-Grade Structural Precision & Integrity", // Technical Cluster (Justin's background)
        "Final Fixed-Bid Contracts & Transparent Financials", // Financial Cluster
        "Navigating Scottsdale ROC & Zoning Regulations", // Regulatory Cluster
        "Energy-Efficient Desert Modern Construction", // Efficiency Cluster
        "In-House Design & Architectural Collaboration",
        "Weekly Milestone Updates & Hands-Off Management" // Operational Maturity
    ];

    const faqs = [
        {
            question: "What is the typical budget for a Stonebrook custom home in Scottsdale?",
            answer: "Our custom home projects typically start at $1M, with luxury estates ranging toward $10M+. Final costs are determined by site complexity, architectural depth, and premium finish selections."
        },
        {
            question: "Do you handle the permitting process with the City of Scottsdale?",
            answer: "Yes. Our preconstruction team manages the entire regulatory process, including architectural reviews, city permitting (ROC #351850), and ensuring compliance with local building codes."
        },
        {
            question: "How long does a new custom home build typically take?",
            answer: "Depending on size and complexity, most custom builds take 12-24 months. We provide a detailed construction schedule during the preconstruction phase and weekly updates throughout."
        }
    ];

    return (
        <>
            <SEO
                title={pageTitle}
                description="Arizona's premier luxury custom home builder. Specializing in high-end residential construction in Scottsdale, Paradise Valley, and the Phoenix area since 1985."
                canonical="https://stonebrook.homes/services/new-construction"
            />

            <ServiceSchema
                serviceName="Luxury Custom Home Construction"
                description="Expert builders of high-end custom homes in Scottsdale and Paradise Valley. Precision-driven construction with a focus on quality and honesty."
                areaServed={["Scottsdale", "Paradise Valley", "Fountain Hills", "Carefree", "Cave Creek", "Phoenix"]}
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            />

            <ServiceHero
                title="Luxury Custom Home Builders in Scottsdale"
                subtitle="Uncompromising Quality. Precision-Driven Excellence."
                backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                primaryCtaText="Start Feasibility Study"
                secondaryCtaText="Download Cost Guide"
                secondaryCtaLink="/resources/cost-guide-optin"
            />

            {/* PAS Framework: The Problem / Agitation - Softened & Humanized */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        {/* Visual Anchor for Emotional Connection */}
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
                            <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">The Masterpiece Journey</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                                Your vision deserves aviation-level precision.
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    Building a custom home in the Scottsdale valley presents unique challenges—from <strong>navigating strict zoning codes to ensuring structural integrity in desert landscapes</strong>.
                                </p>
                                <p>
                                    At Stonebrook Homes, we believe that honesty and quality are the foundations of every build. With nearly four decades of local experience and a leadership background in precision aviation, we eliminate the chaos of construction with a disciplined, transparent process that delivers results beyond your vision.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Solution: Features Grid with Clusters */}
            <ServiceFeatures
                title="Engineering Quality & Trust"
                description="Our multidisciplinary expertise ensures every detail of your luxury residence is executed with mathematical precision and unwavering honesty."
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

            {/* Soft Conversion: Cost Guide CTA */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Planning Your Investment?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Download our <strong>2026 Construction Cost Guide</strong>. We break down site feasibility, permitting, and luxury finishes for Scottsdale, Paradise Valley, and the Phoenix area.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Free Guide
                    </RouterLink>
                    <p className="text-sm text-slate-500 mt-4 italic">Updated for AZ Market Rates</p>
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
                        Schedule Discovery Session
                    </RouterLink>
                </div>
            </div>
        </>
    );
};

export default NewConstruction;
