export const META_PIXEL_ID = "703849964870347";

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

function ensureStub(): Fbq {
  if (window.fbq) return window.fbq;
  const n = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod(...args);
    else n.queue.push(args);
  } as Fbq;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  window.fbq = n;
  if (!window._fbq) window._fbq = n;
  return n;
}

/** Dispara um evento padrão do Pixel de qualquer lugar (usa a fila se o script ainda não carregou). */
export function fbTrack(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  ensureStub()("track", event, data);
}

/** Dispara um evento customizado do Pixel (fora da lista de eventos padrão da Meta). */
export function fbTrackCustom(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  ensureStub()("trackCustom", event, data);
}
