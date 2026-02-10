
import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const Scottsdale = () => {
    // 1. GEO Protocol: Entity Definitions & Schema Data
    const serviceArea = [
        { name: "Scottsdale", wikidataId: "Q486884" },
        { name: "DC Ranch" },
        { name: "Silverleaf" },
        { name: "Grayhawk" },
        { name: "Troon North" }
    ];

    // 2. RAG Content: "Answer-First" FAQ - RESEARCH BACKED
    const faqs = [
        {
            question: "How do Scottsdale zoning ordinances impact custom home heights?",
            answer: "Scottsdale's 'Environmentally Sensitive Lands' (ESL) ordinance strictly regulates building heights and floor area ratios to preserve mountain visibilities. We navigate these native plant salvaging and hillside disturbance requirements during our pre-construction phase."
        },
        {
            question: "What is the typical timeline for building a custom home in North Scottsdale?",
            answer: "A high-end custom estate in Scottsdale typically ranges from 14 to 24 months. This includes the design phase, HOA architectural reviews (like DC Ranch or Silverleaf), city permitting, and the high-precision build phase."
        },
        {
            question: "How do you handle native plant salvage requirements in Scottsdale?",
            answer: "The City of Scottsdale requires a Native Plant Salvage Plan. We inventory all protected species (Saguaro, Ocotillo, etc.) on your lot and coordinate their safe relocation and maintenance until they can be integrated back into your final landscape design."
        },
        {
            question: "Are there specific building codes for desert luxury homes?",
            answer: "Yes. Scottsdale enforces the 2021 International Energy Conservation Code (IECC) with local amendments. We prioritize high-performance glazing, advanced insulation, and smart HVAC systems to ensure your luxury home remains efficient during extreme Arizona summers."
        }
    ];

    // 3. Local Relevance Vectors
    const features = [
        "ESL Ordinance Compliance Specialists",
        "Native Plant Salvage & Inventory Management",
        "DC Ranch & Silverleaf HOA Navigation",
        "High-Performance Sun-Shielding Engineering",
        "Luxury In-Ground Pool & Outdoor Living Logic",
        "Aviation-Grade Structural Precision"
    ];

    return (
        <>
            <LocationSchema
                name="Stonebrook Homes - Scottsdale"
                description="Scottsdale's premier luxury custom home builder. Specializing in high-precision estates in DC Ranch, Silverleaf, and Cave Creek."
                image="https://images.unsplash.com/photo-1581859814481-bfd944e3122f?q=80&w=2070&auto=format&fit=crop"
                url="https://stonebrook.homes/locations/scottsdale"
                telephone="(480) 818-0201"
                address={{
                    streetAddress: "7585 E Redfield RD Suite 211",
                    addressLocality: "Scottsdale",
                    addressRegion: "AZ",
                    postalCode: "85260",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 33.4942,
                    longitude: -111.9261
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212999.71836561!2d-111.961014!3d33.684897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08d9a7772c97%3A0x2612623b7e447cc2!2sScottsdale%2C%20AZ!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Scottsdale"
                subtitle="From the slopes of Troon to the greens of Silverleaf, we build high-precision legacies in the West's Most Western Town."
                image="https://images.unsplash.com/photo-1581859814481-bfd944e3122f?q=80&w=2070&auto=format&fit=crop"
                customersServed={200}
            />

            {/* Zone 2: Relevance & Specificity */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">Local Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            High-Precision Building in Scottsdale
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Building a luxury custom home in Scottsdale requires more than just craftsmanship—it requires <strong>absolute discipline</strong>. We specialize in navigating the complex <strong>native plant salvage plans</strong>, strict HOA guidelines of <strong>North Scottsdale clubs</strong>, and the structural demands of high-performance desert architecture.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-primary/30 transition-colors flex items-start gap-4"
                            >
                                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                                <span className="text-slate-700 font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Zone 3: Local Proof */}
            <RelatedProjects category="Custom Build" location="Scottsdale" />

            {/* Zone 4: Map & Directions */}
            <LocalMap
                city="Scottsdale"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212999.71836561!2d-111.961014!3d33.684897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08d9a7772c97%3A0x2612623b7e447cc2!2sScottsdale%2C%20AZ!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Old Town Scottsdale",
                        text: "Head north on Scottsdale Rd past Frank Lloyd Wright Blvd. We serve the entire North Scottsdale corridor, from the McDowell Sonoran Preserve to the Troon Mountains."
                    },
                    {
                        from: "DC Ranch / Silverleaf",
                        text: "Our team is intimately familiar with the architectural review processes of Scottsdale's premier clubs. We maintain active projects in these communities and can meet on-site for discovery sessions."
                    }
                ]}
            />

            {/* Zone 5: RAG Conversion Layer */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Planning a Luxury Build in Scottsdale?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Don't start without the data. Our <strong>2026 Scottsdale Construction Guide</strong> includes specific city permitting timelines and native plant salvage costs.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Scottsdale Planning Guide
                    </RouterLink>
                </div>
            </section>

            {/* Zone 6: FAQ */}
            <ServiceFAQ faqs={faqs} title="Scottsdale Custom Home FAQ" />
        </>
    );
};

export default Scottsdale;
