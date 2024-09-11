import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Portfolio of Meet Rakholiya - Full Stack Developer",
        short_name: "Portfolio",
        description: "A portfolio showcasing the projects and work experience of Meet Rakholiya, a full stack developer with expertise in React.js, Next.js, Node.js, and backend technologies like Nest.js and MongoDB.",
        start_url: "/",
        display: "standalone",
        background_color: "#f0f7ff",
        theme_color: "#333333",
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}