"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

interface ZoomedImage {
  src: string;
  alt: string;
}

interface ZoomableProseProps {
  html: string;
}

export function ZoomableProse({ html }: ZoomableProseProps) {
  const [zoomedImage, setZoomedImage] = useState<ZoomedImage | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const proseRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef(false);
  const triggerIndexRef = useRef(0);

  useEffect(() => {
    if (!zoomedImage) {
      if (restoreFocusRef.current && proseRef.current) {
        restoreFocusRef.current = false;
        const focusTimer = window.setTimeout(() => {
          proseRef.current
            ?.querySelectorAll<HTMLButtonElement>(".zoomable-image-button")
            .item(triggerIndexRef.current)
            ?.focus();
        }, 0);
        return () => window.clearTimeout(focusTimer);
      }
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomedImage(null);
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomedImage]);

  const openImage = (event: React.MouseEvent<HTMLDivElement>) => {
    const trigger = (event.target as HTMLElement).closest<HTMLButtonElement>(".zoomable-image-button");
    const image = trigger?.querySelector("img");
    if (!trigger || !image) return;

    triggerIndexRef.current = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>(".zoomable-image-button"),
    ).indexOf(trigger);
    restoreFocusRef.current = true;
    setZoomedImage({ src: image.currentSrc || image.src, alt: image.alt });
  };

  return (
    <>
      <div
        ref={proseRef}
        className="inference-prose"
        onClick={openImage}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {zoomedImage && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background/95 p-3 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded diagram"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setZoomedImage(null);
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:right-6 sm:top-6"
            aria-label="Close expanded image"
            onClick={() => setZoomedImage(null)}
          >
            <X size={18} aria-hidden="true" />
          </button>

          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            className="max-h-[calc(100vh-1.5rem)] max-w-[calc(100vw-1.5rem)] object-contain sm:max-h-[calc(100vh-4rem)] sm:max-w-[calc(100vw-4rem)]"
          />
        </div>
      )}
    </>
  );
}
