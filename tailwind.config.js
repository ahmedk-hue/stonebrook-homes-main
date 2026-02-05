/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#406868", // Dark Teal/Slate
                secondary: "#000000", // Black (Dossier)
                accent: "#406868", // Removed Rusty, using Primary for now
                surface: "#F8FAFC", // Light Grey Surface
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
            },
        },
    },
    plugins: [],
}
