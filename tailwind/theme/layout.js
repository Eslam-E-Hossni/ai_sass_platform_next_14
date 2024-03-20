const layout = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  borderRadius: {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
  },

  backgroundImage: {
    "purple-gradient": "url('/assets/images/gradient-bg.svg')",
    banner: "url('/assets/images/banner-bg.png')",
  },
};

module.exports = layout;
