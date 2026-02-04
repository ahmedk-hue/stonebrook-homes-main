
import { Link } from 'react-router-dom';
import { Award, Users, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const About = () => {
    return (
        <>
            <SEO
                title="About Us | Stonebrook Homes"
                description="Luxury custom home builders in Scottsdale since 1985. Led by Michael Leighton and Justin Sexton, we bring aviation-level precision to Arizona residential construction."
                canonical="https://stonebrook.homes/about"
            />

            <PageHeader
                title="Building Quality Since 1985"
                subtitle="High-Precision Construction. Absolute Honesty. Scottsdale's Premier Custom Builder."
                backgroundImage="https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=2070&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'About', path: '/about' }
                ]}
            />

            {/* Founder's Message */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            {/* Abstract decorative element */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
                                alt="Michael Leighton, Founder"
                                className="w-full h-[600px] object-cover rounded-lg shadow-2xl relative z-10"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg rounded-lg z-20 border border-slate-100 hidden md:block">
                                <span className="font-serif font-bold text-4xl text-primary block">40</span>
                                <span className="text-slate-500 uppercase tracking-widest text-xs">Years Experience</span>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">The Stonebrook Standard</h2>
                            <div className="text-slate-600 text-lg leading-relaxed space-y-6">
                                <p>
                                    When I entered the building industry nearly four decades ago, I realized that high-end construction often lacked two things: <strong>absolute honesty and structural discipline</strong>. Stonebrook Homes was founded to bridge that gap.
                                </p>
                                <p>
                                    By partnering with Justin Sexton—who brings the uncompromising precision of commercial aviation to our project management—we've created a building process that functions like a flight plan. Every detail is checked, every cost is transparent, and every milestone is hit with mathematical certainty.
                                </p>
                                <p>
                                    We don't just build luxury homes in the Scottsdale valley; we engineer the backdrop for your family's future. Our promise is simple: radical transparency and quality that transcends the desert landscape.
                                </p>
                            </div>
                            <div className="mt-10 flex items-center gap-6">
                                <div>
                                    <p className="font-bold text-primary text-xl">Michael Leighton</p>
                                    <p className="text-slate-500 uppercase tracking-widest text-sm">Founder & CEO</p>
                                </div>
                                <div className="w-px h-12 bg-slate-200"></div>
                                <div>
                                    <p className="font-bold text-primary text-xl">Justin Sexton</p>
                                    <p className="text-slate-500 uppercase tracking-widest text-sm">Co-Founder & COO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us / Core Values */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Foundation</h2>
                        <p className="text-slate-600 text-lg">The principles that guide our precision-driven approach to every build site.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Award,
                                title: "Quality First",
                                desc: "We don't optimize for speed; we optimize for longevity. We use materials that thrive in Arizona's unique desert environment."
                            },
                            {
                                icon: Users,
                                title: "Total Transparency",
                                desc: "You see the invoices we see. Our fixed-bid contracts mean no hidden markups and no financial surprises."
                            },
                            {
                                icon: Heart,
                                title: "Aviation Precision",
                                desc: "Led by a commercial pilot, we apply rigorous checks and structural discipline to every phase of construction."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow rounded-sm relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-accent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <item.icon size={40} className="text-primary mb-6" />
                                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History / Timeline */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Journey</h2>
                        <p className="text-slate-600 text-lg">Four decades of structural excellence and home building innovation.</p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

                        {[
                            { year: "1985", title: "The Foundation", desc: "Michael Leighton starts his construction journey, focusing on quality framing and structural integrity." },
                            { year: "1995", title: "Luxury Expansion", desc: "Stonebrook pivots exclusively to high-end custom home construction and complex renovations." },
                            { year: "2012", title: "Aviation Integration", desc: "Justin Sexton joins, bringing commercial aviation's systems and checklists to construction management." },
                            { year: "2020", title: "Scottsdale HQ", desc: "Established our premier design and operations center in the heart of Scottsdale, AZ." },
                            { year: "2026", title: "Precision Standard", desc: "Recognized as Arizona's leader in precision-driven, high-transparency luxury building." }
                        ].map((event, i) => (
                            <div key={i} className={`flex items-center mb-16 relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:block md:w-1/2"></div>
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm z-10"></div>
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
                                        <div className="md:hidden absolute top-4 -left-12 w-8 h-0.5 bg-slate-200"></div>
                                        <span className="text-accent font-bold text-xl md:text-2xl block mb-2">{event.year}</span>
                                        <h3 className="text-xl font-bold text-primary mb-3">{event.title}</h3>
                                        <p className="text-slate-600">{event.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our People</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold">Meet the Leadership</h2>
                        </div>
                        <Link to="/careers" className="px-8 py-3 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-colors">
                            Join Our Team
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {[
                            {
                                name: "Michael Leighton",
                                role: "Founder & CEO",
                                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
                            },
                            {
                                name: "Justin Sexton",
                                role: "Co-Founder & COO",
                                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                            }
                        ].map((member, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-lg">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-2xl font-serif font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-accent uppercase tracking-widest text-xs font-bold">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
