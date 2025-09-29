// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screen: {
                'sm': '400px',
                'md': '768px',
                'lg': '1109px',
                'xl': '1117px',
                '2xl': '1536px'
            },
            animation: {
                fadeUp: 'fadeUp 0.5s ease-out forwards',
                fadeRigth: 'fadeRight 0.8s ease-out forwards'
            }
        },
    },
    plugins: [],
}