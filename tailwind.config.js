/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "amrita-bg":
          "url('https://amrita.edu/iqac/IQAC%20-%20Amrita%20Vishwa%20Vidyapeetham_files/amrita-vishwa-vidyapeetham-coimbatore-campus-dron-image-01-2.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
