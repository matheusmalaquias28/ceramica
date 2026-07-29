import Image from "next/image";

type StudentWork = {
  name: string;
  city: string;
  img: string;
  width: number;
  height: number;
};

type Props = {
  items: StudentWork[];
  /** Largura de cada slide em px (~1,5 visíveis no mobile com container de 480px). */
  itemWidth?: number;
  duration?: number;
};

export function StudentWorksCarousel({ items, itemWidth = 300, duration = 36 }: Props) {
  return (
    <div className="w-full overflow-hidden">
      <div
        className="marquee-track flex w-max gap-[10px]"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) =>
          items.map((item, i) => (
            <article
              key={`${copy}-${i}`}
              className="relative shrink-0"
              style={{ width: itemWidth }}
              aria-hidden={copy === 1}
            >
              <Image
                src={item.img}
                alt={`Peça de cerâmica feita por ${item.name}, ${item.city}`}
                width={item.width}
                height={item.height}
                sizes={`${itemWidth}px`}
                loading={copy === 1 || i > 0 ? "lazy" : undefined}
                className="aspect-[4/5] w-full rounded-[10px] border border-[color-mix(in_srgb,#959c79_25%,white)] object-cover"
                aria-hidden={copy === 1}
              />
              <div className="absolute left-[10px] top-[10px] max-w-[calc(100%-20px)] rounded-[8px] bg-white/95 px-[10px] py-[8px] shadow-[0_4px_14px_rgba(101,78,61,0.14)] backdrop-blur-[2px]">
                <p className="font-heading text-[13px] font-bold leading-[1.2] text-ink">{item.name}</p>
                <p className="text-[11px] text-muted">{item.city}</p>
              </div>
            </article>
          )),
        )}
      </div>
    </div>
  );
}
