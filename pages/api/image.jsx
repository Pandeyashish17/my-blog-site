// /pages/api/og.tsx

import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Hello World!";

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 40,
            color: "white",
            background: "#00002C",
            width: "100%",
            height: "100%",
            padding: "50px 200px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div tw="bg-red-500 rounded-full w-10 h-10"></div>
          <div tw="bg-yellow-500 rounded-full w-10 h-10"></div>
          <div tw="bg-green-500 rounded-full w-10 h-10"></div>
          {title}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
