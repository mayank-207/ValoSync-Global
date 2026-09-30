import type { Metadata } from "next";

// Set NEXT_PUBLIC_SITE_URL when the official domain is connected.
export const siteOrigin = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://valosync-global.netlify.app"
).replace(/\/$/, "");

// A deploy preview must load its own image route before the PR is merged.
const imageOrigin = (
  process.env.DEPLOY_PRIME_URL || siteOrigin
).replace(/\/$/, "");

type ShareOptions = {
  path: string;
  title: string;
  description: string;
  section: string;
  visual?: string;
};

export function shareMetadata({
  path,
  title,
  description,
  section,
  visual,
}: ShareOptions): Pick<Metadata, "openGraph" | "twitter"> {
  const image = new URL("/share-image", imageOrigin);
  image.searchParams.set("page", path);
  image.searchParams.set("title", title.replace(/\s*\|\s*ValoSync Global$/i, ""));
  image.searchParams.set("section", section);
  if (visual) image.searchParams.set("visual", visual);

  const imageUrl = image.toString();
  return {
    openGraph: {
      type: "website",
      locale: "en_AU",
      alternateLocale: ["en_IN", "en_US"],
      siteName: "ValoSync Global",
      url: new URL(path, siteOrigin).toString(),
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | ValoSync Global`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
