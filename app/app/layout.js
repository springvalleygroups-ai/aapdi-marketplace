export const metadata = {
  title: "Aapdi Marketplace",
  description: "Multi Vendor Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
