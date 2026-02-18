export const navigateToSignup = () => {
  window.open(
    import.meta.env.VITE_DASHBOARD_URL + "/signup",
    "_blank",
    "noopener,noreferrer",
  );
};
