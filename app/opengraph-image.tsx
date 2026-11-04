import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0B1020",
          color: "#F3F0E8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", width: 36 }}>
          <div style={{ width: 18, background: "#004D98" }} />
          <div style={{ width: 18, background: "#A50044" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 80px", flex: 1 }}>
          <div style={{ fontSize: 26, letterSpacing: 4, color: "#9AA3B5", textTransform: "uppercase" }}>{site.credential}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 132, fontWeight: 800, letterSpacing: -4, lineHeight: 0.95, textTransform: "uppercase" }}>
              {site.name}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", fontSize: 40, marginTop: 28, color: "#9AA3B5" }}>
              <span>{site.headline.lead}</span>
              <span style={{ color: "#F3F0E8", marginLeft: 12 }}>{site.headline.emphasis}</span>
            </div>
          </div>
          <div style={{ fontSize: 24, color: "#6B7489" }}>{site.github.replace("https://", "")}</div>
        </div>
      </div>
    ),
    size,
  );
}
