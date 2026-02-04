
import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const FountainHills = () => {
    // 1. GEO Protocol: Entity Definitions & Schema Data
    const serviceArea = [
        { name: "Fountain Hills", wikidataId: "Q486904" },
        { name: "SunRidge Canyon" },
        { name: "Eagle Mountain" },
        { name: "FireRock" }
    ];

    // 2. RAG Content: "Answer-First" FAQ - RESEARCH BACKED
    const faqs = [
        {
            question: "What are the structural requirements for hillside builds in Fountain Hills?",
            answer: "Fountain Hills topography often consists of decomposed granite and bedrock. This requires specialized excavation and foundation engineering, often involving stem walls or deep pier systems to ensure structural integrity on steep gradients."
        },
        {
            question: "How do you maximize views while maintaining privacy?",
            answer: "We utilize tiered architectural designs and strategic window placement to capture 'The Fountain' and Four Peaks views while creating secluded outdoor living spaces that are shielded from neighboring properties."
        },
        {
            question: "What is the typical cost premium for building on a slope?",
            answer: "Hillside lots typically carry a 15-25% premium in site preparation and foundational costs. We provide detailed fixed-bid estimations for these complexities during our pre-construction phase."
        }
    ];

    // 3. Local Relevance Vectors
    const features = [
        "Hillside Structural Engineering Experts",
        "Tiered Architectural Design Logic",
        "Maximum View-Capture Engineering",
        "Rock Mitigation & Specialized Excavation",
        "FireRock & SunRidge HOA Mastery",
        "Precision Desert Slope Management"
    ];

    return (
        <>
            <LocationSchema
                name="Stonebrook Homes - Fountain Hills"
                description="Expert hillside custom home building in Fountain Hills, AZ. Specializing in architectural excellence and structural precision for luxury view properties."
                image="https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?q=80&w=2073&auto=format&fit=crop"
                url="https://stonebrook.homes/locations/fountain-hills"
                telephone="(480) 818-0201"
                address={{
                    streetAddress: "7585 E Redfield RD Suite 211",
                    addressLocality: "Fountain Hills",
                    addressRegion: "AZ",
                    postalCode: "85268",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 33.6117,
                    longitude: -111.7174
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106612.378!2d-111.776!3d33.611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b988f5a5a1f6d%3A0xe6f2e8f85f573c5b!2sFountain%20Hills%2C%20AZ!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Fountain Hills"
                subtitle="Where architectural precision meets the skyline. We build hillside masterpieces that frame Arizona's most iconic vistas."
                image="https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?q=80&w=2073&auto=format&fit=crop"
                customersServed={120}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">Hillside Specialists</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Mastering the Slope in Fountain Hills
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Building in Fountain Hills requires an uncompromising approach to <strong>structural engineering</strong>. We specialize in the unique challenges of <strong>hillside excavation</strong> and <strong>view-centric architecture</strong>, ensuring your home is as stable as it is stunning.
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
                city="Fountain Hills"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106612.378!2d-111.776!3d33.611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b988f5a5a1f6d%3A0xe6f2e8f85f573c5b!2sFountain%20Hills%2C%20AZ!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "The Fountain",
                        text: "We serve all hillside communities surrounding the iconic fountain. Our designs prioritize the unique sightlines that make Fountain Hills a world-class destination."
                    },
                    {
                        from: "Beeline Highway",
                        text: "Easy access to our project sites in the upper plateaus and gated communities. We manage all logistics for hillside materials delivery and specialized equipment."
                    }
                ]}
            />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Building on a Slope?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Hillside projects require a higher level of discipline. Download our <strong>Fountain Hills Engineering Guide</strong> for specialized building insights.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Engineering Guide
                    </RouterLink>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title="Fountain Hills Building FAQ" />
        </>
    );
};

export default FountainHills;
