import { motion } from 'framer-motion';
import { Search, PenTool, Hammer, Key, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
    {
        icon: Search,
        title: "Discovery & Planning",
        image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop",
        desc: "We begin with a deep dive into your vision, budget, and site requirements. This phase includes land feasibility studies and initial concept alignment."
    },
    {
        icon: PenTool,
        title: "Design & Selections",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop",
        desc: "Our architectural partners bring your vision to blueprint. We guide you through selecting premium materials, fixtures, and finishes that define your home's character."
    },
    {
        icon: Hammer,
        title: "Construction",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        desc: "Your dedicated project manager oversees every nail driven. You receive weekly updates, photo logs, and schedule tracking via our client portal."
    },
    {
        icon: Key,
        title: "Welcome Home",
        image: "https://images.unsplash.com/photo-1560518883-ce09059ee971?q=80&w=2073&auto=format&fit=crop",
        desc: "We don't just hand over keys; we welcome you home. Includes a comprehensive orientation, warranty portfolio, and ongoing support after move-in."
    }
];

const ProcessSection = () => {
    return (
        <section className="py-32 bg-surface">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm">The Stonebrook Standard</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-4 mb-6">A Seamless Path to Your Dream Home</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-10">
                        Building a custom luxury home shouldn't be stressful. We've refined our process over decades to ensure transparency, precision, and joy at every stage.
                    </p>
                    <Link to="/process" className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-secondary transition-colors rounded-sm shadow-lg">
                        View Detailed Process <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-none shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
                            >
                                {/* Thumbnail Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <div className="absolute top-4 left-4 w-12 h-12 bg-primary flex items-center justify-center text-accent shadow-lg z-20">
                                        <step.icon size={24} />
                                    </div>
                                    <div className="absolute top-4 right-4 text-white font-serif font-bold text-2xl opacity-50">
                                        0{index + 1}
                                    </div>
                                </div>

                                <div className="p-8 border-l-4 border-l-transparent hover:border-l-accent flex-grow transition-all">
                                    <h4 className="text-xl font-serif font-bold text-primary mb-4">{step.title}</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
