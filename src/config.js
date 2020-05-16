export default {
  baseUrl:
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000"
      : "https://api.spnta.com",
};
