import { OpenGraphText } from "@/components/og";

export const runtime = "edge";

export default async function Image() {
  return OpenGraphText({ title: "Selim M", description: "Software Engineer" });
}
