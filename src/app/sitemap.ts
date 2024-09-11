import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://v0-ooiu.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'http://localhost:3001/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        }
    ];
}