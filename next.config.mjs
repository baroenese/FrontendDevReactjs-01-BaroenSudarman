/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "restaurant-api.dicoding.dev",
                port: "",
                pathname: "/images/**",
            },
        ],
    },
};

export default nextConfig;
