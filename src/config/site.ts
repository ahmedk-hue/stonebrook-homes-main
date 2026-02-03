
export const SITE_CONFIG = {
    name: "Stonebrook Construction",
    shortName: "Stonebrook", // Used in tighter spaces or mobile if needed
    tagline: "Premier Luxury Custom Home Builder in Arizona",
    description: "Expert craftsmanship in Scottsdale home renovation and custom home building. Transform your vision into reality with Stonebrook Homes.",
    foundingYear: 1986, // "Nearly 40 years of experience" implies approx 1986
    contact: {
        phone: "(480) 818-0201",
        phoneHref: "tel:4808180201",
        email: "stonebrookconstruction@outlook.com",
        address: {
            street: "7585 E Redfield RD Suite 211",
            city: "Scottsdale",
            state: "AZ",
            zip: "85260",
            mapLink: "https://maps.google.com/?q=7585+E+Redfield+RD+Suite+211,+Scottsdale,+AZ+85260"
        }
    },
    socials: {
        facebook: "https://facebook.com", // Placeholder if not found, SOP says leave or empty
        instagram: "https://instagram.com", // Placeholder
        linkedin: "https://linkedin.com", // Placeholder
    },
    serviceAreas: [
        { name: "Scottsdale", path: "/locations/scottsdale" },
        { name: "Phoenix", path: "/locations/phoenix" },
        { name: "Paradise Valley", path: "/locations/paradise-valley" },
        { name: "Tempe", path: "/locations/tempe" },
        { name: "Peoria", path: "/locations/peoria" },
        { name: "Mesa", path: "/locations/mesa" },
        { name: "Chandler", path: "/locations/chandler" },
        { name: "Gilbert", path: "/locations/gilbert" },
        { name: "Cave Creek", path: "/locations/cave-creek" },
        { name: "Fountain Hills", path: "/locations/fountain-hills" },
        { name: "Surprise", path: "/locations/surprise" },
    ],
    services: [
        { name: "New Custom Homes", path: "/services/new-construction" },
        { name: "Home Remodels", path: "/services/remodeling" },
        { name: "Tenant Improvements", path: "/services/tenant-improvements" },
        { name: "Commercial Construction", path: "/services/commercial" },
        { name: "Consulting & Project Management", path: "/services/consulting" },
    ]
};
