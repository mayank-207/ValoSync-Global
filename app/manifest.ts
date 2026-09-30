import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ValoSync Global | Connected Specialist Services",
    short_name: "ValoSync Global",
    description:
      "Enterprise technology, custom software engineering, AI automation, and multidisciplinary services for Australian businesses and global enterprises.",
    start_url: "/",
    display: "standalone",
    background_color: "#071A33",
    theme_color: "#0B3D91",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
