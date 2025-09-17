/** @type {import('tailwindcss').Config} */

export const content = [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];

export const theme = {
    extend: {
        keyframes: {
            "fade-in": {
                "0%": { opacity: "0" },
                "100%": { opacity: "1" },
            },
            title: {
                "0%": { opacity: "0", transform: "translateY(1rem)" },
                "100%": { opacity: "1", transform: "translateY(0)" },
            },
            glow: {
                "0%": { opacity: "0" },
                "50%": { opacity: "1" },
                "100%": { opacity: "0" },
            },
        },
        animation: {
            "fade-in": "fade-in 1s ease-out forwards",
            title: "title 1s ease-out forwards",
            glow: "glow 2s ease-in-out infinite",
        },
    },
};
export const plugins = [];
