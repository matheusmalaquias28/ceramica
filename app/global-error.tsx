"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
          <h1>Algo deu errado</h1>
          <p>Não foi possível carregar a página. Tente novamente.</p>
          <button type="button" onClick={() => reset()} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
            Recarregar
          </button>
        </main>
      </body>
    </html>
  );
}
