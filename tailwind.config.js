/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-gold': '#d4af37',
                'dark-bg': '#0f172a',
                'light-slate': '#f8fafc',
            },
            fontFamily: {
                'playfair': ['"Playfair Display"', 'serif'],
                'montserrat': ['Montserrat', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
