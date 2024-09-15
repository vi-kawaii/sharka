import { Inconsolata } from "next/font/google";
import "./globals.css";
import images from "./images";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "sharka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {images.map((x, i) => (
          <link rel="preload" as="image" href={x} key={i} />
        ))}
      </head>
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
