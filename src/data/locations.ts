export interface LocationData {
    slug: string;
    name: string;
    metaTitle: string;
    metaDescription: string;
    introTitle: string;
    introText: string;
    image: string;
    landmarks: string[];
}

export const locations: LocationData[] = [
    {
        slug: 'scottsdale',
        name: 'Scottsdale',
        metaTitle: 'Luxury Custom Home Builders Scottsdale, AZ | Stonebrook Homes',
        metaDescription: 'Building high-precision luxury estates in Scottsdale. Specialized in DC Ranch, Silverleaf, and North Scottsdale custom builds.',
        introTitle: 'Honesty & Precision in Scottsdale',
        introText: 'As Scottsdale\'s premier luxury builder, we understand the distinct architectural demands of DC Ranch, Silverleaf, and the surrounding high-desert communities. Our aviation-grade approach ensures your estate is built to the highest standards of structural integrity.',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop',
        landmarks: ['DC Ranch', 'Silverleaf Club', 'Old Town Scottsdale', 'McDowell Sonoran Preserve']
    },
    {
        slug: 'paradise-valley',
        name: 'Paradise Valley',
        metaTitle: 'Custom Estate Builders Paradise Valley, AZ | Stonebrook Homes',
        metaDescription: 'Ultra-luxury custom home building in Paradise Valley. Specialized in private estates, hillside builds, and expansive luxury residences.',
        introTitle: 'Ultra-Luxury Estates in Paradise Valley',
        introText: 'Paradise Valley represents the pinnacle of Arizona living. We specialize in ultra-luxury estates that demand extreme privacy and sophisticated engineering, ensuring every detail reflects the prestige of the zip code.',
        image: 'https://images.unsplash.com/photo-1600596542815-afaad110a30b?q=80&w=2071&auto=format&fit=crop',
        landmarks: ['Camelback Mountain', 'Echo Canyon', 'Sanctuary Resort', 'Paradise Valley Country Club']
    },
    {
        slug: 'fountain-hills',
        name: 'Fountain Hills',
        metaTitle: 'Custom Home Builders Fountain Hills, AZ | Stonebrook Homes',
        metaDescription: 'Expert hillside custom building in Fountain Hills. Maximum views and structural precision for luxury desert residences.',
        introTitle: 'Hillside Engineering & Epic Views',
        introText: 'Fountain Hills presents unique geographical challenges that require expert structural engineering. We specialize in hillside custom builds that maximize the stunning desert vistas while ensuring long-term stability.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
        landmarks: ['The Fountain', 'McDowell Mountains', 'SunRidge Canyon', 'Eagle Mountain']
    },
    {
        slug: 'carefree',
        name: 'Carefree',
        metaTitle: 'Luxury Custom Homes Carefree, AZ | Stonebrook Homes',
        metaDescription: 'High-desert architecture and boulder-integrated custom homes in Carefree. Precision building for discerning homeowners.',
        introTitle: 'Sophisticated High-Desert Architecture',
        introText: 'Building in Carefree requires a deep respect for the natural desert landscape. We specialize in high-desert architecture that integrates seamlessly with the iconic boulder formations and saguaro forests.',
        image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop',
        landmarks: ['Carefree Desert Gardens', 'Sundial', 'Black Mountain', 'Boulders Resort']
    },
    {
        slug: 'cave-creek',
        name: 'Cave Creek',
        metaTitle: 'Custom Home Builders Cave Creek, AZ | Stonebrook Homes',
        metaDescription: 'Modern rustic custom builds in Cave Creek. Experience the ultimate desert lifestyle with luxury home construction.',
        introTitle: 'Modern Rustic & Desert Lifestyle',
        introText: 'Cave Creek offers a unique blend of rugged desert charm and modern luxury. Our custom builds in the area reflect this spirit, emphasizing indoor-outdoor living and authentic materials.',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
        landmarks: ['Cave Creek Regional Park', 'Spur Cross Ranch', 'Frontier Town', 'Black Mountain']
    },
    {
        slug: 'phoenix',
        name: 'Phoenix',
        metaTitle: 'Luxury Infill & Estate Builders Phoenix, AZ | Stonebrook Homes',
        metaDescription: 'Specializing in Arcadia, Biltmore, and North Phoenix luxury custom homes. Precision construction for urban and estate properties.',
        introTitle: 'Urban Estates & Infill Excellence',
        introText: 'From the lush landscapes of Arcadia to the prestigious estates of the Biltmore, we bring precision-driven construction to Phoenix\'s most desirable neighborhoods.',
        image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop',
        landmarks: ['Arcadia', 'Biltmore', 'Papago Park', 'South Mountain']
    }
];
