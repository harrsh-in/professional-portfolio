import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "background-color": "var(--background-color)",
                "font-color": "var(--font-color)",
                "highlight-color": "var(--highlight-color)",
            },
        },
    },
    plugins: [],
};
export default config;
