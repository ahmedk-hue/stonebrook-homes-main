
import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const Carefree = () => {
    // 1. GEO Protocol: Entity Definitions & Schema Data
    const serviceArea = [
        { name: "Carefree", wikidataId: "Q486915" },
        { name: "Black Mountain" },
        { name: "The Boulders" },
        { name: "Carefree Desert Gardens" }
    ];

    // 2. RAG Content: "Answer-First" FAQ - RESEARCH BACKED
    const faqs = [
        {
            question: "How do you integrate homes with Carefree's iconic boulder formations?",
            answer: "We utilize 'site-organic' architectural principles, working with surveyors to map rock formations with laser precision. This allows us to anchor foundations around natural boulders, creating a home that feels like an extension of the desert landscape."
        },
        {
            question: "What are the water conservation requirements for Carefree new construction?",
            answer: "Carefree emphasizes xeriscaping and low-flow irrigation. We integrate advanced rainwater harvesting and greywater systems into our luxury builds to exceed local conservation standards while maintaining lush desert aesthetics."
        },
        {
            question: "How do you protect during the building process in sensitive desert environments?",
            answer: "We implement strict site containment protocols to protect native saguaros and delicate desert crust. Our 'clean-site' policy ensures that heavy machinery and materials do not disturb areas beyond the designated building envelope."
        }
    ];

    // 3. Local Relevance Vectors
    const features = [
        "Organic Architectural Integration",
        "Boulder-Safe Foundation Engineering",
        "High-Desert Climate Resilience",
        "Native Saguaro Protection Mastery",
        "Low-Impact Construction Protocols",
        "Sophisticated Desert Modernism"
    ];

    return (
        <>
            <LocationSchema
                name="Stonebrook Homes - Carefree"
                description="Luxury custom home building in Carefree, AZ. Specializing in high-desert architecture and seamless boulder integration for sophisticated residences."
                image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                url="https://stonebrook.homes/locations/carefree"
                telephone="(480) 818-0201"
                address={{
                    streetAddress: "7585 E Redfield RD Suit 211",
                    addressLocality: "Carefree",
                    addressRegion: "AZ",
                    postalCode: "85377",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 33.8223,
                    longitude: -111.9182
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53086.123!2d-111.942!3d33.822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7a9f8f5a5a1f%3A0x67396657989d3115!2sCarefree%2C%20AZ!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Carefree"
                subtitle="Where timeless desert beauty meets sophisticated modernism. We build homes that honor the serenity of the high-desert landscape."
                image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                customersServed={95}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">Desert Modernism</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Building with Nature in Carefree
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Building in Carefree requires a <strong>sophisticated touch</strong>. We specialize in <strong>organic architecture</strong> that prioritizes the preservation of <strong>monolithic boulders</strong> and <strong>native flora</strong>, creating a retreat that feels perfectly balanced within the Sonoran Desert.
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

            <RelatedProjects category="Custom Build" />

            <LocalMap
                city="Carefree"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53086.123!2d-111.942!3d33.822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7a9f8f5a5a1f%3A0x67396657989d3115!2sCarefree%2C%20AZ!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Carefree Sundial",
                        text: "We are active throughout the historic center and the surrounding hillside estates. Our team understands the unique aesthetic guidelines that preserve Carefree's 'whimsical' character."
                    },
                    {
                        from: "The Boulders",
                        text: "Experts in navigating the complex HOA and architectural review boards of Carefree's most exclusive gated communities."
                    }
                ]}
            />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Planning a High-Desert Retreat?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        The high desert requires specific resilience. Download our <strong>Carefree Desert Design Kit</strong> for insights on materials and sustainability.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Design Kit
                    </RouterLink>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title="Carefree Building FAQ" />
        </>
    );
};

export default Carefree;
