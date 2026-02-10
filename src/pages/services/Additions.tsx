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

const Additions = () => {
    // GEO Blueprint: Focus on "Entity-Service-Location Triad"
    const pageTitle = "Luxury Home Additions & ADU Builders in Scottsdale | Stonebrook Homes";

    // GEO Blueprint: Keyword Clusters (Technical, Financial, Regulatory)
    const features = [
        "Seamless Roofline & Aesthetic Integration", // Aesthetic Cluster
        "Structural Foundation Extensions & Pinning", // Technical Cluster
        "Accessory Dwelling Unit (ADU) Specialist", // Product Cluster
        "Navigating Scottsdale Zoning & Setbacks", // Regulatory Cluster
        "Second Story Master Suite Additions",
        "Custom Garage & Guest House Extensions"
    ];

    const faqs = [
        {
            question: "How much does it cost to add a room or guest house in Scottsdale?",
            answer: "Home additions typically range from $250 to $450+ per square foot. These projects often involve greater complexity than new builds due to structural tie-ins, matching existing aesthetics, and utility extensions."
        },
        {
            question: "Can I build an ADU or Casita on my property in Scottsdale?",
            answer: "Scottsdale and Paradise Valley have specific regulations regarding ADUs/Casitas. We conduct a detailed feasibility study during our preconstruction phase to verify setbacks, lot coverage, and utility requirements for your specific property."
        },
        {
            question: "How do you ensure the addition doesn't look like an afterthought?",
            answer: "We obsess over architectural continuity. By matching roof pitches, sourcing original-grade materials, and aligning structural headers, we ensure the new space looks like a natural extension of your original luxury home."
        }
    ];

    return (
        <>
            <SEO
                title={pageTitle}
                description="Expert luxury home additions, second-story pop-tops, and custom casitas in Scottsdale and Paradise Valley. Seamless design integration with aviation-grade precision."
                keywords="Home Additions Scottsdale, Custom Casita Builders, Guest House Construction Arizona, ADU Builders Scottsdale, Luxury Home Extensions"
                robots="index, follow"
                canonical="https://stonebrook.homes/services/additions"
            />

            <ServiceSchema
                serviceName="Luxury Home Additions & ADUs"
                description="Design and construction of premium home additions, guest houses (Casitas), and structural expansions in Scottsdale, AZ."
                areaServed={["Scottsdale", "Paradise Valley", "Fountain Hills", "Carefree", "Cave Creek", "Phoenix"]}
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            />

            <ServiceHero
                title="Luxury Home Additions & Casitas"
                subtitle="Expand your living space without compromising your home's architectural soul."
                backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
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
                                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" alt="Modern Home Addition" className="w-full h-auto" />
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
                            <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">The Expansion</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                                Love your block, but need more space?
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    Whether you need to accommodate a growing family or you're dreaming of a private backyard casita, moving shouldn't be the only option. Leaving the Scottsdale neighborhood you love is a difficult choice.
                                </p>
                                <p>
                                    At Stonebrook Homes, we create <strong>seamless luxury additions</strong> that feel like part of the original design. We navigate the complexities of structural tie-ins and strict local zoning codes with the same precision and honesty that has defined our reputation for decades.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Solution: Features Grid */}
            <ServiceFeatures
                title="Seamless Architectural Integration"
                description="We ensure every addition is a perfect extension of your home's existing aesthetic and structural integrity."
                features={features}
            />

            {/* Social Proof */}
            <ServiceTestimonial
                quote="The team at Stonebrook added a master wing and a custom casita to our Paradise Valley home. You genuinely cannot tell where the old house ends and the new one begins. Their attention to detail is truly world-class."
                author="The Morrison Family"
                location="Luxury Addition in Paradise Valley"
                image="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000&auto=format&fit=crop"
            />

            <ProcessSteps />

            <RelatedProjects category="Addition" />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Planning a Luxury Addition?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Additions require expert planning. Our <strong>2026 Construction Cost Guide</strong> breaks down the costs of casitas, pop-tops, and structural expansions in Scottsdale.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-4 py-3.5 md:px-8 md:py-4 font-bold uppercase tracking-wider md:tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md text-[10px] sm:text-xs md:text-sm">
                        Download Free Guide
                    </RouterLink>
                </div>
            </section>

            {/* FAQ */}
            <ServiceFAQ faqs={faqs} title="Scottsdale Addition & Casita FAQ" />

            <div className="bg-primary py-24 text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl font-serif font-bold text-white mb-8">Ready to Expand Your Legacy?</h2>
                    <p className="text-slate-300 text-lg mb-10">
                        Let's verify your zoning setbacks and determine the feasibility of your luxury addition or custom guest house.
                    </p>
                    <RouterLink to="/contact" className="inline-block bg-white text-primary px-12 py-5 font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors rounded-sm shadow-xl text-lg">
                        Start Discovery Session
                    </RouterLink>
                </div>
            </div>
        </>
    );
};

export default Additions;
