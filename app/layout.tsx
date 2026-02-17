import "./globals.css";

export const metadata = {
  title: "TradeBook",
  description: "Jurnal & Kelas Trading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <strong style={{ fontSize: '1.2rem' }}>TradeBook</strong>
          <div>
            <a href="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#000' }}>Home</a>
            <a href="/journal" style={{ marginRight: '15px', textDecoration: 'none', color: '#000' }}>Jurnal</a>
            <a href="/courses" style={{ textDecoration: 'none', color: '#000' }}>Kelas</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
