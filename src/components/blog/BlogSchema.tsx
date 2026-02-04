import { Helmet } from 'react-helmet-async';

interface BlogSchemaProps {
    title: string;
    description: string;
    datePublished: string;
    authorName: string;
    image: string;
    url: string;
}

const BlogSchema = ({ title, description, datePublished, authorName, image, url }: BlogSchemaProps) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": image,
        "datePublished": datePublished,
        "dateModified": datePublished, // Ideally this would track updates
        "author": {
            "@type": "Person",
            "name": "Stonebrook Homes",
            "url": "https://stonebrook.homes/about"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Stonebrook Homes",
            "logo": {
                "@type": "ImageObject",
                "url": "https://stonebrook.homes/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        },
        "inLanguage": "en-US",
        "isAccessibleForFree": true,
        "articleBody": description
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default BlogSchema;
