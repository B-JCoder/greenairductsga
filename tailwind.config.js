/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc",    // enables bg-background
        foreground: "#0a0a0a",    // enables text-foreground
        card: "#ffffff",
        "card-foreground": "#0a0a0a",
        primary: "#0a0a0a",
        "primary-foreground": "#fefefe",
        secondary: "#f1f5f9",
        "secondary-foreground": "#0a0a0a",
        muted: "#f1f5f9",
        "muted-foreground": "#6b7280",
        accent: "#f1f5f9",
        "accent-foreground": "#0a0a0a",
        destructive: "#ef4444",
        "destructive-foreground": "#fefefe",
        border: "#e5e7eb",
        input: "#e5e7eb",
        ring: "#0a0a0a",
        // Add your custom charts/colors here if needed
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
};
