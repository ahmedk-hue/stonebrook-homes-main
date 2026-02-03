export const SITE_CONFIG = {
    name: "Stonebrook Homes",
    shortName: "Stonebrook", // Used in tighter spaces or mobile if needed
    tagline: "Uncompromising Quality. Timeless Design.",
    description: "Stonebrook Homes specializes in luxury custom homes, whole-home remodeling, and additions in Scottsdale and the surrounding Arizona Valley.",
    foundingYear: 1985,
    contact: {
        phone: "(480) 818-0201",
        phoneHref: "tel:4808180201",
        email: "stonebrookconstruction@outlook.com",
        address: {
            street: "7585 E Redfield RD Suit 211",
            city: "Scottsdale",
            state: "AZ",
            zip: "85260",
            mapLink: "https://maps.google.com/?q=7585+E+Redfield+RD+Suit+211,+Scottsdale,+AZ+85260"
        }
    },
    socials: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
    },
    serviceAreas: [
        { name: "Scottsdale", path: "/locations/scottsdale" },
        { name: "Paradise Valley", path: "/locations/paradise-valley" },
        { name: "Fountain Hills", path: "/locations/fountain-hills" },
        { name: "Carefree", path: "/locations/carefree" },
        { name: "Cave Creek", path: "/locations/cave-creek" },
        { name: "Phoenix", path: "/locations/phoenix" },
    ],
    services: [
        { name: "New Custom Homes", path: "/services/new-construction" },
        { name: "Home Remodeling", path: "/services/remodeling" },
        { name: "Home Additions", path: "/services/additions" },
        { name: "Commercial Construction", path: "/services/commercial" },
    ]
};
