import { ImageResponse } from "next/og";

export const alt = "Vixon Group";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B0F19",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div
          style={{
            color: "#00A3AD",
            fontSize: 22,
            letterSpacing: 8,
            fontWeight: 600,
          }}
        >
          VIXON GROUP
        </div>
        <div
          style={{
            color: "#F4F7FB",
            fontSize: 54,
            fontWeight: 600,
            marginTop: 28,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Tecnología que funciona. Marketing que la hace crecer.
        </div>
      </div>
    ),
    { ...size },
  );
}
