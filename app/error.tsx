'use client';

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <h2>เกิดข้อผิดพลาดบางอย่าง</h2>
        <p>{error.message}</p>
      </body>
    </html>
  );
}
