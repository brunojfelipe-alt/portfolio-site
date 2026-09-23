"use client";

import { useEffect, useState } from "react";

export default function ImageLightbox({
  children,
}: {
  children: React.ReactNode;
}) {
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState("");

  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSrc(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [src]);

  return (
    <>
      <div
        onDoubleClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.tagName === "IMG") {
            const img = target as HTMLImageElement;
            setSrc(img.src);
            setAlt(img.alt);
          }
        }}
      >
        {children}
      </div>

      {src && (
        <div className="lightbox" onClick={() => setSrc(null)}>
          <img src={src} alt={alt} />
        </div>
      )}
    </>
  );
}
