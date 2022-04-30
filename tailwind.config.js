module.exports = {
  content: ["./public/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        bg: "var(--bg)",
        box: "var(--bg-box)",
        color: "var(--color)",

        /* THEME COLORS */
        p_red: '#EF4444',
        s_red: '#FCA5A5',

        p_blue: '#3B82F6',
        s_blue: '#93C5FD',

        p_pink: '#EC4899',
        s_pink: '#F472B6',

        p_green: '#22C55E',
        s_green: '#86EFAC',

        p_purple: '#A855F7',
        s_purple: '#D8B4FE',

        p_yellow: '#EAB308',
        s_yellow: '#FDE047',

        // MODE
        light: '#F3F4F6',
        light_bg: 'white',
        light_color: '#4B5563',

        dark: "hsl(210, 4%, 10%)",
        dark_bg: "hsl(210, 3%, 15%)",
        dark_color: "white",

        dim: "hsl(219, 30%, 13%)",
        dim_bg: "hsl(210, 3%, 18%)",
        dim_color: "white",
      },
    },
  },
  plugins: [],
};
