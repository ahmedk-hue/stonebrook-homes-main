export interface ProjectData {
    slug: string;
    title: string;
    category: string;
    location: string;
    description: string;
    challenge: string;
    solution: string;
    stats: {
        sqFt: string;
        duration: string;
        beds: string;
        baths: string;
    };
    mainImage: string;
    gallery: string[];
    testimonial?: {
        videoThumbnail: string; // Placeholder for video thumbnail
        videoUrl: string;       // Placeholder for video URL (e.g., YouTube/Vimeo)
        quote: string;
        author: string;
    };
}

export const projects: ProjectData[] = [
    {
        slug: 'prairie-horizon',
        title: "The Prairie Horizon",
        category: "Custom Build",
        location: "Scottsdale, AZ",
        description: "A 5,500 sq ft legacy build in Scottsdale, engineered for a family that values both architectural boldness and technical precision.",
        challenge: "The client wanted a home that felt expansive and open, yet provided complete acoustic privacy and integrated smart home automation that 'disappeared' into the design.",
        solution: "We utilized massive floor-to-ceiling glazing with high-performance thermal breaks to maintain efficiency while opening the home to desert views. Integrated smart systems manage everything from lighting to climate, all controlled via a unified interface.",
        stats: {
            sqFt: "5,500",
            duration: "18 Months",
            beds: "5",
            baths: "5.5"
        },
        mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
        ],
        testimonial: {
            videoThumbnail: "https://images.unsplash.com/photo-1516156008625-3a9d60bdd72e?q=80&w=2070&auto=format&fit=crop",
            videoUrl: "#",
            quote: "Stonebrook handled the complexity of our Scottsdale build with staggering detail. No surprises, no excuses, just execution.",
            author: "The Miller Family"
        }
    },
    {
        slug: 'modern-farmhouse-cave-creek',
        title: "The Modern Farmhouse",
        category: "Custom Build",
        location: "Cave Creek, AZ",
        description: "A luxury estate on private land in Cave Creek, reimagining the farmhouse aesthetic for the desert landscape.",
        challenge: "Navigating Cave Creek's unique topography and strict residential design guidelines while the client requested seamless indoor-outdoor living with expansive glazing.",
        solution: "We engineered custom structural cantilevers to support large patio overhangs without obstructing views. The home features a zero-edge pool that visually merges with the desert horizon.",
        stats: {
            sqFt: "4,800",
            duration: "16 Months",
            beds: "4",
            baths: "4.5"
        },
        mainImage: "/projects/modern-farmhouse.png",
        gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop"
        ],
        testimonial: {
            videoThumbnail: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop",
            videoUrl: "#",
            quote: "Our dream was to have a home that truly felt apart of the Cave Creek desert. Stonebrook's technical mastery made it a reality.",
            author: "The Anderson Family"
        }
    },
    {
        slug: 'silverleaf-manor',
        title: "Silverleaf Manor",
        category: "Custom Build",
        location: "Scottsdale, AZ",
        description: "A desert-modern masterpiece in the prestigious Silverleaf community, blending organic materials with high-technology structural systems.",
        challenge: "The steep hillside lot required complex vertical structural engineering and strict adherence to the community's design guidelines while maintaining 360-degree desert views.",
        solution: "We implemented a tiered foundation system and custom steel roof structures that provide shade without obstructing sightlines. The home features extensive floor-to-ceiling glass systems with aviation-grade thermal breaks.",
        stats: {
            sqFt: "8,500",
            duration: "22 Months",
            beds: "6",
            baths: "7.5"
        },
        mainImage: "/projects/silverleaf-manor.png",
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
        ],
        testimonial: {
            videoThumbnail: "https://images.unsplash.com/photo-1516156008625-3a9d60bdd72e?q=80&w=2070&auto=format&fit=crop",
            videoUrl: "#",
            quote: "Stonebrook didn't just build a home; they engineered a sanctuary. Their attention to precision and transparency is unmatched in the Scottsdale market.",
            author: "The Thompson Family"
        }
    },
    {
        slug: 'paradise-valley-sanctuary',
        title: "Paradise Valley Sanctuary",
        category: "Whole Home Remodel",
        location: "Paradise Valley, AZ",
        description: "Transforming a dated territory-style estate into a contemporary 'High-Desert' sanctuary with a focus on indoor-outdoor flow.",
        challenge: "The original structure had low ceilings and small windows that trapped heat and blocked the Camelback Mountain views. The client wanted a net-zero capable luxury environment.",
        solution: "We raised the roofline using lightweight structural steel to create vaulted ceilings and installed massive multi-slide glass walls. High-performance glazing and advanced insulation systems were integrated to minimize thermal gain.",
        stats: {
            sqFt: "5,400",
            duration: "14 Months",
            beds: "4",
            baths: "5"
        },
        mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2187&auto=format&fit=crop"
        ],
        testimonial: {
            videoThumbnail: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop",
            videoUrl: "#",
            quote: "Managing a project of this scale usually means surprises. With Stonebrook, the precision in their planning and constant communication made the process seamless.",
            author: "Dr. & Mrs. Aris"
        }
    },
    {
        slug: 'dc-ranch-modern',
        title: "DC Ranch Modern",
        category: "Light Commercial",
        location: "Scottsdale, AZ",
        description: "A boutique wellness center in DC Ranch that prioritizes natural light, acoustic privacy, and high-end architectural finishes.",
        challenge: "Strict municipal zoning for commercial spaces within residential adjacency required significant sound mitigation and low-impact site lighting.",
        solution: "We used specialized acoustic framing and triple-pane glazing to ensure patient privacy. The design utilizes deep overhangs and louvered screens to manage desert light while providing an inviting atmosphere.",
        stats: {
            sqFt: "4,200",
            duration: "11 Months",
            beds: "N/A",
            baths: "4"
        },
        mainImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
        ],
        testimonial: {
            videoThumbnail: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop",
            videoUrl: "#",
            quote: "Stonebrook understood that our commercial build had to feel as premium as our custom residential surroundings. They delivered on every detail.",
            author: "Nexus Wellness Group"
        }
    }
];
