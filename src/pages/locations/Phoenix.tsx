
import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const Phoenix = () => {
    // 1. GEO Protocol: Entity Definitions & Schema Data
    const serviceArea = [
        { name: "Phoenix", wikidataId: "Q16556" },
        { name: "Arcadia" },
        { name: "Biltmore" },
        { name: "Encanto" },
        { name: "Willo" }
    ];

    // 2. RAG Content: "Answer-First" FAQ - RESEARCH BACKED
    const faqs = [
        {
            question: "How do you navigate urban infill regulations in Arcadia and Biltmore?",
            answer: "Urban infill in Phoenix's premier districts requires a builder who understands historical overlays and neighborhood-specific lot coverage limits. We manage the delicate balance between modern luxury requirements and the existing character of the community."
        },
        {
            question: "What is the process for demolition and rebuilding in central Phoenix?",
            answer: "For 'Scrape-and-Rebuild' projects, we handle the entire lifecycle: from utility disconnects and hazardous material abatement to coordinating with the City of Phoenix for expedited permitting of the replacement structure."
        },
        {
            question: "How do you design for the Phoenix heat in high-density areas?",
            answer: "We focus on passive cooling strategies, including 'Thermal Mass' construction and strategic courtyard designs that encourage natural ventilation, ensuring year-round comfort in the urban core."
        }
    ];

    // 3. Local Relevance Vectors
    const features = [
        "Infill & Scrape-and-Rebuild Mastery",
        "Historical Overlay Compliance",
        "Arcadia & Biltmore Zoning Experts",
        "Urban Heat Island Mitigation Logic",
        "Sophisticated Urban Estate Design",
        "Efficient Utility & Site Connectivity"
    ];

    return (
        <>
            <LocationSchema
                name="Stonebrook Homes - Phoenix"
                description="Luxury custom home builders and infill specialists in Phoenix, AZ. Serving Arcadia, Biltmore, and North Phoenix with high-precision construction."
                image="https://images.unsplash.com/photo-1507679799987-c73774586594?q=80&w=2070&auto=format&fit=crop"
                url="https://stonebrook.homes/locations/phoenix"
                telephone="(480) 818-0201"
                address={{
                    streetAddress: "7585 E Redfield RD Suite 211",
                    addressLocality: "Phoenix",
                    addressRegion: "AZ",
                    postalCode: "85016",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 33.4484,
                    longitude: -112.0740
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.712!2d-112.07!3d33.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50e88357%3A0x67396657989d3115!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Phoenix"
                subtitle="From the lush canals of Arcadia to the urban estates of the Biltmore, we build excellence in the heart of the Valley."
                image="/projects/biltmore-estate.png"
                customersServed={180}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">Urban Infill Experts</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Redefining the Phoenix Core
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Building in established Phoenix neighborhoods like <strong>Arcadia</strong> and the <strong>Biltmore</strong> requires a builder with absolute <strong>logistical precision</strong>. We specialize in <strong>urban estates</strong> and <strong>high-end infill</strong>, delivering modern masterpieces that honor their historic surroundings.
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

            <RelatedProjects category="Custom Build" location="Phoenix" />

            <LocalMap
                city="Phoenix"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.712!2d-112.07!3d33.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50e88357%3A0x67396657989d3115!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Biltmore Fashion Park",
                        text: "We serve all the prestigious estates in and around the Arizona Biltmore Resort, specializing in modern transformations of legacy properties."
                    },
                    {
                        from: "Arcadia proper",
                        text: "Leading the way in Arcadia infill projects, we maximize lot potential while respecting the traditional lush character of the district."
                    }
                ]}
            />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Planning an Urban Custom Build?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Infill projects have distinct challenges. Download our <strong>Phoenix Infill Planning Guide</strong> for insights on city demolition and zoning.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Planning Guide
                    </RouterLink>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title="Phoenix Building FAQ" />
        </>
    );
};

export default Phoenix;
