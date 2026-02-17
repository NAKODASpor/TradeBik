import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <nav style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
          <strong>TradeBook</strong>
        </nav>
        {children}
      </body>
    </html>
  );
}
