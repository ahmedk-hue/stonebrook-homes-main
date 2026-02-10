
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Ruler, FileText, ArrowRight, Wallet } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CostGuide = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isUnlocked = sessionStorage.getItem('unlocked_cost_guide');
        if (!isUnlocked) {
            navigate('/resources/cost-guide-optin');
        }
    }, [navigate]);

    return (
        <>
            <Helmet>
                <title>The Scottsdale Luxury Cost to Build Report | 2026 Edition</title>
                <meta name="robots" content="noindex" />
                <link rel="canonical" href="https://stonebrook.homes/resources/cost-guide" />
            </Helmet>

            {/* Hero Section */}
            <section className="bg-stone-900 text-white pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <span className="inline-block py-1 px-3 border border-stone-700 rounded-full text-xs font-medium tracking-wider mb-6 bg-stone-800/50">
                        OFFICIAL REPORT
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                        The True Cost to Build <br />
                        <span className="text-stone-400 italic">in Scottsdale & Paradise Valley</span>
                    </h1>
                    <p className="text-xl text-stone-300 max-w-2xl mx-auto">
                        A comprehensive breakdown of construction costs, soft costs, and what you can expect to pay for your luxury custom home in the Arizona market.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-10 relative z-10">
                <div className="bg-white rounded-xl shadow-xl border border-stone-200 overflow-hidden">
                    <div className="p-8 md:p-12">

                        {/* Introduction */}
                        <div className="prose prose-stone max-w-none mb-16">
                            <p className="lead text-xl text-stone-800 font-medium">
                                The question we get asked most often is, "How much does it cost to build a luxury custom home?" In the Arizona desert, the answer involves unique considerations for topography, heat, and premium materials.
                            </p>
                            <p>
                                Moving into 2026, we've seen material prices stabilize after years of volatility, but labor costs in the Scottsdale market remains high due to the demand for elite craftsmanship.
                                This guide separates "Hard Costs" (sticks and bricks) from "Soft Costs" (fees and services), giving you a clear picture of the total investment required for a Stonebrook home.
                            </p>
                        </div>

                        {/* Section 1: Cost Per Square Foot */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-stone-100 rounded-lg">
                                    <Ruler className="w-6 h-6 text-stone-800" />
                                </div>
                                <h2 className="text-2xl font-serif text-stone-900 m-0">1. Cost Per Square Foot Breakdown</h2>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-stone-100">
                                            <th className="py-4 pr-4 font-semibold text-stone-900">Finish Level</th>
                                            <th className="py-4 px-4 font-semibold text-stone-900">Price Range (Per Sq. Ft.)</th>
                                            <th className="py-4 pl-4 font-semibold text-stone-900">What to Expect</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-stone-600 align-top">
                                        <tr className="border-b border-stone-50">
                                            <td className="py-6 pr-4 font-medium text-stone-900">Premium / Modern</td>
                                            <td className="py-6 px-4 font-semibold text-stone-800">$450 - $650</td>
                                            <td className="py-6 pl-4 text-sm">
                                                High-quality natural stone, custom steel windows, premium desert landscaping, and high-efficiency cooling systems.
                                            </td>
                                        </tr>
                                        <tr className="border-b border-stone-50">
                                            <td className="py-6 pr-4 font-medium text-stone-900">Ultra-Luxury / Estate</td>
                                            <td className="py-6 px-4 font-semibold text-stone-800">$650 - $900</td>
                                            <td className="py-6 pl-4 text-sm">
                                                Custom imported flooring, complete smart home integration, infinity pools, and complex cantilevers.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-6 pr-4 font-medium text-stone-900">Iconic / Masterpiece</td>
                                            <td className="py-6 px-4 font-semibold text-stone-800">$1,000+</td>
                                            <td className="py-6 pl-4 text-sm">
                                                Unique architectural silhouettes, museum-grade finishes, custom underground garages, and bespoke art installations.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-100 text-sm text-amber-900">
                                <strong>Note:</strong> These figures are for the <em>home only</em>. They generally do not include the cost of the land or heavy site work (desert grading, rock removal).
                            </div>
                        </div>

                        {/* Section 2: Soft Costs */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-stone-100 rounded-lg">
                                    <FileText className="w-6 h-6 text-stone-800" />
                                </div>
                                <h2 className="text-2xl font-serif text-stone-900 m-0">2. The Arizona Soft Costs</h2>
                            </div>
                            <p className="text-stone-600 mb-6">
                                The complexity of building in the Sonoran Desert often means higher soft costs for engineering and environmental compliance.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                    <h3 className="font-semibold text-stone-900 mb-4 flex items-center gap-2">
                                        <DollarSign className="w-4 h-4" /> Essential Soft Costs
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between text-sm">
                                            <span className="text-stone-600">Architectural Design</span>
                                            <span className="font-medium">$40k - $150k+</span>
                                        </li>
                                        <li className="flex justify-between text-sm">
                                            <span className="text-stone-600">Structural & MEP Engineering</span>
                                            <span className="font-medium">$12k - $30k</span>
                                        </li>
                                        <li className="flex justify-between text-sm">
                                            <span className="text-stone-600">Geotechnical (Rock) Analysis</span>
                                            <span className="font-medium">$5k - $12k</span>
                                        </li>
                                        <li className="flex justify-between text-sm">
                                            <span className="text-stone-600">Permits & Impact Fees</span>
                                            <span className="font-medium">$25k - $60k</span>
                                        </li>
                                        <li className="flex justify-between text-sm">
                                            <span className="text-stone-600">Water & Utility Connections</span>
                                            <span className="font-medium">$20k - $50k</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 flex flex-col justify-center">
                                    <div className="text-center">
                                        <p className="text-stone-500 text-sm mb-2">Estimated Soft Costs Total</p>
                                        <p className="text-3xl font-bold text-stone-900 mb-2">$100k - $300k+</p>
                                        <p className="text-xs text-stone-400">Depending on municipality and site complexity (Scottsdale impact fees can be significant).</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Sample Budgets */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-stone-100 rounded-lg">
                                    <Wallet className="w-6 h-6 text-stone-800" />
                                </div>
                                <h2 className="text-2xl font-serif text-stone-900 m-0">3. Sample Project Budgets</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Budget 1 */}
                                <div className="border border-stone-200 rounded-xl p-6 relative">
                                    <div className="absolute top-0 right-0 bg-stone-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                                    <h3 className="font-serif text-xl text-stone-900 mb-2">The "Empty Nester"</h3>
                                    <p className="text-sm text-stone-500 mb-6">2,400 Sq. Ft. Ranch | Mid-High Finish</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-stone-600">Construction</span>
                                            <span className="font-medium">$840,000</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-stone-600">Plan & Permits</span>
                                            <span className="font-medium">$65,000</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-stone-600">Site Prep</span>
                                            <span className="font-medium">$45,000</span>
                                        </div>
                                        <div className="border-t border-stone-100 pt-3 flex justify-between font-bold text-lg text-stone-900">
                                            <span>Total Est.</span>
                                            <span>$950,000</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Budget 2 */}
                                <div className="border border-stone-200 rounded-xl p-6">
                                    <h3 className="font-serif text-xl text-stone-900 mb-2">The "Forever Home"</h3>
                                    <p className="text-sm text-stone-500 mb-6">4,000 Sq. Ft. Two-Story | Luxury Finish</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-stone-600">Construction</span>
                                            <span className="font-medium">$1,800,000</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-stone-600">Plan & Permits</span>
                                            <span className="font-medium">$85,000</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-stone-600">Site Prep</span>
                                            <span className="font-medium">$60,000</span>
                                        </div>
                                        <div className="border-t border-stone-100 pt-3 flex justify-between font-bold text-lg text-stone-900">
                                            <span>Total Est.</span>
                                            <span>$1,945,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Conclusion / CTA */}
                        <div className="bg-stone-50 rounded-xl p-8 text-center border border-stone-200">
                            <h3 className="text-2xl font-serif text-stone-900 mb-4">Want a specific number for your project?</h3>
                            <p className="text-stone-600 mb-8 max-w-lg mx-auto">
                                Every site is unique. Schedule a free Discovery Session, and we can help you build a preliminary budget based on your specific land and vision.
                            </p>
                            <button
                                onClick={() => navigate('/booking')}
                                className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-stone-800 transition-colors"
                            >
                                Book a Discovery Session <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Spacer for bottom breathing room */}
            <div className="h-20"></div>
        </>
    );
};

export default CostGuide;
