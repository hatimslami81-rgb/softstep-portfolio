export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          background: "#05070d",
          color: "#e6edf7",
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 14, letterSpacing: 2, color: "#8ea0bd" }}>404</p>
          <h1 style={{ fontSize: 28, marginTop: 8 }}>Page not found</h1>
          <a href="/" style={{ color: "#00d2ff", marginTop: 16, display: "inline-block" }}>
            Back to Soft Step
          </a>
        </div>
      </body>
    </html>
  );
}
