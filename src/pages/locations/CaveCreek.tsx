
import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const CaveCreek = () => {
    // 1. GEO Protocol: Entity Definitions & Schema Data
    const serviceArea = [
        { name: "Cave Creek", wikidataId: "Q486921" },
        { name: "Spur Cross" },
        { name: "Elephant Head" },
        { name: "Black Mountain" }
    ];

    // 2. RAG Content: "Answer-First" FAQ - RESEARCH BACKED
    const faqs = [
        {
            question: "How do you handle septic and well requirements in Cave Creek?",
            answer: "Many Cave Creek lots require private septic systems and shared or private wells. We manage the Perc testing, engineering, and Health Department permitting for these decentralized utilities during our pre-construction phase."
        },
        {
            question: "What is the 'Desert Rural' zoning in Cave Creek?",
            answer: "Cave Creek's Desert Rural zoning maintains the western lifestyle by requiring larger lot sizes and buffering between properties. We ensure your custom build meets all equestrian and accessory building allowances within these zones."
        },
        {
            question: "How do you design for the rugged topography of Cave Creek?",
            answer: "We emphasize 'Modern Rustic' architecture that utilizes steel, stone, and reclaimed wood to complement the rugged terrain. Our site planning focuses on natural drainage and minimizing the impact on native washes."
        }
    ];

    // 3. Local Relevance Vectors
    const features = [
        "Septic & Well Engineering Mastery",
        "Equestrian-Friendly Site Planning",
        "Modern Rustic Architectural Style",
        "Wash & Natural Drainage Management",
        "Desert Rural Zoning Navigation",
        "Authentic Desert Material Sourcing"
    ];

    return (
        <>
            <LocationSchema
                name="Stonebrook Homes - Cave Creek"
                description="Custom home builders in Cave Creek, AZ. Specializing in modern rustic architecture, desert rural lifestyles, and high-precision desert construction."
                image="https://images.unsplash.com/photo-1445013541593-44757a79f041?q=80&w=2154&auto=format&fit=crop"
                url="https://stonebrook.homes/locations/cave-creek"
                telephone="(480) 818-0201"
                address={{
                    streetAddress: "7585 E Redfield RD Suit 211",
                    addressLocality: "Cave Creek",
                    addressRegion: "AZ",
                    postalCode: "85331",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 33.8334,
                    longitude: -111.9507
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53077.5!2d-111.95!3d33.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b79a5f5a5a1f%3A0x67396657989d3115!2sCave%20Creek%2C%20AZ!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Cave Creek"
                subtitle="From the foothills of Black Mountain to the trails of Spur Cross, we build homes that embody the spirit of the desert lifestyle."
                image="https://images.unsplash.com/photo-1445013541593-44757a79f041?q=80&w=2154&auto=format&fit=crop"
                customersServed={110}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">Desert Rural Experts</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Authentic Living in Cave Creek
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Building in Cave Creek requires a builder who understands the <strong>rustic sophistication</strong> of the area. We specialize in <strong>Modern Rustic architecture</strong> and the technical complexities of <strong>decentralized utilities</strong>, ensuring your custom build is perfectly attuned to the Cave Creek lifestyle.
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
                city="Cave Creek"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53077.5!2d-111.95!3d33.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b79a5f5a5a1f%3A0x67396657989d3115!2sCave%20Creek%2C%20AZ!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Frontier Town",
                        text: "We are the premier choice for custom builds in the rolling hills and desert washes surrounding the Cave Creek town center."
                    },
                    {
                        from: "Spur Cross Ranch",
                        text: "Highly experienced in the sensitive ecological zones bordering the Cave Creek Regional Park and Spur Cross Ranch."
                    }
                ]}
            />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Planning a Cave Creek Build?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Desert utility planning is critical. Download our <strong>Cave Creek Infrastructure Checklist</strong> for septic and well insights.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Checklist
                    </RouterLink>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title="Cave Creek Building FAQ" />
        </>
    );
};

export default CaveCreek;
