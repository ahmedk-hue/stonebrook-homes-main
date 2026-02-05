import { Search, PenTool, FileCheck, Hammer, Key } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: "1. Discovery Session",
        description: "A simple, low-pressure meeting to verify alignment. We answer your initial questions and determine if your vision fits our capabilities."
    },
    {
        icon: PenTool,
        title: "2. Concept Designs",
        description: "We connect you with our in-house architect and drafting teams. We take your vision—from Pinterest boards to napkins—and translate it into real architectural plans."
    },
    {
        icon: FileCheck,
        title: "3. Preconstruction (The Safety Phase)",
        description: "This is where we mitigate risk. We finalize plans, secure city permits, and provide a final, hard bid. You enter construction knowing exactly what you are building and what it costs."
    },
    {
        icon: Hammer,
        title: "4. Construction",
        description: "Enjoy a hands-off experience. We provide weekly video updates and manage all on-site activity. You simply approve milestones and watch your home rise."
    },
    {
        icon: Key,
        title: "5. Walkthrough",
        description: "The final reveal. We conduct a meticulous walkthrough to ensure every detail matches the dream you envisioned before handing over the keys."
    }
];

const ProcessSteps = () => {
    return (
        <section className="py-24 bg-primary text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm block mb-4">How We Work</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">The Simplified Build Process</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Connector Line (Hidden on mobile/last item) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-700 -z-10"></div>
                            )}

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-700 group-hover:border-accent transition-colors mb-6 z-10 shadow-lg relative">
                                    <step.icon className="text-white" size={28} />
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full text-primary font-bold text-xs flex items-center justify-center">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed px-2">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
