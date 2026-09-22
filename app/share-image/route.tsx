import { ImageResponse } from "next/og";
import sharp from "sharp";
import { siteOrigin } from "@/lib/shareMetadata";

export const runtime = "nodejs";

const WIDTH = 1200;
const HEIGHT = 630;
const ALLOWED_VISUAL = /^\/images\/(?:departments|services)\/[a-z0-9-]+\.webp$|^\/images\/naas-network-hero\.webp$/;

function clean(value: string | null, limit: number) {
  return (value || "").replace(/[<>\r\n]/g, " ").trim().slice(0, limit);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = clean(url.searchParams.get("title"), 110) || "Connected Expertise";
  const section = clean(url.searchParams.get("section"), 36) || "ValoSync Global";
  const page = clean(url.searchParams.get("page"), 120) || "/";
  const visual = url.searchParams.get("visual") || "";
  const variation = Array.from(page).reduce((total, char) => total + char.charCodeAt(0), 0) % 4;

  let photo: string | undefined;
  if (ALLOWED_VISUAL.test(visual)) {
    try {
      const response = await fetch(new URL(visual, url.origin), {
        signal: AbortSignal.timeout(2500),
      });
      if (response.ok) {
        const bytes = await response.arrayBuffer();
        if (bytes.byteLength < 1_500_000) {
          const jpeg = await sharp(Buffer.from(bytes))
            .resize(690, HEIGHT, { fit: "cover" })
            .jpeg({ quality: 82 })
            .toBuffer();
          photo = `data:image/jpeg;base64,${jpeg.toString("base64")}`;
        }
      }
    } catch {
      // Keep a complete branded card if a photo is unavailable in a preview.
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(115deg, #071A33 0%, #0B3D91 72%, #1565C0 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        {photo && (
          // ImageResponse renders the embedded local image into a social-ready PNG.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt=""
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: 690,
              height: HEIGHT,
              objectFit: "cover",
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: photo
              ? "linear-gradient(90deg, #071A33 0%, #071A33 31%, rgba(7,26,51,0.90) 56%, rgba(7,26,51,0.34) 100%)"
              : "linear-gradient(120deg, #071A33 0%, #0B3D91 75%, #1565C0 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 440,
            height: 440,
            borderRadius: 220,
            border: "2px solid rgba(212,175,55,0.3)",
            right: variation * 25 - 100,
            top: variation * 28 - 90,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: 160,
            border: "1px solid rgba(255,255,255,0.22)",
            right: variation * 25 - 40,
            top: variation * 28 - 30,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 70,
            width: 1060,
            height: 518,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
            <div
              style={{
                display: "flex",
                width: 6,
                height: 48,
                background: "#D4AF37",
              }}
            />
            <span style={{ fontSize: 23, fontWeight: 800, letterSpacing: 2 }}>
              VALOSYNC GLOBAL
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "#D4AF37",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
                marginBottom: 19,
              }}
            >
              {section}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: title.length > 62 ? 45 : title.length > 38 ? 54 : 65,
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: -1.8,
                textShadow: "0 3px 16px rgba(0,0,0,0.28)",
              }}
            >
              {title}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 72, height: 4, background: "#D4AF37" }} />
            <span style={{ fontSize: 21, color: "#E7EDF7" }}>
              {new URL(siteOrigin).hostname}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
    },
  );
}
