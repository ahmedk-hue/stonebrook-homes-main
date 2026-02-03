
import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const ParadiseValley = () => {
    // 1. GEO Protocol: Entity Definitions & Schema Data
    const serviceArea = [
        { name: "Paradise Valley", wikidataId: "Q486891" },
        { name: "Camelback Mountain" },
        { name: "Echo Canyon" },
        { name: "Jokake" },
        { name: "Mockingbird" }
    ];

    // 2. RAG Content: "Answer-First" FAQ - RESEARCH BACKED
    const faqs = [
        {
            question: "How does the Paradise Valley Hillside Ordinance affect building?",
            answer: "The Town of Paradise Valley has one of the strictest hillside ordinances in the nation. This involves 'Hillside Developmental Areas' (HDA) that require specialized structural engineering for foundation pinning and strict limits on total lot disturbance."
        },
        {
            question: "What is the pre-construction process for a Paradise Valley estate?",
            answer: "Due to complex architectural reviews and stringent town codes, pre-construction for a PV estate often takes 6-9 months. We manage every meeting with the Town's Planning and Zoning commission and ensure your design meets all height and setback requirements."
        },
        {
            question: "Can I build an ultra-luxury modern home on a steep slope?",
            answer: "Yes, but it requires 'aviation-grade' structural precision. We coordinate with elite geotechnical engineers to ensure the stability of hillside builds, utilizing deep piers and advanced drainage systems to protect your investment."
        }
    ];

    // 3. Local Relevance Vectors
    const features = [
        "Hillside Developmental Area (HDA) Specialist",
        "Extreme Privacy & Sound Buffer Engineering",
        "Town of PV Planning & Zoning Navigation",
        "Ultra-Luxury Foundation Pinning Mastery",
        "Specialized Materials Sourcing for Desert Estates",
        "Highest-Tier Project Management Accountability"
    ];

    return (
        <>
            <LocationSchema
                name="Stonebrook Homes - Paradise Valley"
                description="Arizona's choice for ultra-luxury custom estates in Paradise Valley. Specialized in private estates, hillside builds, and expansive luxury residences."
                image="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop"
                url="https://stonebrook.homes/locations/paradise-valley"
                telephone="(480) 818-0201"
                address={{
                    streetAddress: "7585 E Redfield RD Suit 211",
                    addressLocality: "Paradise Valley",
                    addressRegion: "AZ",
                    postalCode: "85253",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 33.5312,
                    longitude: -111.9426
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.657!2d-111.942!3d33.531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0c4103683f21%3A0x67396657989d3115!2sParadise%20Valley%2C%20AZ!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Paradise Valley"
                subtitle="In Arizona's most prestigious zip code, we build architectural masterpieces that define the standard of ultra-luxury living."
                image="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop"
                customersServed={150}
            />

            {/* Zone 2: Relevance & Specificity */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">Elite Craftsmanship</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Building Legacies in Paradise Valley
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Building in Paradise Valley is a pursuit of perfection. From the slopes of <strong>Camelback Mountain</strong> to the private enclaves near <strong>Mummy Mountain</strong>, our approach is defined by <strong>technical rigors</strong> and <strong>absolute transparency</strong>. We specialize in the complex hillside ordinances and ultra-high-end finishes that the PV market demands.
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
            <RelatedProjects category="Custom Build" />

            {/* Zone 4: Map & Directions */}
            <LocalMap
                city="Paradise Valley"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.657!2d-111.942!3d33.531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0c4103683f21%3A0x67396657989d3115!2sParadise%20Valley%2C%20AZ!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Camelback Mountain",
                        text: "We are the leading specialists for hillside construction around the circumference of Camelback. Our engineering team ensures your home is anchored securely with zero aesthetic compromise."
                    },
                    {
                        from: "Town Hall",
                        text: "We maintain professional relationships with the Town of Paradise Valley planning departments, ensuring your architectural vision navigates the approval process seamlessly."
                    }
                ]}
            />

            {/* Zone 5: RAG Conversion Layer */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Planning a Paradise Valley Estate?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        The PV market requires distinct expertise. Download our <strong>Paradise Valley Hillside Guide</strong> for a breakdown of HDA requirements and ultra-luxury timelines.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Request PV Planning Guide
                    </RouterLink>
                </div>
            </section>

            {/* Zone 6: FAQ */}
            <ServiceFAQ faqs={faqs} title="Paradise Valley Custom Estate FAQ" />
        </>
    );
};

export default ParadiseValley;
