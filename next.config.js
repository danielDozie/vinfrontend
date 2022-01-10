/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    title: "OnGAD VIN Check",
    VIN_URI: "https://auto.dev/api/vin/",
    VIN_URI_2: "https://auto.dev/api/listings/",
  },
  basePath : "",
  images: {
    domains: ['img123.s3.amazonaws.com'],
  },
};
