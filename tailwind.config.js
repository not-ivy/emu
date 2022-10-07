/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hr-background": "var(--background)",
        "hr-f-high": "var(--f_high)",
        "hr-f-med": "var(--f_med)",
        "hr-f-low": "var(--f_low)",
        "hr-f-inv": "var(--f_inv)",
        "hr-b-high": "var(--b_high)",
        "hr-b-med": "var(--b_med)",
        "hr-b-low": "var(--b_low)",
        "hr-b-inv": "var(--b_inv)",
      }
    },
  },
  plugins: [],
}
